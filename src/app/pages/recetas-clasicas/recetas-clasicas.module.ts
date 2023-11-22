import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasClasicasPageRoutingModule } from './recetas-clasicas-routing.module';

import { RecetasClasicasPage } from './recetas-clasicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasClasicasPageRoutingModule
  ],
  declarations: [RecetasClasicasPage]
})
export class RecetasClasicasPageModule {}
