import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  redirectToClasicaPage() {
    this.navCtrl.navigateForward('/recetas-clasicas.page.html'); // Reemplaza 'clasica-page' con la ruta real de tu página
  }

  redirectToVeganoPage() {
    this.navCtrl.navigateForward('/recetas-veganas.page.html'); // Reemplaza 'vegano-page' con la ruta real de tu página
  }

  redirectToPostrePage() {
    this.navCtrl.navigateForward('/postre-page'); // Reemplaza 'postre-page' con la ruta real de tu página
  }

}
