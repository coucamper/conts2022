import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { rutaModel } from '../models/rutaModel';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { NivelesContenedoresRutaService } from '../services/nivelescontenedoresruta.service';
import { RutasService } from '../services/rutas.service';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
  ContenedoresRuta:any[] = [];
  nivelesContenedoresRuta:any[] = [];
  nivelContenRuta:any[] = [];
  ContenedorRuta:any[] = [];
  idRuta:number;
  idx:number;
  ruta:rutaModel;
  contenedor:ContenedoresRutasModel = new ContenedoresRutasModel();

  res:any;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _contenRutas: ContenedoresRutasService,
               private _ruta: RutasService,
               private _nivelesContRuta: NivelesContenedoresRutaService ) {

               this.idx = this.activatedRoute.snapshot.params['id'];
               this._contenRutas.getContenedorRuta( this.idx ).subscribe( (datos:any) => {
               this.ContenedoresRuta = datos;

               this.verRuta();
               this.verNiveles();
               this.verNivelRuta();
    });
   }

  ngOnInit(): void {
  }

  verRuta(){
    this._ruta.getRuta( this.idx ).subscribe((r:any) =>{
      this.ruta=r;
      console.log(this.ruta);
    });
  }


  verNiveles(){
    this._nivelesContRuta.getNivelesContenedoresRuta().subscribe((nivs:any) => {
      this.nivelesContenedoresRuta=nivs;
      console.log(this.nivelesContenedoresRuta);
    });
  }


  verNivelRuta(){
    this._nivelesContRuta.getNivelContenedorRuta( this.idx ).subscribe((nivel:any) =>{
      this.nivelContenRuta=nivel;
      console.log(this.nivelContenRuta);
    });
  }




  // asociarContendorARuta(){

  //   this._contenRutas.asociarContenedorARuta( this.idRuta, this.idx, this.contenedor ).subscribe((c:any) => {
  //     this.res = c;
  //     console.log("C es: "+this.res);
  //   });

  // }



}
