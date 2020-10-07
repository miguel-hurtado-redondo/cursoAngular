import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false; //cuando se pulse el envio se pondrá a true y saldran errores si los hay
  @Input() correo: any;

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.nuevoCorreo = this.formBuilder.group({
          titulo: ['', [Validators.required, Validators.minLength(3)]], //con validators.required, es requerido y minLength, que tenga minimo esos caracteres.
          cuerpo: ['', [Validators.required, Validators.minLength(10)]],
          destinatario: ['', [Validators.required, Validators.email]],//validator.email, ya sabe que tiene que validar el email(automaticamente).
        });
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

        alert("Correo Enviado \nEliminamos el formulario");
        this.onReset();
    }

    onReset() { //nos pone el boton como false otra vez y reseteamos el formulario.
        this.submitted = false;
        this.nuevoCorreo.reset();
    }

}
