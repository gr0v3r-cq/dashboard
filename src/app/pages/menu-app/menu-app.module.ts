import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { MenuAppRoutingModule } from './menu-app-routing.module';

import { MenuAppComponent } from './menu-app.component';
import { MenuAppEsComponent } from './menu-app-es/menu-app-es.component';
import { MenuAppEnComponent } from './menu-app-en/menu-app-en.component';

const components = [
	MenuAppComponent,
  	MenuAppEsComponent,
  	MenuAppEnComponent,
]

@NgModule({
  declarations: [
  	...components,
  ],
  imports: [
    CommonModule,
    MenuAppRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
  ]
})
export class MenuAppModule { }
