import { CustomMaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { AppConfirmService } from './app-confirm.service';
import { AppConfirmComponent } from './app-confirm.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [ CustomMaterialModule,  CommonModule, FormsModule],
    declarations: [AppConfirmComponent],
    providers: [AppConfirmService],
    entryComponents: [AppConfirmComponent],
    exports: [ AppConfirmComponent ]
  })
  export class AppConfirmModule { }
