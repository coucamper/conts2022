import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { EmpleadoModel } from '../models/empleado';
import { rutaModel } from '../models/rutaModel';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { NivelesContenedoresRutaService } from '../services/nivelescontenedoresruta.service';
import { RutasService } from '../services/rutas.service';
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';
import { ChartType, Row } from "angular-google-charts";
import { NivelContenedorModel } from '../models/NivelContenedorModel';



export class NivelContenedorRuta {

  idnivelcontenedor:number;
  contenedor:ContenedorVOModule;
  ruta:rutaModel;
  empleado:EmpleadoModel;

}

export class pesaje {
  nivel:number;
  id:number;
  ruta:string;
  contenedor:string;


}

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
  ContenedoresRuta:any[] = [];
  nivelesContenedoresRuta:any[] = this.ContenedoresRuta;
  nivelContenRuta:any[] = [];
  ContenedorRuta:any[] = [];
  idRuta:number;
  idx:number;
  ruta:rutaModel;
  contenedor:ContenedoresRutasModel = new ContenedoresRutasModel();

  res:any;
  page:any;
  size:number = 10;
  paginador:any;
  items: any[] = this.nivelesContenedoresRuta;
  pageOfItems: Array<any>;
  totalElements: number;

  nivelContenedor:NivelContenedorModel = new NivelContenedorModel();

  myTypeTime = ChartType.ColumnChart;
  title = 'Niveles de recogida por ruta - Semana del xx al xx de xxxx';
  //type = 'PieChart';
  columnNames = ['Ruta', 'Total'];
  columnNamesTime = ['Nivel', 'Ruta', 'contenedor'];
  widthTime = 1530;
  heightTime = 300;
  options = {
    hAxis: {title: 'Fecha', titleTextStyle: {color: 'Black'}, format: "yyyy-MM-dd"}
  };

  //cont:pesaje;

  datos:any[] = [];
  datosCont:any[];
  mayorCero:boolean = false;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _contenRutas: ContenedoresRutasService,
               private _ruta: RutasService,
               private _nivelesContRuta: NivelesContenedoresRutaService ) {

               this.idx = this.activatedRoute.snapshot.params['id'];
              //  this._contenRutas.getContenedorRuta( this.idx ).subscribe( (datos:any) => {
              //  this.ContenedoresRuta = datos;
              // });

              // this.verRuta();
               this.verNiveles();

   }



  verNiveles(){
    this._nivelesContRuta.getNivelesContenedoresRuta().subscribe((nivs:any) => {
      this.nivelesContenedoresRuta=nivs;
      //console.log(this.nivelesContenedoresRuta);
    });
  }

  // registrarNivel(){
  //   this._nivelesContRuta.postNivelContenedorRuta( this.nivelContenedor ).subscribe();
  // }



  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];

    this.page = this.activatedRoute.paramMap.subscribe((params) =>{
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if(!page){
        this.page = 0;
        this.mayorCero = false;
      }
      this.mayorCero = true;
      console.log(this.idx);
      console.log(this.page);

      this._nivelesContRuta.getNivelesContensRutaPageSize(this.idx, this.page).subscribe((response) => {
        console.log(response);
        this.nivelContenRuta = response;
        this.paginador = response;
        console.log(this.nivelContenRuta);
        return this.mayorCero;
      })
    })
  }


}
