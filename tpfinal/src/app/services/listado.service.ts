import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Dispositivo } from '../model/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  urlIdDispositivo = "http://localhost:3000"; 

  constructor(private _http: HttpClient) { 
    
  }

  getListadoDispositivos():Promise<Dispositivo[]>{
    return this._http.get(this.urlIdDispositivo + "/dispositivos").toPromise().then(
      (listado: Dispositivo[]) => { return listado; });
  }
}
