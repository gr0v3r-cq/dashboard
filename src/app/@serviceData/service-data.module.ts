import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmservicioService } from './_services/admservicio.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AdmservicioService,
  ]

})
export class ServiceDataModule { }
