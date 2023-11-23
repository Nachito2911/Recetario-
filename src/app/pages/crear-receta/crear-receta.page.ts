import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.page.html',
  styleUrls: ['./crear-receta.page.scss'],
})
export class CrearRecetaPage {

  nuevaReceta = {
    title: '',
    tipo: '',  
    ingredients: '',
    steps: '',
    image: ''
  };

  constructor(private router: Router) {}

  agregarReceta() {
    if (this.validarCampos()) {
      // Lógica para agregar una nueva receta
      // Aquí deberías implementar la lógica para agregar la receta a tu lista de recetas
      // Puedes utilizar un servicio para manejar la lógica de la lista de recetas o almacenarlas donde prefieras
      // Por ahora, solo imprimiré la nueva receta en la consola
      console.log('Nueva Receta:', this.nuevaReceta);

      // Después de agregar la receta, redirigir a la página correspondiente según el tipo
      switch (this.nuevaReceta.tipo) {
        case 'Recetas Clasicas':
          this.router.navigate(['/recetas-clasicas']);
          break;
        case 'Receta Vegana':
          this.router.navigate(['/recetas-veganas']);
          break;
        case 'Recetas de Postres':
          this.router.navigate(['/recetas-postres']);
          break;
        default:
          // Página por defecto o manejo de error
          this.router.navigate(['/inicio']);
          break;
      }
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  validarCampos(): boolean {
    return (
      this.nuevaReceta.title !== undefined && this.nuevaReceta.title !== '' &&
      this.nuevaReceta.tipo !== undefined && this.nuevaReceta.tipo !== '' &&
      this.nuevaReceta.ingredients !== undefined && this.nuevaReceta.ingredients !== '' &&
      this.nuevaReceta.steps !== undefined && this.nuevaReceta.steps !== '' &&
      this.nuevaReceta.image !== undefined && this.nuevaReceta.image !== ''
    );
  }
}
