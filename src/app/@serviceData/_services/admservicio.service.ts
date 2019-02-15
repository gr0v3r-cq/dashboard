import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSettings } from '../config/app-settings';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AdmservicioService {
	//private URL_LST_ENCUESTA = AppSettings.MOTOR_SERVICIOS + 'V1.0/turismo/wsIf/lstDatosEnc';
	/*MOTOR DE SERVICIOS********************************************************************/
	private url_motor:string = AppSettings.MOTOR_SERVICIOS  + 'apiLogin';
	private url_webservice_motor = AppSettings.MOTOR_SERVICIOS  + 'reglaNegocio/ejecutarWeb';
	/***************************************************************************************/
	constructor(
		private http: Http
		) { }
	/**-----  Reglas de negocio -----**/
    public token(){
    	const body = { usr_usuario: 'administrador', usr_clave: '123456' };
    	return this.http.post(this.url_motor, body)
    	.map((response: Response) => {
    		const user = response.json();
    		if (user.token) {
    			localStorage.setItem('tokenMotor', user.token);
                    //console.log("llego mi token",user.token)
                    return true;
                } else {
                    //console.log("No llego mi token",user.error);
                    return false;
                }
            });
    }

    public listadoPrmServicio(){
      const body = { identificador: 'TUR-PSRV-LIST-217', parametros: '{}' };
        return this.http.post(this.url_webservice_motor, body,this.jwt())
            .map(this.extractProcess)
            .catch(this.handleError);
      }


  	/**-------------------------------**/
  	private extractProcess (res: Response) {
  		const body = res.json();
        //console.log("servicio",body);
        return body;
    }

    private handleError (error: Response | any) {
    	let errMsg: string;
    	if (error instanceof Response) {
    		const body = error.json() || '';
    		const err = body.error || JSON.stringify(body);
    		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    	} else {
    		errMsg = error.message ? error.message : error.toString();
    	}
    	//console.error(errMsg);
    	return Observable.throw(errMsg);
	}
	private jwt() {
		const motorToken = localStorage.getItem('tokenMotor');
		const headers = new Headers({ 'Authorization': 'Bearer'  + motorToken});
    	//console.log("cabeceras",headers);
    	return new RequestOptions({ headers: headers });
	}
}
