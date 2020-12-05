import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSensorPageRoutingModule } from './detalle-sensor-routing.module';

import { DetalleSensorPage } from './detalle-sensor.page';

import { ChangeColorDirective } from '../directives/change-color.directive'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSensorPageRoutingModule
  ],
  declarations: [DetalleSensorPage, ChangeColorDirective]
})
export class DetalleSensorPageModule {}
