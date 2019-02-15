import { Component, OnInit } from '@angular/core';
import { AdmservicioService } from '../../../@serviceData/_services/admservicio.service';

@Component({
	selector: 'ngx-user-roles',
	templateUrl: './user-roles.component.html',
	styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
	serviceslist: any;
	constructor(
		public httpservicio: AdmservicioService
		) { }

	ngOnInit() {
		this.gettoken();
		this.listarservicio();
	}

	private gettoken(){
		this.httpservicio.token()
		.subscribe(
			(data) => {
				console.log(data);
			},
			(error) =>{
				console.log(error);
			}
			);
	}

	private listarservicio(){
		this.gettoken(); 
		this.httpservicio.listadoPrmServicio()
		.subscribe(
			(data) => { 
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{ "idx":"'+data[i].xprmser_id+'", "subcat":"'+data[i].xprmser_subserv+'",';
					let nuevaCadena = data[i].xprmser_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.serviceslist = datos;
				console.log(this.serviceslist);
			},
			(error) =>{
				console.log(error);
			}
			);  
	}


}
