import { Component, OnInit } from '@angular/core';

// Servicios
import { AdmservicioService } from '../../../@serviceData/_services/admservicio.service';

@Component({
  selector: 'ngx-menu-app-en',
  templateUrl: './menu-app-en.component.html',
  styleUrls: ['./menu-app-en.component.scss'],
})
export class MenuAppEnComponent implements OnInit {

  constructor(
    public httpservicio: AdmservicioService,
  ) { }

  ngOnInit() {
    this.gettoken();
  }

  private gettoken() {
    this.httpservicio.token()
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }
}
