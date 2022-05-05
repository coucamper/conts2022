import { Component, Input, OnInit, Output } from '@angular/core';
import { ContenedorComponent } from 'src/app/contenedor/contenedor.component';
import { NavegacionComponent } from 'src/app/shared/navegacion/navegacion.component';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { SalvarcontendorService } from 'src/app/services/inserciones/salvarcontendor.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';
import { rutaModel } from 'src/app/models/rutaModel';
import { ContenedoresRutasService } from 'src/app/services/contenedoresrutas.service';
import { NivelesContenedoresRutaService } from 'src/app/services/nivelescontenedoresruta.service';
import { tap } from 'rxjs/operators';
import { NivelContenedorModel } from 'src/app/models/NivelContenedorModel';
import { PesajeModel } from 'src/app/models/pesajeModel';
import { Empleado } from 'src/app/services/empleados.service';
import { EmpleadoModel } from 'src/app/models/empleado';
import { Pesaje, PesajesService } from 'src/app/services/pesajes.service';
import { CardnivelesComponent } from 'src/app/cardniveles/cardniveles.component';
import { NivelContenedorRuta } from 'src/app/models/NivelContenedorRutaModel';






export class Nivel {

  idnivelcontenedor: number;
  fecharegistro: string;
  nivelregistro: string;
  contenedor:ContenedorVOModule;
  pesaje:PesajeModel;
  empleado:EmpleadoModel;

}




@Component({
  selector: 'app-registrarnivelcontenedor',
  templateUrl: './registrarnivelcontenedor.component.html',
  styleUrls: ['./registrarnivelcontenedor.component.css']

})
export class RegistrarnivelcontenedorComponent implements OnInit {
  idx: number;
  idruta:any;
  idpesaje:any;
  formNivelContenedor: FormGroup;
  idExiste: boolean = false;
  ruta: rutaModel = new rutaModel();
  pesaje:PesajeModel = new PesajeModel();
  datosPesaje:any;
  nivelContenedor:any;
  nivelesContenedores:any[] = [];

  @Output() contenedoresDeRuta:any[] = [];

  controlContenedor:any;
  controlEmpleado:any;
  controlLlenado:any;
  controlPesaje:any;

  @Output() idcontenedor:string;
  page:any;
  paginador: any;

  nivelIndividual:any;

  nivelDePrueba:NivelContenedorRuta = new NivelContenedorRuta();

  mensajesEstado:any[] = [];


  denom:string = "currupipi"

  valorForm:any;
  formTest:any;

  cont:ContenedorVOModule = new ContenedorVOModule();


  constructor(
    private router: Router,
    private fB: FormBuilder,
    private _contenedores: ContenedoresService,
    private _contenrutas: NivelesContenedoresRutaService,
    private _rutas: RutasService,
    private _contenedoresRuta: ContenedoresRutasService,
    private activatedRoute: ActivatedRoute,
    private _pesaje: PesajesService,
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];

    this._rutas.getRuta(this.idx).subscribe((ruta: any) => {
      this.ruta = ruta;
      //this.idruta = ruta.idruta;
     console.log("Id ruta "+this.idruta);
     //return this.idruta;
    });

    /**
     * obtiene el pesaje por su idpesaje
     */
    this._pesaje.getPesaje( this.idx ).subscribe((pesaje:any) =>{
      this.datosPesaje = pesaje;
      this.idruta = this.datosPesaje.ruta.idruta;
      console.log("El id de la puta ruta "+ this.idruta)
      console.log(this.datosPesaje);
      return this.datosPesaje;
    });

    console.log( "Id de ruta "+this.idruta)
    this._contenedoresRuta.leerContenedoresRuta( this.idruta ).subscribe((contenedores:any) =>{
      this.contenedoresDeRuta = contenedores;
      console.log(this.contenedoresDeRuta);
    });

    this.crearFormulario();
    this.cambiaTitulo();
    this.listarContenedores();

  }


  listarContenedores(){

    this._pesaje.getPesaje( this.idx ).subscribe((pesaje:any) =>{
      this.datosPesaje = pesaje;
      this.idpesaje = this.datosPesaje.idpesaje;
      console.log("El id de la puta ruta "+ this.idruta)
      console.log(this.datosPesaje);
      //return this.idruta;

    this._contenedoresRuta.leerContenedoresRuta( this.idruta ).subscribe((contenedores:any) =>{
      this.contenedoresDeRuta = contenedores;
      console.log(this.contenedoresDeRuta);
    });
  });
  }

  getNiveles() {
    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe((params) => {
      this.page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!this.page) {
        this.page = 0;
      }
    });
  }

  crearFormulario(){
    this.formNivelContenedor = new FormGroup({
      idnivelcontenedor: new FormControl(),
      fecharegistro: new FormControl(),
      idcontenedor: new FormControl(),
      idempleado: new FormControl(),
      idllenado: new FormControl(),
      idpesaje: new FormControl()
    });
  }

  onChangeContenedor(newValue:any){
    this.controlContenedor = this.formNivelContenedor.controls['idcontenedor'].value;
    this.controlContenedor = newValue;
    this.idcontenedor = this.controlContenedor;
    console.log(this.idcontenedor);
  }

  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];
    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }


  guardar(){
    this.valorForm = this.formNivelContenedor.value;
    console.log(this.valorForm);
  }

/*
	@PostMapping("/nivelescontenruta/{idcontenedor}/{idempleado}/{idpesaje}/{idllenado}/{fecha}")
  */

  registrar(idcontenedor:any){
    this.nivelDePrueba.idcontenedor = idcontenedor;
    this.nivelDePrueba.idpesaje = this.idpesaje;
    this.nivelDePrueba.idllenado = this.formNivelContenedor.controls['idcontenedor'].value;
    this.nivelDePrueba.idempleado = this.datosPesaje.operario.idempleado;
    this.nivelDePrueba.fecharegistro = this.datosPesaje.fechapesaje;
    console.log(this.nivelDePrueba);
    this.mensajesEstado.push(["El contenedor "+this.nivelDePrueba.idcontenedor+" ha sido registrado con un nivel "+this.nivelDePrueba.idllenado]);
    return this._contenrutas.postNivelContenedorRuta(this.nivelDePrueba.idcontenedor, this.nivelDePrueba.idempleado, this.nivelDePrueba.idpesaje, this.nivelDePrueba.idllenado, this.nivelDePrueba.fecharegistro, this.nivelDePrueba).subscribe();
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._contenrutas.getNivelesContensRutaPageSize(this.idx, this.page)
        .pipe(
          tap((response) => {
            (response.content as Nivel[]).forEach((nivel) =>
              console.log(nivel.idnivelcontenedor)
            );
          })
        )
        .subscribe((response) => {
          this.nivelesContenedores = response.content as Nivel[];
          this.paginador = response;
          //console.log(this.nivelesContenedores);
        });
    });
  }
}
