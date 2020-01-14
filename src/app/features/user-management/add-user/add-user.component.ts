import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorage } from '../../../core/token.storage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  manageUserForm: FormGroup;
  isNew :any= true;
  userId:any;
  constructor(
  private formBuilder: FormBuilder,
  private token: TokenStorage,
  public router: Router,
  public route:ActivatedRoute,
  public userService: UserService
  ) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.userId = +params.id;
        this.isNew = false;
      }
    }); 
   }

  ngOnInit() {
    this.manageUserForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      salary: ['', [Validators.required]],
      age: ['']
    });


    if (!this.isNew) {
      this.userService.view(this.userId).subscribe(rsp => {
        this.manageUserForm.patchValue(rsp);
      });
    }
  }


  onSubmit() {
    if (this.isNew) {
      this.createUser();
    } else {
      this.editUser();
    }
     
    }

  createUser() {
    let data = this.manageUserForm.getRawValue();
    this.userService.create(data).subscribe(
      response => {
        this.router.navigate(['/components/user-management/list-user']);
      });
  }


  editUser() {
    let data = this.manageUserForm.getRawValue();
    this.userService.update(this.userId,data).subscribe(
      response => {
        this.router.navigate(['/components/user-management/list-user']);
      });
  }
}
