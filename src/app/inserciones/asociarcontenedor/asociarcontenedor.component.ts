import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { rutaModel } from 'src/app/models/rutaModel';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { Location } from '@angular/common';
import { ContenedoresRutasService } from 'src/app/services/contenedoresrutas.service';
import { ContModule } from 'src/app/models/contModel';
import { RutasService } from 'src/app/services/rutas.service';
import { ContenedoresRutasModel } from 'src/app/models/contenedoresRutaModel';








@Component({
  selector: 'app-asociarcontenedor',
  templateUrl: './asociarcontenedor.component.html',
  styleUrls: ['./asociarcontenedor.component.css']
})
export class AsociarcontenedorComponent implements OnInit {


    contenedores:any[] = [];

    // Variable de tipo FormGroup para generar el formulario de inserción
    formContenedor: FormGroup;

    // Variable para guardar el id de navegación
    idx: number;

    // modelo para salvar los datos de contenedor en la DB
    contenedor: ContenedorVOModule = new ContenedorVOModule();
    ruta:rutaModel;

    // modelo para traer los datos del contenedor
    conten: ContModule;

    contenedorcito:ContenedoresRutasModel = {
      "idcontenrutas": 0,
      "idcontenedor": 1,
      "idruta": 3
    }

    idcontenedor:number;
    idcont:number; // Guarda el id del contenedor a ñadir a la ruta

    //Booleano para comprobar si el id de empleado existe en la DB
    idExiste: boolean = false;
    previousUrl: string;
    currentUrl: string;

    control:any[] = [];


  constructor( private _contenedores:ContenedoresService,
               private _contenruta: ContenedoresRutasService,
               private _ruta: RutasService,
               private router: Router,
               private fB: FormBuilder,
               private activatedRoute: ActivatedRoute,) {
                  this.idx = this.activatedRoute.snapshot.params['id'];
                  console.log("idx traido:"+this.idx)
                  this.crearFormulario();
                  this.cambiaTitulo();
                  this.obtenerContenedores();
                  this.addContenedor(this.idcont,this.idx, this.conten);
                  this.guardar();
                  this.datosRuta();
                  console.log("Contes es: "+this.conten);
              }

  ngOnInit(): void {

  }


  obtenerContenedores(){
    this._contenedores.getContenedores().subscribe((contenedores:any) => {
      this.contenedores = contenedores;
      console.log(this.contenedores);
      return this.contenedores;
    });
  }


  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if (this.idExiste) {
      this.idExiste = true;
      console.log("tra tra"+this.idx)
    } else {
      this.idExiste = false;
    }
  }

  crearFormulario() {
    this.formContenedor = new FormGroup({
      denom: new FormControl()
    });
  }

  validarForm(form: NgForm) {
    if (this.formContenedor.invalid) {
      return Object.values(this.formContenedor.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  guardarContenedor() {
    this.validarForm(this.formContenedor.value);

    if (this.conten.idcontenedor) {
      this.contenedor = this.formContenedor.value;
      return this._contenedores
        .putContenedor(this.idx, this.contenedor)
        .subscribe();
    } else {
      // Como el id de la ruta no existe, le paso un objeto ruta
      this._contenedores.postContenedor(this.contenedor).subscribe();

      return this.contenedor;
    }
  }



  onChange(newValue:any) {
    //console.log(newValue);
    this.control = newValue;  // don't forget to update the model here
    this.idcont=Number(newValue.charAt(0));
    //console.log((typeof this.idcont) +" "+this.idcont);
   // console.log(newValue)
   console.log("idcontenedor "+this.idcont+" id ruta: "+this.idx+" contenedor "+this.contenedor.denom)
}


  cargarDatos( ruta:rutaModel){
    this.formContenedor.setValue({
      denom: `${ this.contenedor.denom }`
    });

  }



  addContenedor( idcont:number, idx:number, contenedor:ContModule){
    this.control = this.formContenedor.controls['denom'].value;
    //console.log(this.control);
    this._contenruta.addContenedorRuta( this.idx, this.contenedorcito );
  }


  guardar(){
    this.conten = this.formContenedor.value;
    this.conten.idcontenedor=this.idcont;
    this.validarForm( this.formContenedor.value );
     //this.conten = this.formContenedor.value;
    //  return this._empleados.putEmpleado( this.idx , this.empleado ).subscribe();
     return this._contenruta.addContenedorRuta( this.idx, this.contenedorcito ).subscribe();

  }


  datosRuta(){
    this._ruta.getRuta( this.idx ).subscribe((ruta:any) =>{
      this.ruta=ruta;
    });
  }



  refresh(): void {
    window.location.reload();
  }


}
