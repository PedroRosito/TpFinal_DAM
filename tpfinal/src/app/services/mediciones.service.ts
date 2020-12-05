import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicion } from '../model/medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  urlMed = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  getUltMedDis(id:number):Promise<Medicion>{
    return this._http.get(this.urlMed + "/medicion/" + id).toPromise().then(
      (ultMedicion: Medicion) => {return ultMedicion}
    );
  }

  getMedDis(id:number):Promise<Medicion>{
    return this._http.get(this.urlMed + "/medicion/" + id + "/all").toPromise().then(
      (mediciones: Medicion) => {return mediciones}
    );
  }

  postMedicion(medicion: Medicion){
    return this._http.post(this.urlMed + "/medicion",{fecha:medicion.fecha,valor:medicion.valor,dispositivoId:medicion.dispositivoId} ).toPromise().then(
      (result) => {console.log(result);}
    );
  }
}
