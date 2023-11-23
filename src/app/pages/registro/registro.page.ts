import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  @ViewChild('registroForm') registroForm: NgForm | undefined;

  formData = {
    nombre: '',
    apellido: '',
    correo: '',
    clave: '',  // Cambié "contraseña" a "clave"
  };

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    if (this.registroForm && this.registroForm.valid) {
      console.log(this.formData);
    } else {
      console.log("Formulario inválido. Por favor, complete todos los campos.");
    }
  }
}
