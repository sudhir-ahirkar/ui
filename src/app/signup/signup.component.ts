import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ValidationService } from '../core/services/validation.service';
import { AuthService } from '../core/services/auth.service';
import { TokenStorage } from '../core/token.storage';
import { ValidatorService } from '../shared/components/form-control-messages/validator.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registrationAddForm: FormGroup;
    errorMessage: string;
    constructor(private formBuilder: FormBuilder,
        private translate: TranslateService,
        private authService: AuthService,
        private token: TokenStorage,
        public router: Router) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.buildForm();
    }


    onSubmit() {
        // localStorage.setItem('isLoggedin', 'true');
        if (this.registrationAddForm.valid) {
           this.authService.addUser(this.registrationAddForm.value).subscribe(
            data => {
            //   this.token.saveToken(data.token);
              // this.router.navigate(['user']);
              this.router.navigate(['/login']);
            //    this.router.navigate(['main/first']);
              // this.router.navigate(['first']);
            }
          );
        } else {
            console.log("Form is not valid")
        }
    }


    buildForm() {
        this.registrationAddForm = this.formBuilder.group({
            username: ['', [Validators.required,]],
            password: ['', [Validators.required, ValidatorService.passwordValidator]],
            age: ['', [Validators.required,]],
            salary: ['', [Validators.required,]]
        });
    }
}
