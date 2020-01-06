import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsComponentComponent } from './bs-component.component';

const routes: Routes = [
    {
        path: '',
        component: BsComponentComponent,
    

        // children : [
        //     {
        //       path: 'user-management', loadChildren: () => import('../../features/user-management/user-management.module').then(m => m.UserManagementModule),
        //     //   data: { title: 'UserManagement, Timetables & Roles', breadcrumb: '', preload: false}
        //     }
        //   ]
     },
     {
        path: 'user-management', loadChildren: () => import('../../features/user-management/user-management.module').then(m => m.UserManagementModule),
      //   data: { title: 'UserManagement, Timetables & Roles', breadcrumb: '', preload: false}
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BsComponentRoutingModule {}
