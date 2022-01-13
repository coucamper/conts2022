import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { GravedadincidenciaService } from 'src/app/services/inserciones/gravedadincidencia.service';
import { SalvarincidenciaService } from 'src/app/services/inserciones/salvarincidencia.service';


@Component({
  selector: 'app-salvarincidencia',
  templateUrl: './salvarincidencia.component.html',
  styleUrls: ['./salvarincidencia.component.css']
})
export class SalvarincidenciaComponent implements OnInit {

  formIncidencia: FormGroup;
  operarios:any[] = [];
  gravedad:any[] = [];


  constructor( private router: Router,
               private fB: FormBuilder, private _operarios: EmpleadosService, private _gravedad:GravedadincidenciaService  ) { 
                 this.crearFormulario();

                this._operarios.getEmpleados().subscribe( (data:any) => {
                  console.log(data);
                  this.operarios=data;
                });

                this._gravedad.getGravedad().subscribe( (data:any) => {
                  console.log(data);
                  this.gravedad=data;
                });

               }

  ngOnInit(): void {}


  get tipoinciNoValida(){
    return this.formIncidencia.get('tipoinci')?.invalid && this.formIncidencia.get('tipoinci')?.touched;
  }

  get gravedadNoValida(){
    return this.formIncidencia.get('gravedad')?.invalid && this.formIncidencia.get('gravedad')?.touched;
  }

  get estadoNoValida(){
    return this.formIncidencia.get('estado')?.invalid && this.formIncidencia.get('estado')?.touched;
  }

  get operarioNoValida(){
    return this.formIncidencia.get('operario')?.invalid && this.formIncidencia.get('operario')?.touched;
  }

  get fechainciNoValida(){
    return this.formIncidencia.get('fechainci')?.invalid && this.formIncidencia.get('fechainci')?.touched;
  }






  crearFormulario(){

    this.formIncidencia = this.fB.group({
      tipoinci: ['', [Validators.required, Validators.minLength(10)] ],
      gravedad: ['', [Validators.required, Validators.minLength(10)]],
      estado:['', [Validators.required, Validators.minLength(20)]],
      operario: ['', Validators.required],
      fechainci: ['', Validators.required]
    });

  }

  guardar(){
    
    if( this.formIncidencia.invalid ){

      return Object.values( this.formIncidencia.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      })
      
    }

     this.formIncidencia.reset({
       nombre:"Sin nombre"
     })
     console.log( this.formIncidencia );



  }
}
