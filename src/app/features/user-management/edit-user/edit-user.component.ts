import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorage } from '../../../core/token.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private authService: AuthService,
    private token: TokenStorage,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
