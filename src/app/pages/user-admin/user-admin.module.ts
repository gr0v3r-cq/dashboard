import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UserAdminRoutingModule } from './user-admin-routing.module';

import { UserAdminComponent } from './user-admin.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const components = [
  UserAdminComponent,
  UserRolesComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ThemeModule,
    UserAdminRoutingModule,
  ],
})
export class UserAdminModule { }
