//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { Medicion } from '../model/medicion';
import { Riego } from '../model/riego';
import { LogriegosService } from '../services/logriegos.service';
import { MedicionesService } from '../services/mediciones.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {

  elecVal:boolean;
  private idSensor:number;
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;

  constructor(private actRout: ActivatedRoute, private medicion: MedicionesService, private logriego: LogriegosService) { 
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.idSensor = Number(this.actRout.snapshot.paramMap.get('sensorID'));
    this.getElecState();
    this.setNewValue();
    this.generarChart();
  }

  openElecVal() {
    this.elecVal = true;
    var riego: Riego = new Riego(1,moment().format("YYYY-MM-DD HH:mm:ss"),1,this.idSensor);
    this.logriego.postLog(riego);
  }

  closeElecVal() {
    this.elecVal = false;
    var riego: Riego = new Riego(1,moment().format("YYYY-MM-DD HH:mm:ss"),0,this.idSensor);
    var newValor = Math.floor(Math.random() * ((this.valorObtenido) + 1));
    var newMed: Medicion = new Medicion(1,moment().format("YYYY-MM-DD HH:mm:ss"),newValor,this.idSensor);
    this.medicion.postMedicion(newMed);
    this.logriego.postLog(riego);
    this.myChart.update({series: [{
      name: 'kPA',
      data: [newValor],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});
  }

  async getElecState() {
    await this.logriego.getLog(this.idSensor).then(
      (riego) => {if(riego[0]!=null){this.elecVal = Boolean(riego[0].apertura)}
                  else{this.elecVal = false}}
    );
  }

  async setNewValue() {
    await this.medicion.getUltMedDis(this.idSensor).then(
      (ultMedicion) => {this.valorObtenido = Number(ultMedicion[0].valor);}
    )
    this.myChart.update({series: [{
      name: 'kPA',
      data: [this.valorObtenido],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: "Sensor N° " + this.idSensor
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}