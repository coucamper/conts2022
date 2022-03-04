import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AvisosService } from '../services/avisos.service';
import { ComarcasRutaService } from '../services/comarcasruta.service';
import { ContenedoresService } from '../services/contenedores.service';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { RutasService } from '../services/rutas.service';
import { ZonasService } from '../services/zonas.service';






@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  aviso:boolean = false;
  avisos:any[] = [];
  rutasF:any[] = [];
  zonas:any[] = [];
  zona:any[] = [];
  ruta:any[] = [];
  idx:number;

  fecha = new Date();
  mes = new Date().toLocaleString( 'default', { month: 'long' } );
  anio = new Date().getFullYear().toLocaleString();

  div1:boolean=false;

  selec1:string;
  selec2:string;

  constructor( private router:Router,
               private activatedRoute: ActivatedRoute,
               private _avisos: AvisosService,
               private _comarcasRuta: ComarcasRutaService,
               private _contenRutas: ContenedoresRutasService) {

      this.idx = this.activatedRoute.snapshot.params['id'];

      this._avisos.getAvisos().subscribe((avisos:any) =>{
        this.avisos=avisos;
      });

  }




  div1Function(){
    this.div1 = !this.div1;
  }



  ngOnInit(): void {
  }
}
