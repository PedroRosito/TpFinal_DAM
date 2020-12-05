import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MedicionesService } from 'src/app/services/mediciones.service';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MedicionesPage implements OnInit {


  public columns : any;
  public rows : any;
  private disId:number;


  constructor(public navCtrl 	: NavController, private medService: MedicionesService, private actRout: ActivatedRoute) 
    {   
      // Define the columns for the data table
      // (based off the names of the keys in the JSON file)   
      this.columns = [
      { prop: 'medicionId' },
      { name: 'fecha' },
      { name: 'valor' },
      { name: 'dispositivoId'}
      ];
    }


  ngOnInit() {
  }

  ionViewDidEnter() {
      this.disId = Number(this.actRout.snapshot.paramMap.get('sensorID'));
      this.medService.getMedDis(this.disId).then(
        (mediciones) => {this.rows = mediciones; console.log(mediciones)}
      )
      }

}


