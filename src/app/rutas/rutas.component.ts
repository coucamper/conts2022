import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComarcasRutaService } from '../services/comarcasruta.service';
import { ContenedoresService } from '../services/contenedores.service';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { RutasService } from '../services/rutas.service';
import { ZonasService } from '../services/zonas.service';







@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {


  rutas:any[] = [];
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
               private _rutas: RutasService,
               private _comarcasRuta: ComarcasRutaService,
               private _contenRutas: ContenedoresRutasService) {

      this.idx = this.activatedRoute.snapshot.params['id'];
      this.div1Function();

      this.getZonas();
      this._rutas.getRutas().subscribe( data => {
      console.log(data);
      this.rutas = data;
      this.rutasF = this.rutas;

      this.verRuta( this.idx );
  });

  }


  verRuta( idx:number ){
    this._rutas.getRuta( this.idx ).subscribe( (res:any) => {
      console.log( res);
      this.ruta = res;
    })
  }

  getZona(){
    this._comarcasRuta.getComarcaRuta( this.idx ).subscribe( (comarcaRuta:any) =>{
      this.zona=comarcaRuta;
      console.log("Zona: "+this.zona);
    });
  }


  getZonas(){
    return this._comarcasRuta.getComarcasRuta().subscribe( (zs:any) => {
      this.zonas = zs;

      for(let x in this.zonas){
        console.log(this.zonas[x])
      }

    });
  }

  borrarRuta( ){
    return this._rutas.deleteRuta( this.idx ).subscribe( (dato:any) =>{
      console.log("Ruta a borrar = " + dato.denom );
    });
  }

  onSelect(){
    this.rutasF = this.rutas.filter( r => r.zona == this.selec1 || r.localidad == this.selec2 );
   }

  div1Function(){
    this.div1 = !this.div1;
  }



  ngOnInit(): void {
  }

}
