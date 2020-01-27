import { SnackBarService } from './../../../core/services/snack-bar.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { TokenStorage } from '../../../core/token.storage';
import { UserService } from '../user.service';
import { AppConfirmService } from '../../../../app/shared/app-confirm/app-confirm.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  manageUserForm: FormGroup;
  isNew :any= true;
  userId:any;
  refData: any;
  constructor(
  private formBuilder: FormBuilder,
  private token: TokenStorage,
  public router: Router,
  public route:ActivatedRoute,
  public userService: UserService,
  private appConfirmService: AppConfirmService,
  private snackBarService:SnackBarService,
  ) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.userId = +params.id;
        this.isNew = false;
      }
    }); 
   }

  ngOnInit() {
   this.getCountryRefData();
    this.manageUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      salary: ['', [Validators.required]],
      age: ['',Validators.required],
      country: ['',Validators.required],
      roles:[]
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
        this.manageUserForm.markAsPristine();
        this.snackBarService.success('User information has been saved successfully');
        this.router.navigate(['/components/user-management/list-user']);
      });
  }


  editUser() {
    let data = this.manageUserForm.getRawValue();
    this.userService.update(this.userId,data).subscribe(
      response => {
        this.manageUserForm.markAsPristine();
        this.router.navigate(['/components/user-management/list-user']);
      });
  }

  canDeactivate() {
    if (this.manageUserForm.dirty) {
      return this.appConfirmService.confirm({ title: `Add/Edit User`, message: 'Any unsaved changes will be lost. Continue?' });
    }
    return true;
  }

  getCountryRefData(){
    this.userService.getCountryRef().subscribe(data=>{
       this.refData=data;
    });
  }
}
