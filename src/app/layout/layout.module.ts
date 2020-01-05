import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from './charts/charts.module';
import { TablesModule } from './tables/tables.module';
import { FormModule } from './form/form.module';
import { BsComponentModule } from './bs-component/bs-component.module';
import { GridModule } from './grid/grid.module';
import { BlankPageModule } from './blank-page/blank-page.module';
import { SearchComponent } from '../generic-component/search/search.component';
import { PaginationComponent } from '../generic-component/pagination-component/pagination.component';
import { UserManagementModule } from '../features/user-management/user-management.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        DashboardModule,
        ChartsModule,
        TablesModule,
        FormModule,
        BsComponentModule,
        GridModule,
        BlankPageModule,
        TranslateModule,
        NgbDropdownModule,
        // UserManagementModule
       
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,PaginationComponent,SearchComponent],
    exports:[PaginationComponent,SearchComponent]

})
export class LayoutModule {}
