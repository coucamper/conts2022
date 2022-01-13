import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, ReactiveFormsModule, NgModel } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmpleadoModel } from 'src/app/models/empleado';
import { Observable } from 'rxjs';






@Component({
  selector: 'app-salvarempleado',
  templateUrl: './salvarempleado.component.html',
  styleUrls: ['./salvarempleado.component.css']
})
export class SalvarempleadoComponent implements OnInit {

  // Variable de tipo FormGroup para generar el formulario de inserción
  formEmpleado:FormGroup;

  // Variable para guardar el id de navegación
  idx:number;

  // modelo para salvar los datos de empleado en la DB
  empleado:EmpleadoModel = new EmpleadoModel();

  //modelo para recuperar datos de empleado de la DB
  emp:any = new EmpleadoModel();

  //Booleano para comprobar si el id de empleado existe en la DB
  idExiste: boolean = false;

  tipoContrato = [
    { tipocontrato : "estructura"},
    { tipocontrato: "insercion"}
  ]

  tipoContra:any;




  constructor(private router: Router,
    private fB: FormBuilder, private _empleados: EmpleadosService, private activatedRoute: ActivatedRoute) {

      // Obtengo el id de la ruta si es que existe
      this.idx = this.activatedRoute.snapshot.params['id'];

    // Llamada a las funciones del componente

    this.cambiaTitulo();
    this.crearFormulario( );
    this.cargarEmpleado( this.idx );

    this._empleados.getEmpleado( this.idx ).subscribe( (emp:any) =>{
      this.empleado = emp;
      return this.empleado;
    });
  }


  ngOnInit(): void {

    // Esto está duplicado mejor usar el del constructor

    // this.idx = this.activatedRoute.snapshot.params['id'];


  }

  cargarEmpleado( id:number ){

    if( this.idExiste === null ){
      this.emp = new EmpleadoModel();
      console.log("El empleado no existe");
    } else {
         this._empleados.getEmpleado( id ).subscribe( (e:any) =>{
         //console.log(e);
         this.emp = e;
         console.log("Empleado: "+ this.emp.nomemp );

         // -----------------------------------------------------------

         if( this.emp.tipocontrato ){
           console.log("puta" + this.emp.tipocontrato );
            this.formEmpleado.patchValue({
              "tipocontrato" : [`${ this.emp.tipocontrato }`]
            });
         } else {

           console.log("tipo erroneo de contrato: " + this.emp.tipocontrato );
           console.log("tipo traido de contrato: " + this.emp.tipoContra );
         }

         // --------------------------------------------------------------

         // Si el ID existe, establezco los valores con los datos del empleado

              this.formEmpleado.setValue( {
                "idempleado" : [`${ this.emp.idempleado}`],
                "nomemp" : [`${ this.emp.nomemp}`],
                "ape1emp" : [`${ this.emp.ape1emp}`],
                "ape2emp" : [`${ this.emp.ape2emp}`],
                "nif" : [`${ this.emp.nif}`],
                "nss" : [`${ this.emp.nss}`],
                "fechanac" : [`${ this.emp.fechanac}`],
                "antiguedad" : [`${ this.emp.antiguedad}`],
                "estudios" : [`${ this.emp.estudios}`],
                "numhijos" : [`${ this.emp.numhijos}`],
                "telecontacto": [`${ this.emp.telecontacto}`],
                "emailemp" : [`${ this.emp.emailemp}`],
                "domicilio" : [`${ this.emp.domicilio}`],
                "iban" : [`${ this.emp.iban}`],
                "categoria" : [`${ this.emp.categoria}`],
                "tipocontrato" : [`${ this.emp.tipocontrato}`]
              });
         //return this.emp;
         });
    }
  }


  cambiaTitulo(){
    let idexiste = this.activatedRoute.snapshot.params['id'];

    if(idexiste){
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  crearFormulario(){

    this.formEmpleado = new FormGroup({
      idempleado: new FormControl(),
      nomemp: new FormControl(),
      ape1emp: new FormControl(),
      ape2emp: new FormControl(),
      nif: new FormControl(),
      nss: new FormControl(),
      fechanac: new FormControl(),
      antiguedad: new FormControl(),
      estudios: new FormControl(),
      numhijos: new FormControl(),
      telecontacto: new FormControl(),
      emailemp: new FormControl(),
      domicilio: new FormControl(),
      iban: new FormControl(),
      categoria: new FormControl(),
      tipocontrato: new FormControl()
    });
  }


  volver() {
    this.router.navigate(['/empleados']);
  }


  validarForm( form: NgForm ){
    console.warn(this.formEmpleado.value);

    if( this.formEmpleado.invalid ){

      return Object.values( this.formEmpleado.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }
  }

   guardar(  ){

    this.validarForm( this.formEmpleado.value );

     if( this.emp.idempleado ){

     this.empleado = this.formEmpleado.value;

     return this._empleados.putEmpleado( this.idx , this.empleado ).subscribe();

     }else {

       return this._empleados.postEmpleado( this.empleado ).subscribe();
     }

     //return this.empleado;

   }


}
