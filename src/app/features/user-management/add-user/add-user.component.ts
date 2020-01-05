import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorage } from '../../../core/token.storage';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
  private formBuilder: FormBuilder,
  private translate: TranslateService,
  private authService: AuthService,
  private token: TokenStorage,
  public router: Router
  ) {
        
   }

  ngOnInit() {
  }

}
