/**
 *    UI Input      Multiline Input
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {customElement, bindable, bindingMode, autoinject} from "aurelia-framework";
import {UIInputGroup} from "./ui-input-group";

@autoinject()
@customElement('ui-textarea')
export class UITextArea extends UIInputGroup {
	/**
	 * @property    value
	 * @type        string
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value: string = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  checked: boolean = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
  @bindable()
  disabled: boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
  @bindable()
  readonly: boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
  @bindable()
  prefixIcon: string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
  @bindable()
  prefixText: string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
  @bindable()
  suffixIcon: string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
  @bindable()
  suffixText: string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
  @bindable()
  buttonIcon: string;
	/**
	 * @property    button-text
	 * @type        string
	 */
  @bindable()
  buttonText: string;

	/**
	 * @property    help-text
	 * @type        string
	 */
  @bindable()
  helpText: string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
  @bindable()
  placeholder: string = '';

	/**
	 * @property    rows
	 * @type        string
	 */
  @bindable()
  rows: string = '5';

	/**
	 * @property    dir
	 * @type        string
	 */
  @bindable()
  dir: string = '';

  constructor(element: Element) {
    super(element);
  }

}
