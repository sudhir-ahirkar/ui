import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from 'src/app/layout/dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { FormComponent } from './form/form.component';
import { BsComponentComponent } from './bs-component/bs-component.component';
import { GridComponent } from './grid/grid.component';
import { BlankPageComponent } from './blank-page/blank-page.component';

 const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'list-user', loadChildren: '../features/user-management.module#UserManagementModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

// const routes: Routes = [
//     {
//         path: '',
//         component: LayoutComponent,
//         children: [
//             { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
//             { path: 'dashboard', component: DashboardComponent },
//             { path: 'charts', component: ChartsComponent },
//             { path: 'tables', component: TablesComponent },
//             { path: 'forms', component: FormComponent },
//             { path: 'bs-element', component: BsComponentComponent },
//             { path: 'grid', component: GridComponent},
//             // { path: 'components', component: Componet},
//             { path: 'blank-page', component: BlankPageComponent }
//         ]
//     }
// ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
