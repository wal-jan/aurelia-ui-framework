/**
 *    UI Component: Checkbox/Radio
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, useView, bindingMode} from "aurelia-framework";

@autoinject()
export class UIOption {
	protected __id = `auf-${seed++}`;
	protected __input:Element;

	protected checked  = false;
	protected disabled = false;

	constructor(public element:Element) {

	}

	bind() {
		this.disabled = isTrue(this.disabled);
	}

	attached() {
		this.disable();
	}

	disable(disabled?) {
		if (this.__input.attributes.getNamedItem('disabled') !== null) {
			this.__input.attributes.removeNamedItem('disabled');
		}
		if (disabled === true || this.disabled === true) {
			this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
		}
	}

	disabledChanged(newValue) {
		this.disabled = isTrue(newValue);
		this.disable();
	}

	valueChanged($event) {
		$event.detail = this.checked;
	}
}

@useView('./ui-option.html')
@customElement('ui-checkbox')
export class UICheckbox extends UIOption {
	__type = 'checkbox';

	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	checked:boolean              = false;

	bind() {
		super.bind();
		this.checked = isTrue(this.checked);
	}

	attached() {
		super.attached();
		this.element.classList.add('ui-checkbox');
	}
}

@useView('./ui-option.html')
@customElement('ui-radio')
export class UIRadio extends UIOption {
	__type = 'radio';

	/**
	 * @property    value
	 * @type        string
	 */
	@bindable() value:string     = '';
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	checked:any                  = '';

	attached() {
		if(!this.element.parentElement.classList.contains('ui-option-group'))
			throw new Error('UIRadio must bew a child of UIOptionGroup');

		super.attached();
		this.element.classList.add('ui-radio');
	}
}

@useView('./ui-option-group.html')
@customElement('ui-option-group')
export class UIOptionGroup {
	private __label:Element;

	/**
	 * @property    label
	 * @type        string
	 */
	@bindable() label:string = '';
	/**
	 * @property    name
	 * @type        string
	 */
	@bindable() name:string  = '';
	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	value:string;

	constructor(public element:Element) {
	}

	attached() {
		setTimeout(()=> {
			let radios = this.element.getElementsByClassName('ui-radio');
			_.forEach(radios, (b:HTMLInputElement)=> {
				b.setAttribute('name', this.name);
				b.setAttribute('checked', (this.value === b.value).toString());
			});
		}, 200);
		if (this.element.hasAttribute('required')) this.__label.classList.add('ui-required');
	}

	valueChanged(newValue) {
		let opt = this.element.querySelector(`.ui-option-input[value="${newValue}"]`);
		if (opt)opt.setAttribute('checked', 'true');
	}

	checkChanged($event) {
		this.value = $event.detail;
	}
}
