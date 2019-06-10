import { Component, OnInit } from '@angular/core';
import { AdmservicioService } from '../../../@serviceData/_services/admservicio.service';

@Component({
  selector: 'ngx-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
})
export class UserRolesComponent implements OnInit {

  serviceslist: any;

  constructor(
    public httpservicio: AdmservicioService,
    ) { }

  ngOnInit(): void {
    this.gettoken();
    this.listarservicio();
  }

  private listarservicio() {
    console.log('hello world!!!!');
    this.gettoken();
    this.httpservicio.listadoPrmServicio()
    .subscribe(
      (data) => {
        const datos = [];
        for (let i = 0; i < data.length; i++) {
          const cadnew = '{ "idx":"' + data[i].xprmser_id + '", "subcat":"' + data[i].xprmser_subserv + '",';
          const nuevaCadena = data[i].xprmser_data.replace('{', cadnew);
          const con = JSON.parse(nuevaCadena);
          datos.push(con);
        }
        this.serviceslist = datos;
        console.log(this.serviceslist);
      },
      (error) => {
        console.log(error);
      });
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
