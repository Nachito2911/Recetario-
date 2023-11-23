// recetas-clasicas.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recetas-clasicas',
  templateUrl: './recetas-clasicas.page.html',
  styleUrls: ['./recetas-clasicas.page.scss'],
})
export class RecetasClasicasPage {
  recetasForm: FormGroup;
  recetasClasicas: any[] = []; // Debes tener una lista para almacenar tus recetas clásicas

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.recetasForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      preparacion: ['', Validators.required],
      imagenUrl: [''],
    });
  }

  agregarReceta() {
    // Lógica para agregar la receta. Puedes adaptarla según tus necesidades.
    const nuevaReceta = this.recetasForm.value;

    // Agregar la nueva receta a la lista
    this.recetasClasicas.push(nuevaReceta);

    // Puedes imprimir los valores en la consola por ahora.
    console.log('Nueva Receta:', nuevaReceta);

    // Puedes resetear el formulario después de agregar la receta.
    this.recetasForm.reset();
  }

  irACrearReceta() {
    this.navCtrl.navigateForward('/crear-receta');
  }
}
