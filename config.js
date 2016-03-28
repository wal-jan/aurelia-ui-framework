System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "dist/demo.js": [
      "framework/components/ui-datagrid.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-datagrid.js",
      "framework/components/ui-dialog.js",
      "framework/components/ui-form.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-form.js",
      "framework/components/ui-header.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-login.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-login.js",
      "framework/components/ui-menu.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-menu.js",
      "framework/components/ui-pager.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-panel.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-panel.js",
      "framework/components/ui-ribbon.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-ribbon.js",
      "framework/components/ui-tab-panel.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-tab-panel.js",
      "framework/components/ui-tree-node.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-tree.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/components/ui-tree.js",
      "framework/core/ui-app-menu.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/core/ui-grid.js",
      "framework/core/ui-page.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/core/ui-page.js",
      "framework/core/ui-viewport.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/core/ui-viewport.js",
      "framework/data/countries.js",
      "framework/data/currencies.js",
      "framework/index.js",
      "framework/inputs/ui-button.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-button.js",
      "framework/inputs/ui-combo.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-combo.js",
      "framework/inputs/ui-date-view.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-date-view.js",
      "framework/inputs/ui-date.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-date.js",
      "framework/inputs/ui-input-dual.js",
      "framework/inputs/ui-input-group.js",
      "framework/inputs/ui-input.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-input.js",
      "framework/inputs/ui-json-editor.js",
      "framework/inputs/ui-json-part.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-language.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-language.js",
      "framework/inputs/ui-list-item.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-markdown.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-markdown.js",
      "framework/inputs/ui-option-group.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-option.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-option.js",
      "framework/inputs/ui-phone.js",
      "framework/inputs/ui-switch.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-switch.js",
      "framework/inputs/ui-tags.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-tags.js",
      "framework/inputs/ui-textarea.html!github:systemjs/plugin-text@0.0.4.js",
      "framework/inputs/ui-textarea.js",
      "framework/libs/marked.js",
      "framework/libs/phonelib.js",
      "framework/utils/ui-application.js",
      "framework/utils/ui-converters.js",
      "framework/utils/ui-event.js",
      "framework/utils/ui-formatters.js",
      "framework/utils/ui-http-service.js",
      "framework/utils/ui-model.js",
      "framework/utils/ui-tree-models.js",
      "framework/utils/ui-utils.js",
      "framework/utils/ui-validation.js",
      "github:github/fetch@0.11.0.js",
      "github:github/fetch@0.11.0/fetch.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "main.js",
      "npm:aurelia-binding@1.0.0-beta.1.1.3.js",
      "npm:aurelia-binding@1.0.0-beta.1.1.3/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.1.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.3.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.3/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.2.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.2/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.3.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.3/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.1.0.js",
      "npm:aurelia-path@1.0.0-beta.1.1.0/aurelia-path.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.1.1.js",
      "npm:aurelia-router@1.0.0-beta.1.1.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.1/aurelia-templating.js",
      "npm:aurelia-validation@0.6.2.js",
      "npm:aurelia-validation@0.6.2/debouncer.js",
      "npm:aurelia-validation@0.6.2/decorators.js",
      "npm:aurelia-validation@0.6.2/index.js",
      "npm:aurelia-validation@0.6.2/path-observer.js",
      "npm:aurelia-validation@0.6.2/resources/bg-BG.js",
      "npm:aurelia-validation@0.6.2/resources/ca-ES.js",
      "npm:aurelia-validation@0.6.2/resources/da-DK.js",
      "npm:aurelia-validation@0.6.2/resources/de-DE.js",
      "npm:aurelia-validation@0.6.2/resources/en-US.js",
      "npm:aurelia-validation@0.6.2/resources/es-MX.js",
      "npm:aurelia-validation@0.6.2/resources/fr-FR.js",
      "npm:aurelia-validation@0.6.2/resources/nb-NO.js",
      "npm:aurelia-validation@0.6.2/resources/nl-BE.js",
      "npm:aurelia-validation@0.6.2/resources/nl-NL.js",
      "npm:aurelia-validation@0.6.2/resources/nn-NO.js",
      "npm:aurelia-validation@0.6.2/resources/sv-SE.js",
      "npm:aurelia-validation@0.6.2/resources/tr-TR.js",
      "npm:aurelia-validation@0.6.2/resources/zh-CN.js",
      "npm:aurelia-validation@0.6.2/strategies/twbootstrap-view-strategy.js",
      "npm:aurelia-validation@0.6.2/utilities.js",
      "npm:aurelia-validation@0.6.2/validate-custom-attribute.js",
      "npm:aurelia-validation@0.6.2/validation-config.js",
      "npm:aurelia-validation@0.6.2/validation-group-builder.js",
      "npm:aurelia-validation@0.6.2/validation-group.js",
      "npm:aurelia-validation@0.6.2/validation-locale.js",
      "npm:aurelia-validation@0.6.2/validation-property.js",
      "npm:aurelia-validation@0.6.2/validation-result.js",
      "npm:aurelia-validation@0.6.2/validation-rules-collection.js",
      "npm:aurelia-validation@0.6.2/validation-rules.js",
      "npm:aurelia-validation@0.6.2/validation-view-strategy.js",
      "npm:aurelia-validation@0.6.2/validation.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:core-js@2.1.1.js",
      "npm:core-js@2.1.1/index.js",
      "npm:core-js@2.1.1/modules/_a-function.js",
      "npm:core-js@2.1.1/modules/_a-number-value.js",
      "npm:core-js@2.1.1/modules/_add-to-unscopables.js",
      "npm:core-js@2.1.1/modules/_an-instance.js",
      "npm:core-js@2.1.1/modules/_an-object.js",
      "npm:core-js@2.1.1/modules/_array-copy-within.js",
      "npm:core-js@2.1.1/modules/_array-fill.js",
      "npm:core-js@2.1.1/modules/_array-from-iterable.js",
      "npm:core-js@2.1.1/modules/_array-includes.js",
      "npm:core-js@2.1.1/modules/_array-methods.js",
      "npm:core-js@2.1.1/modules/_array-reduce.js",
      "npm:core-js@2.1.1/modules/_array-species-create.js",
      "npm:core-js@2.1.1/modules/_bind.js",
      "npm:core-js@2.1.1/modules/_classof.js",
      "npm:core-js@2.1.1/modules/_cof.js",
      "npm:core-js@2.1.1/modules/_collection-strong.js",
      "npm:core-js@2.1.1/modules/_collection-to-json.js",
      "npm:core-js@2.1.1/modules/_collection-weak.js",
      "npm:core-js@2.1.1/modules/_collection.js",
      "npm:core-js@2.1.1/modules/_core.js",
      "npm:core-js@2.1.1/modules/_ctx.js",
      "npm:core-js@2.1.1/modules/_defined.js",
      "npm:core-js@2.1.1/modules/_descriptors.js",
      "npm:core-js@2.1.1/modules/_dom-create.js",
      "npm:core-js@2.1.1/modules/_enum-bug-keys.js",
      "npm:core-js@2.1.1/modules/_enum-keys.js",
      "npm:core-js@2.1.1/modules/_export.js",
      "npm:core-js@2.1.1/modules/_fails-is-regexp.js",
      "npm:core-js@2.1.1/modules/_fails.js",
      "npm:core-js@2.1.1/modules/_fix-re-wks.js",
      "npm:core-js@2.1.1/modules/_flags.js",
      "npm:core-js@2.1.1/modules/_for-of.js",
      "npm:core-js@2.1.1/modules/_global.js",
      "npm:core-js@2.1.1/modules/_has.js",
      "npm:core-js@2.1.1/modules/_hide.js",
      "npm:core-js@2.1.1/modules/_html.js",
      "npm:core-js@2.1.1/modules/_ie8-dom-define.js",
      "npm:core-js@2.1.1/modules/_inherit-if-required.js",
      "npm:core-js@2.1.1/modules/_invoke.js",
      "npm:core-js@2.1.1/modules/_iobject.js",
      "npm:core-js@2.1.1/modules/_is-array-iter.js",
      "npm:core-js@2.1.1/modules/_is-array.js",
      "npm:core-js@2.1.1/modules/_is-integer.js",
      "npm:core-js@2.1.1/modules/_is-object.js",
      "npm:core-js@2.1.1/modules/_is-regexp.js",
      "npm:core-js@2.1.1/modules/_iter-call.js",
      "npm:core-js@2.1.1/modules/_iter-create.js",
      "npm:core-js@2.1.1/modules/_iter-define.js",
      "npm:core-js@2.1.1/modules/_iter-detect.js",
      "npm:core-js@2.1.1/modules/_iter-step.js",
      "npm:core-js@2.1.1/modules/_iterators.js",
      "npm:core-js@2.1.1/modules/_keyof.js",
      "npm:core-js@2.1.1/modules/_library.js",
      "npm:core-js@2.1.1/modules/_math-expm1.js",
      "npm:core-js@2.1.1/modules/_math-log1p.js",
      "npm:core-js@2.1.1/modules/_math-sign.js",
      "npm:core-js@2.1.1/modules/_meta.js",
      "npm:core-js@2.1.1/modules/_metadata.js",
      "npm:core-js@2.1.1/modules/_microtask.js",
      "npm:core-js@2.1.1/modules/_object-assign.js",
      "npm:core-js@2.1.1/modules/_object-create.js",
      "npm:core-js@2.1.1/modules/_object-define.js",
      "npm:core-js@2.1.1/modules/_object-dp.js",
      "npm:core-js@2.1.1/modules/_object-dps.js",
      "npm:core-js@2.1.1/modules/_object-gopd.js",
      "npm:core-js@2.1.1/modules/_object-gopn-ext.js",
      "npm:core-js@2.1.1/modules/_object-gopn.js",
      "npm:core-js@2.1.1/modules/_object-gops.js",
      "npm:core-js@2.1.1/modules/_object-gpo.js",
      "npm:core-js@2.1.1/modules/_object-keys-internal.js",
      "npm:core-js@2.1.1/modules/_object-keys.js",
      "npm:core-js@2.1.1/modules/_object-pie.js",
      "npm:core-js@2.1.1/modules/_object-sap.js",
      "npm:core-js@2.1.1/modules/_object-to-array.js",
      "npm:core-js@2.1.1/modules/_own-keys.js",
      "npm:core-js@2.1.1/modules/_parse-float.js",
      "npm:core-js@2.1.1/modules/_parse-int.js",
      "npm:core-js@2.1.1/modules/_partial.js",
      "npm:core-js@2.1.1/modules/_path.js",
      "npm:core-js@2.1.1/modules/_property-desc.js",
      "npm:core-js@2.1.1/modules/_redefine-all.js",
      "npm:core-js@2.1.1/modules/_redefine.js",
      "npm:core-js@2.1.1/modules/_replacer.js",
      "npm:core-js@2.1.1/modules/_same-value.js",
      "npm:core-js@2.1.1/modules/_set-proto.js",
      "npm:core-js@2.1.1/modules/_set-species.js",
      "npm:core-js@2.1.1/modules/_set-to-string-tag.js",
      "npm:core-js@2.1.1/modules/_shared-key.js",
      "npm:core-js@2.1.1/modules/_shared.js",
      "npm:core-js@2.1.1/modules/_species-constructor.js",
      "npm:core-js@2.1.1/modules/_strict-method.js",
      "npm:core-js@2.1.1/modules/_string-at.js",
      "npm:core-js@2.1.1/modules/_string-context.js",
      "npm:core-js@2.1.1/modules/_string-html.js",
      "npm:core-js@2.1.1/modules/_string-pad.js",
      "npm:core-js@2.1.1/modules/_string-repeat.js",
      "npm:core-js@2.1.1/modules/_string-trim.js",
      "npm:core-js@2.1.1/modules/_string-ws.js",
      "npm:core-js@2.1.1/modules/_task.js",
      "npm:core-js@2.1.1/modules/_to-index.js",
      "npm:core-js@2.1.1/modules/_to-integer.js",
      "npm:core-js@2.1.1/modules/_to-iobject.js",
      "npm:core-js@2.1.1/modules/_to-length.js",
      "npm:core-js@2.1.1/modules/_to-object.js",
      "npm:core-js@2.1.1/modules/_to-primitive.js",
      "npm:core-js@2.1.1/modules/_typed-array.js",
      "npm:core-js@2.1.1/modules/_typed-buffer.js",
      "npm:core-js@2.1.1/modules/_typed.js",
      "npm:core-js@2.1.1/modules/_uid.js",
      "npm:core-js@2.1.1/modules/_wks.js",
      "npm:core-js@2.1.1/modules/core.delay.js",
      "npm:core-js@2.1.1/modules/core.dict.js",
      "npm:core-js@2.1.1/modules/core.function.part.js",
      "npm:core-js@2.1.1/modules/core.get-iterator-method.js",
      "npm:core-js@2.1.1/modules/core.get-iterator.js",
      "npm:core-js@2.1.1/modules/core.is-iterable.js",
      "npm:core-js@2.1.1/modules/core.number.iterator.js",
      "npm:core-js@2.1.1/modules/core.object.classof.js",
      "npm:core-js@2.1.1/modules/core.object.define.js",
      "npm:core-js@2.1.1/modules/core.object.is-object.js",
      "npm:core-js@2.1.1/modules/core.object.make.js",
      "npm:core-js@2.1.1/modules/core.regexp.escape.js",
      "npm:core-js@2.1.1/modules/core.string.escape-html.js",
      "npm:core-js@2.1.1/modules/core.string.unescape-html.js",
      "npm:core-js@2.1.1/modules/es6.array.copy-within.js",
      "npm:core-js@2.1.1/modules/es6.array.every.js",
      "npm:core-js@2.1.1/modules/es6.array.fill.js",
      "npm:core-js@2.1.1/modules/es6.array.filter.js",
      "npm:core-js@2.1.1/modules/es6.array.find-index.js",
      "npm:core-js@2.1.1/modules/es6.array.find.js",
      "npm:core-js@2.1.1/modules/es6.array.for-each.js",
      "npm:core-js@2.1.1/modules/es6.array.from.js",
      "npm:core-js@2.1.1/modules/es6.array.index-of.js",
      "npm:core-js@2.1.1/modules/es6.array.is-array.js",
      "npm:core-js@2.1.1/modules/es6.array.iterator.js",
      "npm:core-js@2.1.1/modules/es6.array.join.js",
      "npm:core-js@2.1.1/modules/es6.array.last-index-of.js",
      "npm:core-js@2.1.1/modules/es6.array.map.js",
      "npm:core-js@2.1.1/modules/es6.array.of.js",
      "npm:core-js@2.1.1/modules/es6.array.reduce-right.js",
      "npm:core-js@2.1.1/modules/es6.array.reduce.js",
      "npm:core-js@2.1.1/modules/es6.array.slice.js",
      "npm:core-js@2.1.1/modules/es6.array.some.js",
      "npm:core-js@2.1.1/modules/es6.array.sort.js",
      "npm:core-js@2.1.1/modules/es6.array.species.js",
      "npm:core-js@2.1.1/modules/es6.date.now.js",
      "npm:core-js@2.1.1/modules/es6.date.to-iso-string.js",
      "npm:core-js@2.1.1/modules/es6.date.to-json.js",
      "npm:core-js@2.1.1/modules/es6.date.to-string.js",
      "npm:core-js@2.1.1/modules/es6.function.bind.js",
      "npm:core-js@2.1.1/modules/es6.function.has-instance.js",
      "npm:core-js@2.1.1/modules/es6.function.name.js",
      "npm:core-js@2.1.1/modules/es6.map.js",
      "npm:core-js@2.1.1/modules/es6.math.acosh.js",
      "npm:core-js@2.1.1/modules/es6.math.asinh.js",
      "npm:core-js@2.1.1/modules/es6.math.atanh.js",
      "npm:core-js@2.1.1/modules/es6.math.cbrt.js",
      "npm:core-js@2.1.1/modules/es6.math.clz32.js",
      "npm:core-js@2.1.1/modules/es6.math.cosh.js",
      "npm:core-js@2.1.1/modules/es6.math.expm1.js",
      "npm:core-js@2.1.1/modules/es6.math.fround.js",
      "npm:core-js@2.1.1/modules/es6.math.hypot.js",
      "npm:core-js@2.1.1/modules/es6.math.imul.js",
      "npm:core-js@2.1.1/modules/es6.math.log10.js",
      "npm:core-js@2.1.1/modules/es6.math.log1p.js",
      "npm:core-js@2.1.1/modules/es6.math.log2.js",
      "npm:core-js@2.1.1/modules/es6.math.sign.js",
      "npm:core-js@2.1.1/modules/es6.math.sinh.js",
      "npm:core-js@2.1.1/modules/es6.math.tanh.js",
      "npm:core-js@2.1.1/modules/es6.math.trunc.js",
      "npm:core-js@2.1.1/modules/es6.number.constructor.js",
      "npm:core-js@2.1.1/modules/es6.number.epsilon.js",
      "npm:core-js@2.1.1/modules/es6.number.is-finite.js",
      "npm:core-js@2.1.1/modules/es6.number.is-integer.js",
      "npm:core-js@2.1.1/modules/es6.number.is-nan.js",
      "npm:core-js@2.1.1/modules/es6.number.is-safe-integer.js",
      "npm:core-js@2.1.1/modules/es6.number.max-safe-integer.js",
      "npm:core-js@2.1.1/modules/es6.number.min-safe-integer.js",
      "npm:core-js@2.1.1/modules/es6.number.parse-float.js",
      "npm:core-js@2.1.1/modules/es6.number.parse-int.js",
      "npm:core-js@2.1.1/modules/es6.number.to-fixed.js",
      "npm:core-js@2.1.1/modules/es6.number.to-precision.js",
      "npm:core-js@2.1.1/modules/es6.object.assign.js",
      "npm:core-js@2.1.1/modules/es6.object.create.js",
      "npm:core-js@2.1.1/modules/es6.object.define-properties.js",
      "npm:core-js@2.1.1/modules/es6.object.define-property.js",
      "npm:core-js@2.1.1/modules/es6.object.freeze.js",
      "npm:core-js@2.1.1/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@2.1.1/modules/es6.object.get-own-property-names.js",
      "npm:core-js@2.1.1/modules/es6.object.get-prototype-of.js",
      "npm:core-js@2.1.1/modules/es6.object.is-extensible.js",
      "npm:core-js@2.1.1/modules/es6.object.is-frozen.js",
      "npm:core-js@2.1.1/modules/es6.object.is-sealed.js",
      "npm:core-js@2.1.1/modules/es6.object.is.js",
      "npm:core-js@2.1.1/modules/es6.object.keys.js",
      "npm:core-js@2.1.1/modules/es6.object.prevent-extensions.js",
      "npm:core-js@2.1.1/modules/es6.object.seal.js",
      "npm:core-js@2.1.1/modules/es6.object.set-prototype-of.js",
      "npm:core-js@2.1.1/modules/es6.object.to-string.js",
      "npm:core-js@2.1.1/modules/es6.parse-float.js",
      "npm:core-js@2.1.1/modules/es6.parse-int.js",
      "npm:core-js@2.1.1/modules/es6.promise.js",
      "npm:core-js@2.1.1/modules/es6.reflect.apply.js",
      "npm:core-js@2.1.1/modules/es6.reflect.construct.js",
      "npm:core-js@2.1.1/modules/es6.reflect.define-property.js",
      "npm:core-js@2.1.1/modules/es6.reflect.delete-property.js",
      "npm:core-js@2.1.1/modules/es6.reflect.enumerate.js",
      "npm:core-js@2.1.1/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@2.1.1/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@2.1.1/modules/es6.reflect.get.js",
      "npm:core-js@2.1.1/modules/es6.reflect.has.js",
      "npm:core-js@2.1.1/modules/es6.reflect.is-extensible.js",
      "npm:core-js@2.1.1/modules/es6.reflect.own-keys.js",
      "npm:core-js@2.1.1/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@2.1.1/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@2.1.1/modules/es6.reflect.set.js",
      "npm:core-js@2.1.1/modules/es6.regexp.constructor.js",
      "npm:core-js@2.1.1/modules/es6.regexp.flags.js",
      "npm:core-js@2.1.1/modules/es6.regexp.match.js",
      "npm:core-js@2.1.1/modules/es6.regexp.replace.js",
      "npm:core-js@2.1.1/modules/es6.regexp.search.js",
      "npm:core-js@2.1.1/modules/es6.regexp.split.js",
      "npm:core-js@2.1.1/modules/es6.regexp.to-string.js",
      "npm:core-js@2.1.1/modules/es6.set.js",
      "npm:core-js@2.1.1/modules/es6.string.anchor.js",
      "npm:core-js@2.1.1/modules/es6.string.big.js",
      "npm:core-js@2.1.1/modules/es6.string.blink.js",
      "npm:core-js@2.1.1/modules/es6.string.bold.js",
      "npm:core-js@2.1.1/modules/es6.string.code-point-at.js",
      "npm:core-js@2.1.1/modules/es6.string.ends-with.js",
      "npm:core-js@2.1.1/modules/es6.string.fixed.js",
      "npm:core-js@2.1.1/modules/es6.string.fontcolor.js",
      "npm:core-js@2.1.1/modules/es6.string.fontsize.js",
      "npm:core-js@2.1.1/modules/es6.string.from-code-point.js",
      "npm:core-js@2.1.1/modules/es6.string.includes.js",
      "npm:core-js@2.1.1/modules/es6.string.italics.js",
      "npm:core-js@2.1.1/modules/es6.string.iterator.js",
      "npm:core-js@2.1.1/modules/es6.string.link.js",
      "npm:core-js@2.1.1/modules/es6.string.raw.js",
      "npm:core-js@2.1.1/modules/es6.string.repeat.js",
      "npm:core-js@2.1.1/modules/es6.string.small.js",
      "npm:core-js@2.1.1/modules/es6.string.starts-with.js",
      "npm:core-js@2.1.1/modules/es6.string.strike.js",
      "npm:core-js@2.1.1/modules/es6.string.sub.js",
      "npm:core-js@2.1.1/modules/es6.string.sup.js",
      "npm:core-js@2.1.1/modules/es6.string.trim.js",
      "npm:core-js@2.1.1/modules/es6.symbol.js",
      "npm:core-js@2.1.1/modules/es6.typed.array-buffer.js",
      "npm:core-js@2.1.1/modules/es6.typed.data-view.js",
      "npm:core-js@2.1.1/modules/es6.typed.float32-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.float64-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.int16-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.int32-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.int8-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.uint16-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.uint32-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.uint8-array.js",
      "npm:core-js@2.1.1/modules/es6.typed.uint8-clamped-array.js",
      "npm:core-js@2.1.1/modules/es6.weak-map.js",
      "npm:core-js@2.1.1/modules/es6.weak-set.js",
      "npm:core-js@2.1.1/modules/es7.array.includes.js",
      "npm:core-js@2.1.1/modules/es7.error.is-error.js",
      "npm:core-js@2.1.1/modules/es7.map.to-json.js",
      "npm:core-js@2.1.1/modules/es7.math.iaddh.js",
      "npm:core-js@2.1.1/modules/es7.math.imulh.js",
      "npm:core-js@2.1.1/modules/es7.math.isubh.js",
      "npm:core-js@2.1.1/modules/es7.math.umulh.js",
      "npm:core-js@2.1.1/modules/es7.object.entries.js",
      "npm:core-js@2.1.1/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@2.1.1/modules/es7.object.values.js",
      "npm:core-js@2.1.1/modules/es7.reflect.define-metadata.js",
      "npm:core-js@2.1.1/modules/es7.reflect.delete-metadata.js",
      "npm:core-js@2.1.1/modules/es7.reflect.get-metadata-keys.js",
      "npm:core-js@2.1.1/modules/es7.reflect.get-metadata.js",
      "npm:core-js@2.1.1/modules/es7.reflect.get-own-metadata-keys.js",
      "npm:core-js@2.1.1/modules/es7.reflect.get-own-metadata.js",
      "npm:core-js@2.1.1/modules/es7.reflect.has-metadata.js",
      "npm:core-js@2.1.1/modules/es7.reflect.has-own-metadata.js",
      "npm:core-js@2.1.1/modules/es7.reflect.metadata.js",
      "npm:core-js@2.1.1/modules/es7.set.to-json.js",
      "npm:core-js@2.1.1/modules/es7.string.at.js",
      "npm:core-js@2.1.1/modules/es7.string.pad-end.js",
      "npm:core-js@2.1.1/modules/es7.string.pad-start.js",
      "npm:core-js@2.1.1/modules/es7.string.trim-left.js",
      "npm:core-js@2.1.1/modules/es7.string.trim-right.js",
      "npm:core-js@2.1.1/modules/es7.system.global.js",
      "npm:core-js@2.1.1/modules/web.dom.iterable.js",
      "npm:core-js@2.1.1/modules/web.immediate.js",
      "npm:core-js@2.1.1/modules/web.timers.js",
      "npm:core-js@2.1.1/shim.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:lodash@4.5.1.js",
      "npm:lodash@4.5.1/lodash.js",
      "npm:moment@2.11.2.js",
      "npm:moment@2.11.2/moment.js",
      "npm:numeral@1.5.3.js",
      "npm:numeral@1.5.3/numeral.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "src/app.html!github:systemjs/plugin-text@0.0.4.js",
      "src/app.js",
      "src/components/readme.js",
      "src/components/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/components/view.js",
      "src/core/readme.js",
      "src/core/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/core/view.js",
      "src/highlight.js",
      "src/home/colors.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/colors.js",
      "src/home/my-dialog.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/my-dialog.js",
      "src/home/readme.js",
      "src/home/todo.js",
      "src/home/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/home/view.js",
      "src/inputs/readme.js",
      "src/inputs/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/inputs/view.js",
      "src/login/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/login/view.js",
      "src/utils/readme.js",
      "src/utils/view.html!github:systemjs/plugin-text@0.0.4.js",
      "src/utils/view.js"
    ]
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
    "aurelia-validation": "npm:aurelia-validation@0.6.2",
    "fetch": "github:github/fetch@0.11.0",
    "lodash": "npm:lodash@4.5.1",
    "moment": "npm:moment@2.11.2",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "typescript": "npm:typescript@1.8.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.1.3": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.3",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.2": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.1"
    },
    "npm:aurelia-validation@0.6.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@4.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
