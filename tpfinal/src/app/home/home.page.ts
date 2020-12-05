import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listadoDispositivos:Dispositivo[];

  constructor(public servicioListado: ListadoService) {

  }

  ngOnInit() {
    this.servicioListado.getListadoDispositivos().then(
      (listado) => {this.listadoDispositivos = listado;}
      );
  }

  ionViewWillEnter() {
    this.servicioListado.getListadoDispositivos().then(
      (listado) => {this.listadoDispositivos = listado;}
      );
  }


}
