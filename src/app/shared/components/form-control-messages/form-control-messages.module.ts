import { CustomMaterialModule } from './../../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlMessagesComponent } from './form-control-messages.component';
import { ValidateFormDirective } from './validate-form.directive';



@NgModule({
  declarations: [FormControlMessagesComponent, ValidateFormDirective],
  imports: [
    CommonModule, CustomMaterialModule
  ],
  exports: [FormControlMessagesComponent, ValidateFormDirective]
})
export class FormControlMessagesModule { }
