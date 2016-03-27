/**
 *    UI Utils      HTTP Service
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, transient} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {EventAggregator} from "aurelia-event-aggregator";
import {UIApplication} from "./ui-application";
import {Response} from "fetch";
import "fetch";

@autoinject()
export class UIHttpService {

  constructor(public httpClient: HttpClient,
    public appState: UIApplication,
    public eventAggregator: EventAggregator) {
    this.appState.info(this.constructor.name, 'Initialized');

    httpClient.configure(
      config => {
        config
          .withBaseUrl(appState.HttpConfig.BaseUrl)
        //.withDefaults({})
          .withInterceptor({
          request(request) {
            appState.info(this.constructor.name, `Requesting ${request.method} ${request.url}`);
            appState.IsHttpInUse = true;
            request.url = encodeURI(request.url);
            return request;
          },
          response(response) {
            appState.info(this.constructor.name, `Response ${response.url} ${response.status}`);
            appState.IsHttpInUse = false;

            if (response instanceof TypeError) {
              throw Error(response['message']);
            }

            if (response.status == 401) {
              eventAggregator.publish('Unauthorized', null);
            }
            else if (response.status != 200) {
              return response.text()
                .then(resp => {
                try {
                  let json = JSON.parse(resp);
                  if (json.message) throw Error(json.message);
                  if (json.error) throw Error(json.error);
                } catch (e) {
                  if (response.statusText) throw Error(response.statusText);
                  if (!response.statusText) throw Error('Network Error!!');
                }
                return null;
              });
            }
            return response;
          },
          requestError(error) {
            appState.IsHttpInUse = false;
            if (error !== null) throw Error(error.message);
            return error;
          },
          responseError(error) {
            appState.IsHttpInUse = false;
            if (error !== null) throw Error(error.message);
            return error;
          }
        });
      });
  }

  setBaseUrl(url) {
    this.httpClient.baseUrl = url;
  }

  //**** SHARED METHODS ****//
  get(slug: string) {
    this.appState.info(this.constructor.name, `get [${slug}]`);
    return this.httpClient
      .fetch(slug,
      {
        method: 'get',
        mode: 'cors',
        headers: this.__getHeaders()
      })
      .then(resp => resp.json());
  }

  text(slug: string) {
    this.appState.info(this.constructor.name, `text [${slug}]`);
    return this.httpClient
      .fetch(slug,
      {
        method: 'get',
        mode: 'cors',
        headers: this.__getHeaders()
      })
      .then(resp => resp.text());
  }

  put(slug: string, obj) {
    this.appState.info(this.constructor.name, `put [${slug}]`);
    return this.httpClient
      .fetch(slug,
      {
        method: 'put',
        body: json(obj),
        mode: 'cors',
        headers: this.__getHeaders()
      })
      .then(resp => resp.json());
  }

  post(slug: string, obj) {
    this.appState.info(this.constructor.name, `post [${slug}]`);
    return this.httpClient
      .fetch(slug,
      {
        method: 'post',
        body: json(obj),
        mode: 'cors',
        headers: this.__getHeaders()
      })
      .then(resp => resp.json());
  }

  delete(slug: string) {
    this.appState.info(this.constructor.name, `delete [${slug}]`);
    return this.httpClient
      .fetch(slug,
      {
        method: 'delete',
        mode: 'cors',
        headers: this.__getHeaders()
      })
      .then(resp => resp.json());
  }

  upload(slug: string, form: HTMLFormElement) {
    this.appState.info(this.constructor.name, `upload [${slug}]`);
    return this.__upload('post', slug, form);
  }

  reupload(slug: string, form: HTMLFormElement) {
    this.appState.info(this.constructor.name, `reupload [${slug}]`);
    return this.__upload('put', slug, form);
  }

  __upload(method: string, slug: string, form: HTMLFormElement) {
    var data = new FormData();
    for (var i = 0, q = (form.querySelectorAll('input') as NodeListOf<HTMLInputElement>); i < q.length; i++) {
      if (q[i].type == 'file') {
        for (var x = 0; x < q[i].files.length; x++) {
          data.append((q[i].name || 'file') + (i++), q[i].files[x], q[i].files[x].name);
        }
      }
      else {
        data.append(q[i].name || ('input' + (i++)), q[i].value);
      }
    }
    return this.httpClient
      .fetch(slug,
      {
        method: method,
        body: data,
        mode: 'cors',
        headers: this.__getHeaders()
      })
      .then(resp => resp.json());
  }

  private __getHeaders() {
    var headers = {
      'X-Requested-With': 'Fetch',
      'Accept': 'application/json',
      //'Content-Type'               : 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    Object.assign(headers, this.appState.HttpConfig.Headers || {});

    if (this.appState.HttpConfig.AuthorizationHeader && !isEmpty(this.appState.AuthUser)) {
      var token = this.appState.AuthUser + ":" + this.appState.AuthToken;
      var hash = btoa(token);
      headers['Authorization'] = "Basic " + hash;
    }
    return headers;
  }
}
