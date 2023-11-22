import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasPostresPageRoutingModule } from './recetas-postres-routing.module';

import { RecetasPostresPage } from './recetas-postres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPostresPageRoutingModule
  ],
  declarations: [RecetasPostresPage]
})
export class RecetasPostresPageModule {}
