import { Component, OnInit } from '@angular/core';
import { ContenedorComponent } from 'src/app/contenedor/contenedor.component';
import { NavegacionComponent } from 'src/app/shared/navegacion/navegacion.component';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { SalvarcontendorService } from 'src/app/services/inserciones/salvarcontendor.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contenedorinsertar',
  templateUrl: './contenedorinsertar.component.html',
  styleUrls: ['./contenedorinsertar.component.css']
})



export class ContenedorinsertarComponent implements OnInit {

  form: FormGroup;


  constructor( private router: Router,
               private fB: FormBuilder ) {
                 this.crearFormulario();
               }

  ngOnInit(): void {}

  get localidadNoValida(){
    return this.form.get('localidad')?.invalid && this.form.get('localidad')?.touched;
  }


  get denomNoValida(){
    return this.form.get('denom')?.invalid && this.form.get('denom')?.touched;
  }

  get ubicacionNoValida(){
    return this.form.get('ubicacion')?.invalid && this.form.get('ubicacion')?.touched;
  }

  get coordNoValida(){
    return this.form.get('coordenadas')?.invalid && this.form.get('coordenadas')?.touched;
  }

  get mapaNoValida(){
    return this.form.get('mapa')?.invalid && this.form.get('mapa')?.touched;
  }






  crearFormulario(){

    this.form = this.fB.group({
      localidad: ['', [Validators.required, Validators.minLength(3)] ],
      denom: ['', [Validators.required, Validators.minLength(10)] ],
      ubicacion: ['', [Validators.required, Validators.minLength(10)]],
      coordenadas:['', [Validators.required, Validators.minLength(20)]],
      mapa: ['', Validators.required],
      fechaimplantacion: ['']
    });

  }

  guardar(){

    if( this.form.invalid ){

      return Object.values( this.form.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      })

    }

     this.form.reset({
       nombre:"Sin nombre"
     })
     console.log( this.form );



  }


}
