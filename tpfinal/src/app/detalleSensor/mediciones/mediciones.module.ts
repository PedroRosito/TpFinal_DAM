import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicionesPageRoutingModule } from './mediciones-routing.module';

import { MedicionesPage } from './mediciones.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChangeDatePipe } from 'src/app/pipes/change-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    MedicionesPageRoutingModule
  ],
  declarations: [MedicionesPage, ChangeDatePipe]
})
export class MedicionesPageModule {}
