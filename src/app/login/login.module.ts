import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TranslateModule,
        LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [AuthService]
})
export class LoginModule {}
