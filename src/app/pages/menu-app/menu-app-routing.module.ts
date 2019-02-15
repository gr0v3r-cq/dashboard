import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAppComponent } from './menu-app.component';
import { MenuAppEnComponent } from './menu-app-en/menu-app-en.component';
import { MenuAppEsComponent } from './menu-app-es/menu-app-es.component';

const routes: Routes = [{
  path: '',
  component: MenuAppComponent,
  children: [ {
    path: 'menu-app-en',
    component: MenuAppEnComponent,
  }, {
    path: 'menu-app-es',
    component: MenuAppEsComponent,
  }],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuAppRoutingModule { }
