import { ValidatorService } from './components/form-control-messages/validator.service';
import { AuthService } from './../core/services/auth.service';
import { CanDeactivateGuard } from './guard/can-deactivate/can-deactivate.guard';
import { SnackBarService } from './../core/services/snack-bar.service';
import { AppConfirmModule } from './app-confirm/app-confirm.module';
import { CustomMaterialModule } from './../core/material.module';
import { ListLabelComponent } from './components/list-label/list-label.component';
import { NgModule } from "@angular/core";
import { FormControlMessagesModule } from './components/form-control-messages/form-control-messages.module';

@NgModule({
declarations:[ListLabelComponent],
imports:[CustomMaterialModule,AppConfirmModule,FormControlMessagesModule],
exports:[ListLabelComponent,CustomMaterialModule,FormControlMessagesModule],
providers:[SnackBarService,CanDeactivateGuard, AuthService]
})

export class SharedModule{

}