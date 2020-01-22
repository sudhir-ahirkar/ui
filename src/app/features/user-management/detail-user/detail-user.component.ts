import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorage } from '../../../core/token.storage';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  users: any = {};
  userId: any;
  refData: any;
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private authService: AuthService,
    private token: TokenStorage,
    public userService: UserService,
    public router: Router,
    private readonly route: ActivatedRoute, ) {

    this.route.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.userId = +params.id;
      }
    });
  }

  ngOnInit() {
    this.getCountryRefData();
    this.getUserById(this.userId);
  }

  getUserById(id: number) {
    this.userService.view(id).subscribe(data => {
      this.users = data;
    })
  }

  getCountryRefData(){
    this.userService.getCountryRef().subscribe(data=>{
       this.refData=data;
    });
  }

}
