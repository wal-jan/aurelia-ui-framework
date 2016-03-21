/**
 *    UI Utils      Validation Strategy
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {ValidationViewStrategy} from 'aurelia-validation';
import {ValidationGroup} from "aurelia-validation";

export class UIValidationStrategy extends ValidationViewStrategy {
	constructor() {
		super();

		ValidationGroup.prototype['isPhone'] = function () {
			this.passes((newValue)=> {
					return PhoneLib.isValid(newValue, '');
				}, null)
				.withMessage(()=> {
					return 'invalid phone number';
				});
			return this;
		};
	}

	appendMessageToElement(validationProperty, formGroup) {
		let helpBlock:Element = formGroup.lastElementChild;
		if (helpBlock) {
			if (!helpBlock.classList) {
				helpBlock = null;
			}
			else if (!helpBlock.classList.contains('ui-input-error')) {
				helpBlock = null;
			}
		}

		if (!helpBlock) {
			helpBlock = document.createElement('div');
			helpBlock.classList.add('ui-input-help');
			helpBlock.classList.add('ui-input-error');
			formGroup.appendChild(helpBlock);
		}

		helpBlock.textContent = validationProperty ? validationProperty.message : '';
	}

	appendUIVisuals(validationProperty, formGroup) {
		if (validationProperty && validationProperty.isDirty) {
			if (validationProperty.isValid) {
				formGroup.parentElement.classList.remove('ui-invalid');
				formGroup.parentElement.classList.add('ui-valid');
			}
			else {
				formGroup.parentElement.classList.remove('ui-valid');
				formGroup.parentElement.classList.add('ui-invalid');
			}
		}
		else {
			formGroup.parentElement.classList.remove('ui-invalid');
			formGroup.parentElement.classList.remove('ui-valid');
		}

		this.appendMessageToElement(validationProperty, formGroup);
	}

	prepareElement(validationProperty, element) {
		this.appendUIVisuals(null, element.lastElementChild);
	}

	updateElement(validationProperty, element) {
		this.appendUIVisuals(validationProperty, element.lastElementChild);
	}
}
