import { Injectable } from '@angular/core';

import {Http ,Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {
  
  apiRuta : string = "http://localhost/jugadoresArchivo/apirestjugadores/";
  constructor(public http:Http) { }
  
  public httpGetPromise(url: string){


    return this.http
    .get(this.apiRuta+url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  public httpPostSuscribe(body : Object){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiRuta+"jugadores/",JSON.stringify(body)).toPromise().then(this.extraerDatos).catch(this.handleError);
  }

  public Post(body : Object)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiRuta+"cd/",body,options);
  }


  public Delete(id : Object)
  {
    return this.http.delete(this.apiRuta+"borrarCd/"+id);
  }

  public Put(id : Object, body : Object)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiRuta+"modificarCd/"+id,body,options);
  }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }


}
