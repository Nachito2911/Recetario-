import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasPostresPage } from './recetas-postres.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasPostresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasPostresPageRoutingModule {}
