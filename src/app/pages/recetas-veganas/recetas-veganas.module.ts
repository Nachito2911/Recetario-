import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasVeganasPageRoutingModule } from './recetas-veganas-routing.module';

import { RecetasVeganasPage } from './recetas-veganas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasVeganasPageRoutingModule
  ],
  declarations: [RecetasVeganasPage]
})
export class RecetasVeganasPageModule {}
