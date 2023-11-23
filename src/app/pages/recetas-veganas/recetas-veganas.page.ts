import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas-veganas',
  templateUrl: './recetas-veganas.page.html',
  styleUrls: ['./recetas-veganas.page.scss'],
})
export class RecetasVeganasPage {

  constructor(private router: Router) { }

  irACrearReceta() {
    // Redirige a la página de creación de recetas
    this.router.navigate(['/crear-receta']);
  }

  agregarReceta() {
    // Lógica para agregar receta aquí
    console.log('Receta agregada desde RecetasVeganasPage');
  }

}
