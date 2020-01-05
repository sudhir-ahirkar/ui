import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "../login/login.component";
import { User_Management_ROUTES } from "../features/user-management/user-management.routes";

const PORTAL_ROUTES: Routes = [
  { path: "login", component: LoginComponent },

  { path: "user-management", children: User_Management_ROUTES}
];


export const portal_routing = RouterModule.forRoot(PORTAL_ROUTES);
