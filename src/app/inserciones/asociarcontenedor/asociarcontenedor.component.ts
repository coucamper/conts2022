import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
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
  styleUrls: ['./asociarcontenedor.component.css'],
})
export class AsociarcontenedorComponent implements OnInit {
  contenedores: any[] = [];
  formContenedor: FormGroup;
  idx: number;
  contenedor: ContenedoresRutasModel = new ContenedoresRutasModel();
  ruta: rutaModel;
  conten: ContModule;
  idcontenedor: number;
  idcont: number; // Guarda el id del contenedor a ñadir a la ruta
  idExiste: boolean = false;
  previousUrl: string;
  currentUrl: string;

  control: any[] = [];

  constructor(
    private _contenedores: ContenedoresService,
    private _contenruta: ContenedoresRutasService,
    private _ruta: RutasService,
    private router: Router,
    private fB: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.crearFormulario();
    this.cambiaTitulo();
    this.obtenerContenedores();
    this.datosRuta();

  }

  ngOnInit(): void {}

  /**
   * Recupera los contenedores existentes para mostrar en el select
   */
  obtenerContenedores() {
    this._contenedores.getContenedores().subscribe((contenedores: any) => {
      this.contenedores = contenedores;
      console.log(this.contenedores);
      return this.contenedores;
    });
  }

  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];
    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  crearFormulario() {
    this.formContenedor = new FormGroup({
      idcontenrutas: new FormControl(),
      idcontenedor: new FormControl(),
      idruta: new FormControl(),
    });
  }

  onChange(newValue: any) {
    this.control = this.formContenedor.controls['idcontenedor'].value;
    this.control = newValue; // don't forget to update the model here
    this.idcontenedor = newValue;
    console.log('El id que obtengo es: ' + this.idcontenedor);
  }

  addContenedor(idruta: number, idcontendor: number, contenedor: ContenedoresRutasModel) {
    this.control = this.formContenedor.controls['idcontenedor'].value;
    console.log(this.control);

    console.log("Id contenedor"+this.idcontenedor);
    console.log("id ruta"+this.idx)


    this._contenruta.asociarContenedorARuta(
      this.idx,
      this.idcontenedor,
      this.contenedor
    ).subscribe();
  }




  guardar() {
    this.conten = this.formContenedor.value;
    this.conten.idcontenedor = this.idcont;
    // this.addContenedor( this.idx, this.idcontenedor, this.contenedor);
        this._contenruta.asociarContenedorARuta(
      this.idx,
      this.idcontenedor,
      this.contenedor
    ).subscribe();
  }

  datosRuta() {
    this._ruta.getRuta(this.idx).subscribe((ruta: any) => {
      this.ruta = ruta;
      console.log(this.ruta);
    });
  }


  refresh(): void {
    window.location.reload();
  }


}
