import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth.service';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UserManagementRoutingModule } from './user-management.routes';
import { CustomMaterialModule } from '../../core/material.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    UserManagementRoutingModule,
    CustomMaterialModule,
    LayoutModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [AddUserComponent, EditUserComponent, ListUserComponent, DetailUserComponent],
  providers: [AuthService, UserService]
})
export class UserManagementModule { }
