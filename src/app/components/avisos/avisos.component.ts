import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  mensaje: string;  //creamos las variables
  visible: boolean;

  constructor() {    //nuestros constructores
    this.mensaje = "Correo enviado";
    this.visible = false;
   }

  ngOnInit(): void {
    this.showMenssage('Correo Enviado'); //al recargar la pagina llamamos a esta funcion
  }

  showMenssage(mensaje: string){ //Funcion a la que llamamos para mostrar mesaje
    this.mensaje = mensaje;
    this.visible = true;
    this.waitToHide();
  }

  hideMenssage(){  //Funcion a la que llamamos para esconder el mensaje
    this.visible = false;
    this.mensaje = '';
  }

  waitToHide(){ //Funcion para que nos mantenga el mensaje solo por un tiempo y luego se quite.
    setTimeout(() => {
      this.hideMenssage();
    }, 2000);
  }
}
