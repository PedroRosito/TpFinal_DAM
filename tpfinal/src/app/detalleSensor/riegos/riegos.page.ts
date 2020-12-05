import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LogriegosService } from 'src/app/services/logriegos.service';
import { ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';

export interface Config {
	technologies: string;
}

@Component({
  selector: 'app-riegos',
  templateUrl: './riegos.page.html',
  styleUrls: ['./riegos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RiegosPage implements OnInit {

  public config : Config;
  public columns : any;
  public rows : any;
  private disId:number;


  constructor(public navCtrl 	: NavController, private riegoService: LogriegosService, private actRout: ActivatedRoute) 
    {   
      // Define the columns for the data table
      // (based off the names of the keys in the JSON file)   
      this.columns = [
      { prop: 'logRiegoId' },
      { name: 'apertura' },
      { name: 'fecha' },
      { name: 'electrovalvulaId'}
      ];
    }


  ngOnInit() {
  }

  ionViewDidEnter() {
      this.disId = Number(this.actRout.snapshot.paramMap.get('sensorID'));
      this.riegoService.getAllLogs(this.disId).then(
        (logriego) => {this.rows = logriego}
      )
      }
}
