import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiegosPageRoutingModule } from './riegos-routing.module';

import { RiegosPage } from './riegos.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChangeAperturaPipe } from 'src/app/pipes/change-apertura.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    RiegosPageRoutingModule
  ],
  declarations: [RiegosPage, ChangeAperturaPipe]
})
export class RiegosPageModule {}
