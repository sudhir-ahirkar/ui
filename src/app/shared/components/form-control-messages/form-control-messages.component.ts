import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControlDirective, FormControlName, FormControl } from '@angular/forms';
import { ValidatorService } from './validator.service';

const originFormControlNgOnChanges = FormControlDirective.prototype.ngOnChanges;
FormControlDirective.prototype.ngOnChanges = function () {
  this.form.nativeElement = this.valueAccessor._elementRef.nativeElement;
  return originFormControlNgOnChanges.apply(this, arguments);
};

const originFormControlNameNgOnChanges = FormControlName.prototype.ngOnChanges;
FormControlName.prototype.ngOnChanges = function () {
  const result = originFormControlNameNgOnChanges.apply(this, arguments);
  this.control.nativeElement = this.valueAccessor._elementRef.nativeElement;
  return result;
};


@Component({
  selector: 'app-control-messages',
  template: `
    <ng-container *ngIf="control.touched && control.invalid && errorServerMessage===null" class="error-msg" tabindex="0">
      {{errorMessage}}
    </ng-container>
    <ng-container *ngIf="control.invalid && errorServerMessage !== null" class="error-msg" tabindex="0">
      {{errorServerMessage}}
    </ng-container>
    `
})
export class FormControlMessagesComponent implements OnInit {
  @Input() control: FormControl;
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

  get errorServerMessage() {
    if (this.control.errors != null && this.control.errors.hasOwnProperty('errorMessage')) {
      return this.control.errors['errorMessage'];
    }
    return null;
  }

}