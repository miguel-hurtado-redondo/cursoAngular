import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //tanto para las escuchas como las eventos hay que ponerlos siempre en el import
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false; //cuando se pulse el envio se pondrá a true y saldran errores si los hay
  @Input() correo: any; //aqui estamos recibiendo del padre
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();// creamos el evento que vamos a emitir llamado 'accionRealizada' (este es el hijo)(el any es generico, cuando no sabemos que tipo es, si es string... )

  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService) { }

    ngOnInit() {
        this.nuevoCorreo = this.formBuilder.group({
          titulo: ['', [Validators.required, Validators.minLength(3)]], //con validators.required, es requerido y minLength, que tenga minimo esos caracteres.
          cuerpo: ['', [Validators.required, Validators.minLength(10)]],
          destinatario: ['', [Validators.required, Validators.email]],//validator.email, ya sabe que tiene que validar el email(automaticamente).
        });

        if (this.correo != undefined) {
          this.nuevoCorreo.patchValue({
            titulo: 'RE: '+this.correo.titulo,
            destinatario: this.correo.emisor
          });
        }
    }

    get formulario() { return this.nuevoCorreo.controls; }

    onSubmit() {
        this.submitted = true; //pon la variable a true

        if (this.nuevoCorreo.invalid) { //si el correo es invalido, return y no sigue el codigo
            return;
        }
        //si no hay errores enviamos la informacion a un alert y despues ejecutamos onReset
        let correo = this.nuevoCorreo.value;
        correo.leido= false;
        correo.emisor= 'correoEmisor1@openWebinar.inv';

        this.onReset();
        this.servicioAvisos.showMenssage("Correo Enviado");
    }

    onReset() { //nos pone el boton como false otra vez y reseteamos el formulario.
        this.submitted = false;
        this.nuevoCorreo.reset();
        this.accionRealizada.emit(); // esto lo ponemos para cuando se envie o cancele la respuesta rapida, se quite el formulario de envio. No hace falta ponerlo en el onSubmit porque este tabien llama al onReset cuando termina.
    }

}
