import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Riego } from '../model/riego';

@Injectable({
  providedIn: 'root'
})
export class LogriegosService {

  urlLogRiego= "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  postLog(riego: Riego){
    return this._http.post(this.urlLogRiego + "/logriego",{apertura:riego.apertura,fecha:riego.fecha,electrovalvulaId:riego.electrovalvulaId} ).toPromise().then(
      (result) => {console.log(result);}
    );
  }

  getLog(id: number):Promise<Riego>{
    return this._http.get(this.urlLogRiego + "/logriego/" + id).toPromise().then(
      (ultLogRiego:Riego) => {return ultLogRiego}
    );}

  getAllLogs(id: number):Promise<Riego[]>{
    return this._http.get(this.urlLogRiego + "/logriego/" + id + "/all").toPromise().then(
      (logriego: Riego[]) => {return logriego}
    );
  }
}
