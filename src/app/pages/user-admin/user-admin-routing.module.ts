import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdminComponent } from './user-admin.component';
import { UserRolesComponent } from './user-roles/user-roles.component';


const routes: Routes = [{
  path: '',
  component: UserAdminComponent,
  children: [
    {
      path: 'user-roles',
      component: UserRolesComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UserAdminRoutingModule { }
