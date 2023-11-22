import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasClasicasPage } from './recetas-clasicas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasClasicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasClasicasPageRoutingModule {}
