import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { TokenStorage } from '../core/token.storage';
import { ValidatorService } from '../shared/components/form-control-messages/validator.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;
    constructor(
        private formBuilder: FormBuilder,
        private translate: TranslateService,
        private authService: AuthService,
        private token: TokenStorage,
        public router: Router
    ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.buildForm();
    }

    onLoggedin() {

        localStorage.setItem('isLoggedin', 'true');
        if (this.loginForm.valid) {
            console.log("Form is valid")
        } else {
            console.log("Form is not valid")
        }


        
    }

    submit() {
        localStorage.setItem('isLoggedin', 'true');
        if (this.loginForm.valid) {
           this.authService.attemptAuth(this.loginForm.value).subscribe(
            data => {
              this.token.saveToken(data.token);
            //   this.router.navigate(['list-user']);
              this.router.navigate(['/dashboard']);
            //    this.router.navigate(['main/first']);
              // this.router.navigate(['first']);
            }
          );
        } else {
            console.log("Form is not valid")
        }
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            // email: ['', [Validators.required, ValidationService.emailValidator]],
            username: ['', [Validators.required,]],
            // password: ['', [Validators.required, ValidatorService.passwordValidator]]
            password: ['', [Validators.required]]

        });
    }
}
