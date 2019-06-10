import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { AdmservicioService } from '../../../@serviceData/_services/admservicio.service';


@Component({
  selector: 'ngx-menu-app-es',
  templateUrl: './menu-app-es.component.html',
  styleUrls: ['./menu-app-es.component.scss'],
})
export class MenuAppEsComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      language: {
        title: 'First Name',
        type: 'string',
      },
      description: {
        title: 'Last Name',
        type: 'string',
      },
      urlimg: {
        title: 'Username',
        type: 'img',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    public httpservicio: AdmservicioService,
    ) { }

    ngOnInit() {
      this.listarservicio();
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

      onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }

      private listarservicio() {
        this.gettoken();
        this.httpservicio.listadoPrmServicio()
        .subscribe(
          (data) => {
            const datos = [];
            const dato_es = [];
            for (let i = 0; i < data.length; i++) {
              if (JSON.parse(data[i].xprmser_data).prmser_idioma === 'es') {
                const cad_new = '{' +
                '"id": "' + data[i].xprmser_id + '",' +
                '"language": "' + JSON.parse(data[i].xprmser_data).prmser_idioma + '",' +
                '"description": "' + JSON.parse(data[i].xprmser_data).prmser_descripcion + '",' +
                '"urlimg": "' + JSON.parse(data[i].xprmser_data).prmser_urlimg + '"}';
                datos.push(JSON.parse(cad_new));
              }
            }
            console.log(datos);
            this.source.load(datos);
          },
          (error) => {
            console.log(error);
          });
        }
      }
