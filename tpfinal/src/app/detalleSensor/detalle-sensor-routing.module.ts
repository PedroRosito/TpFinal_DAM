import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSensorPage } from './detalle-sensor.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        component: DetalleSensorPage
      },
      {
        path: 'mediciones',
        loadChildren: () => import('./mediciones/mediciones.module').then( m => m.MedicionesPageModule)
      },
      {
        path: 'riegos',
        loadChildren: () => import('./riegos/riegos.module').then( m => m.RiegosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSensorPageRoutingModule {}
