import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasVeganasPage } from './recetas-veganas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasVeganasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasVeganasPageRoutingModule {}
