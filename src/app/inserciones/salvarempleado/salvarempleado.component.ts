import { Component, Input, OnInit , Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, ReactiveFormsModule, NgModel } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmpleadoModel } from 'src/app/models/empleado';
import { Observable } from 'rxjs';
import { CategoriasService } from 'src/app/services/categorias.service';
import { EmpleadocategoriaService } from 'src/app/services/empleadocategoria.service';
import { TipocontratoService } from 'src/app/services/tipocontrato.service';
import { CategoriaModel } from 'src/app/models/categoriaModel';
import { EmpleadocategoriaModel } from 'src/app/models/empleadocategoria';
import { EmpleadoRecuperadoModel } from 'src/app/models/empleadoRecuperadoModel';






@Component({
  selector: 'app-salvarempleado',
  templateUrl: './salvarempleado.component.html',
  template:` <app-salvarcategoria [childMessage]="parentMessage"></app-salvarcategoria>`,
  styleUrls: ['./salvarempleado.component.css']
})
export class SalvarempleadoComponent implements OnInit {

  parentMessage = "message from parent";

  formEmpleado:FormGroup;
  idx:number;
  @Output() empleado:EmpleadoModel = new EmpleadoModel();
  empleadonif:EmpleadoModel = new EmpleadoModel();
  emp:any = new EmpleadoModel();
  idExiste: boolean = false;

  empleados:any[] = [];
  tiposContrato:any[] = []; // Devuelve un array con los tipos de contrato existentes
  categorias:any[] = []; // Devuleve un array de categorías existentes
  radioContrato:any; // Button radio para seleccionar tipo de contrato
  idcontrato:number; // El id del tipo de contrato
  tipoContra:any; // Verificar asignación?
  inputCategoria:any; // control para tipo de categoría
  categoria:EmpleadocategoriaModel;
  idcategoria:number;

  controlnif:any;
  @Output() nif:string;

  constructor(private router: Router,
              private fB: FormBuilder,
              private _empleados: EmpleadosService,
              private _categorias: CategoriasService,
              private _empleadocategoria: EmpleadocategoriaService,
              private _tipocontrato: TipocontratoService,
              private activatedRoute: ActivatedRoute) {

              // Obtengo el id de la ruta si es que existe
              this.idx = this.activatedRoute.snapshot.params['id'];



          }


  ngOnInit(): void {


    this.idx = this.activatedRoute.snapshot.params['id'];
    this._empleados.getEmpleado( this.idx ).subscribe( (emp:any) =>{
      this.empleado = emp;
      return this.empleado;
    });

    this._categorias.getCategorias().subscribe((categorias:any) => {
      this.categorias=categorias;
      console.log(this.categorias);
    });


    this._tipocontrato.getTiposContrato().subscribe((tipos:any) => {
      this.tiposContrato=tipos;
      console.log(this.tiposContrato);
    });

    // Llamada a las funciones del componente
    this.cambiaTitulo();
    this.crearFormulario( );
    this.cargarEmpleado( this.idx );

    console.log("Empleado?"+this.empleado.nomemp);

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
      iban: new FormControl()
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



  onChange(newValue:any) {
    this.inputCategoria = this.formEmpleado.controls['categoria'].value;
    this.inputCategoria = newValue;  // don't forget to update the model here
    this.idcategoria=Number(newValue.substring(0,2));
    console.log(this.idcategoria);
  }



  onChangeContrato(valor:any){
    this.radioContrato = this.formEmpleado.controls['tipocontrato'].value;
    this.radioContrato = valor;
    this.idcontrato=Number(valor);
    console.log(this.idcontrato);
  }

  onChangeNif(valor:any){
    this.controlnif = this.formEmpleado.controls['nif'].value;
    this.controlnif = valor;
    this.nif=valor;
    //console.log(this.nif);
  }





   guardar(){
    this.validarForm( this.formEmpleado.value );

     if( this.emp.idempleado ){
     this.empleado = this.formEmpleado.value;
       this.nif = this.empleado.nif;
       this._empleados.putEmpleado( this.idx , this.empleado ).subscribe();
       //console.log(this.nif);
       this.router.navigate(['/empleados']);
     }else {
      this.empleado = this.formEmpleado.value;
      this.nif = this.formEmpleado.controls['nif'].value;
      console.log(this.empleado);
       this._empleados.postEmpleado( this.empleado ).subscribe();
       //console.log(this.nif);
       this.nif =this.empleado.nif;
       this.router.navigate(['/empleados']);

     }
     return this.nif;

   }






}
