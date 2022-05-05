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
} from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { RutasService } from '../services/rutas.service';
import { rutaModel } from '../models/rutaModel';






@Component({
  selector: 'app-cardniveles',
  templateUrl: './cardniveles.component.html',
  styleUrls: ['./cardniveles.component.css']
})
export class CardnivelesComponent implements OnInit {
  formNivelCard: FormGroup;
  formNivelContenedor: FormGroup;
  contenedorRuta:any;
 // cont:ContenedorVOModule = new ContenedorVOModule();
  nivelCont:any;

  idx:number;

  ruta:rutaModel;
  idruta:number;

  @Input() idcontenedor = "";
  @Input() denom = "";
  @Input() contenedoresDeRuta:any;
  @Input() cont:ContenedorVOModule;


  constructor(
              private router: Router,
              private fB: FormBuilder,
              private _contenedores: ContenedoresService,
              private activatedRoute: ActivatedRoute,
              private _contenedoresRuta: ContenedoresRutasService,
              private _rutas: RutasService
              ) {


              this.crearForm();

              }

  crearForm(){
    this.formNivelCard = new FormGroup({
      nivel: new FormControl()
    });

    this.nivelCont = this.formNivelCard.controls['nivel'].value;
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }

}
