import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  async confirmarCerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Sí',
          handler: () => {
            // Aquí puedes realizar la lógica de cierre de sesión, como limpiar tokens, etc.
            console.log('Cerrar Sesión'); // Puedes reemplazar esto con tu lógica de cierre de sesión

            // Redirige al usuario a la página de inicio de sesión
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  irACrearReceta() {
    this.navCtrl.navigateForward('/crear-receta');
  }

  redirectToClasicaPage() {
    this.navCtrl.navigateForward('/recetas-clasicas');
  }

  redirectToVeganoPage() {
    this.navCtrl.navigateForward('/recetas-veganas');
  }

  redirectToPostrePage() {
    this.navCtrl.navigateForward('/recetas-postres');
  }

}
