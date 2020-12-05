import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dispositivo',
    children: [
      {
          path: '',
          loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
          path: ':sensorID',
          loadChildren: () => import('./detalleSensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule)

      }
    ]
  },
  {
    path: '',
    redirectTo: 'dispositivo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
