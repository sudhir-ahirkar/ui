import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from './user.service';


export const User_Management_ROUTES: Routes = [
   { path: "list-user", component: ListUserComponent, pathMatch: 'full', data:{action:'Read'}},
   { path: "new", component: AddUserComponent, data:{action:'Create'}},
   { path: "view" , component: DetailUserComponent, data:{action:'Read'}},
   { path: "edit/:userId", component: EditUserComponent, pathMatch: 'full', data:{action:'Update'}},
];


@NgModule({
    imports: [RouterModule.forChild(User_Management_ROUTES)],
    exports: [RouterModule],
})
export class UserManagementRoutingModule {}