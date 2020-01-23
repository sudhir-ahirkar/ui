import { Injectable, Output, EventEmitter } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  @Output() formValidator: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, obj?: any) {
    const config = {
      minlength: `Minimum length`,
      maxlength: `Maximum length exceeded`,
      pattern: 'Invalid value',
      required: 'Mandatory field ',
      invalidDateTime: 'Invalid date time format',
      invalidTime: 'Invalid time format',
      invalidName: `Invalid value`,
      invalidValue: `Invalid value`,
      invalidNumber: `Invalid Number`,
      numberOnly: `Only numeric value allowed`,
      invalidCrn: `Invalid CRN`,
      invalidLength: `The length as entered should be less than or equal to 6`,
      max: `Value cannot be greater than ${obj.max}`,
      min: `Value cannot be less than ${obj.min}`,
      dateBefore: `Please select today or future date`,
      dateBeforeGeneric: `Please select date after`,
      invalidYear: `Date should be greater than 01/01/1900`,
      dateAfterGeneric: `Please select date before `,
      quantityGreaterThanCapacity: `The Total of Role Quantities cannot exceed the Workshop Capacity`,
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      invalidDate: 'Invalid Date format'
    };

    return config[validatorName];
  }

  static alphaNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value == null || control.value === '') {
        return null;
      }
      if (!control.value.match(/^[a-zA-Z0-9]*$/)) {
        return { pattern: true };
      } else {
        return null;
      }
    };
  }


  static characterValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value == null || control.value === '') {
        return null;
      }
      if (!control.value.match(/^[a-zA-Z]*$/)) {
        return { pattern: true };
      } else {
        return null;
      }
    };
  }

  static numericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value == null || control.value === '') {
        return null;
      }
      if (!control.value.match(/^[0-9]*$/)) {
        return { numberOnly: true };
      } else {
        return null;
      }
    };
  }

  setformSererValidator(error) {
    this.formValidator.emit(error);
  }

  static passwordValidator(control: AbstractControl) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    // (?!.*\s)          - Spaces are not allowed
    // tslint:disable-next-line


    if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
}

static creditCardValidator(control: AbstractControl) {
  // Visa, MasterCard, American Express, Diners Club, Discover, JCB
  // tslint:disable-next-line
  if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
  } else {
      return { 'invalidCreditCard': true };
  }
}

static emailValidator(control: AbstractControl) {
  // RFC 2822 compliant regex
  // tslint:disable-next-line
  if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
  } else {
      return { 'invalidEmailAddress': true };
  }
}

static timeValidator(control) {
  if (control.value == null || control.value == "") {
      return null;
  } else if (!control.value.match(/^(?:2[0-3]|[0-1][0-9]):[0-5][0-9]$/)) {
      return { 'invalidTime': true };
  }

}

static dateValidator(control) {

  if (control.value == null || control.value == "") {
      return null;
  } else if (!control.value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/)) {
      return { 'invalidDate': true };
  }

}
  


}
