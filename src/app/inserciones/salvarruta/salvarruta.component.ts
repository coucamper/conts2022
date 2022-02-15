import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComarcaModel } from 'src/app/models/comarcaModel';
import { rutaModel } from 'src/app/models/rutaModel';
import { ComarcaService } from 'src/app/services/comarca.service';
import { ComarcasRutaService } from 'src/app/services/comarcasruta.service';
import { ConcejosComarcasService } from 'src/app/services/concejoscomarcas.service';
import { RutasService } from 'src/app/services/rutas.service';
import { ZonasService } from 'src/app/services/zonas.service';



@Component({
  selector: 'app-salvarruta',
  templateUrl: './salvarruta.component.html',
  styleUrls: ['./salvarruta.component.css']
})
export class SalvarrutaComponent implements OnInit {

  // Variable de tipo FormGroup para generar el formulario de inserción
  formRuta:FormGroup;

  // Variable para guardar el id de navegación
  idx:number;

  // modelo para salvar los datos de empleado en la DB
  ruta:rutaModel = new rutaModel();

  //modelo para recuperar datos de empleado de la DB
  r:rutaModel;



  //Booleano para comprobar si el id de empleado existe en la DB
  idExiste:boolean = false;

  idcom:number;

  // Mock para cargar nombres de zonas en un select (deberá cambiarse cuando se cree la tabla real en el backend)

  // zonas = [
  //   { zona: "Centro"},
  //   { zona: "Oriente"},
  //   { zona: "Occidente"}
  // ];

  // localidades = [
  //   { localidad: "Avilés"},
  //   { localidad: "Gijón"},
  //   { localidad: "Llanes"},
  //   { localidad: "Oviedo"},
  //   { localidad: "Ponga"},
  //   { localidad: "villaviciosa"},

  // ];

  zonas:any[] = [];
  localidades:any[] = [];
  comarcas:any[] = [];
  concejos:any[] = [];
  concejosComarca:any[] = [];



  constructor(private router: Router,
              private fB: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _rutas: RutasService,
              private _zonas:ZonasService,
              private _concejos: ConcejosComarcasService,
              private _comarcas:ComarcaService,
              private  _comarca: ComarcaModel ) {
              this.idx = this.activatedRoute.snapshot.params['id'];


      //this.cargarZonas();
      this.crearFormulario();
      this.cambiaTitulo();
      this.obtenerRuta( this.idx );
      this.cargarDatos( this.ruta );
      this.cargarComarcas();
      this.cargarConcejos();
      this.cargarConcejosComarca();

     // this.guardarRuta( this.formRuta );

      // this._rutas.getRuta( this.idx ).subscribe( (dato:any) => {
      //   this.ruta = dato;
      //   return this.ruta;
      // });



    }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }

/**
 * cargarComarcas
 * Devuelve un listado de todas las comarcas
 */
  cargarComarcas(){
    this._comarcas.getComarcas().subscribe((comarcas:any) =>{
      this.comarcas=comarcas;
      console.log(this.comarcas);
      return this.comarcas;
    });
  }





  cargarConcejos(){
    this._concejos.getConcejosComarcas().subscribe((concejos:any) => {
      this.concejos=concejos;
      console.log(this.concejos);
    });
  }


  cargarConcejosComarca(){

    var x = Number(this.formRuta.get('zona'));
    console.log("Putiña! "+x.valueOf())
    this._concejos.getConcejoComarca(x).subscribe( (c:any) => {
      console.log("El id de la comarca es: "+this._comarca.idcomarca);
      this.idcom=c;
      console.log(this.idcom.valueOf)
    });
  }




  get idrutaNoValida(){
    return this.formRuta.get('idruta')?.invalid && this.formRuta.get('idruta')?.touched;
  }

  get denomNoValida(){
    return this.formRuta.get('denom')?.invalid && this.formRuta.get('denom')?.touched;
  }

  get fechainiNoValida(){
    return this.formRuta.get('fechaini')?.invalid && this.formRuta.get('fechaini')?.touched;
  }

  get periodoNoValida(){
    return this.formRuta.get('periodo')?.invalid && this.formRuta.get('periodo')?.touched;
  }

  get rutaNoValida(){
    return this.formRuta.get('ruta')?.invalid && this.formRuta.get('ruta')?.touched;
  }

  get zonaNoValida(){
    return this.formRuta.get('zona')?.invalid && this.formRuta.get('zona')?.touched;
  }



  cambiaTitulo(){
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if(this.idExiste){
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  obtenerRuta( idx:number ){
    return this._rutas.getRuta( idx ).subscribe( (data:any) => {
      this.ruta = data;
      console.log("maracuya: " + this.ruta.denom);
      return this.ruta;
    });
  }




  cargarDatos( ruta:rutaModel){
    this.formRuta.setValue({
      idruta: `${ this.ruta.idruta }`,
      denom: `${ this.ruta.denom }`,
      zona: `${ this.ruta.zona }`,
      localidad: `${ this.ruta.localidad }`,
      fechaini: `${ this.ruta.fechaini }`,
      periodo: `${ this.ruta.periodo }`,
    });

  }



  borrarRuta( id:number ){
    return this._rutas.deleteRuta( this.idx ).subscribe( (dato:any) =>{
      console.log("Ruta a borrar = " + dato.denom );
    });
  }


  crearFormulario(){
    this.formRuta = new FormGroup({
      idruta: new FormControl(),
      denom: new FormControl(),
      zona: new FormControl(),
      localidad: new FormControl(),
      fechaini: new FormControl(),
      periodo: new FormControl(),
      //ruta: new FormControl()
    });

  }



  validarForm( form:NgForm){
    if( this.formRuta.invalid ){
      return Object.values( this.formRuta.controls ).forEach( control => {
        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }
  }


  guardarRuta( ){

    this.validarForm( this.formRuta.value );

    if( this.ruta.idruta ){
      this.ruta = this.formRuta.value;
      return this._rutas.updateRuta( this.idx, this.ruta ).subscribe();
    } else {
      // Como el id de la ruta no existe, le paso un objeto ruta
      this._rutas.saveRuta( this.ruta ).subscribe();
    }

    return this.ruta;
  }











}
