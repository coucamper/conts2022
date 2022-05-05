import { Component, OnInit } from '@angular/core';
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';
import { ChartType, Row } from "angular-google-charts";
import { HttpClient } from '@angular/common/http';
import { Data, Router, RouterLink } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { PesajesService } from '../services/pesajes.service';
import { DonutData } from '../models/donutData';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-graficapesajes',
  templateUrl: './graficapesajes.component.html',
  styleUrls: ['./graficapesajes.component.css']
})
export class GraficapesajesComponent implements OnInit {
  formPesajes:FormGroup;
  data:Data;
  datos:any[];
  donutData:DonutData; // Este es el objeto que almacena la data del Donut. Requiere de la creación de una clase para almacenar y aceptar los valores correctos.
  datosRespuesta:Object[] = [];

  x:any;
  y:any;
  single:any;
  multi:any;

  colorScheme: Color = { domain: ['#99CCE5', '#FF7F7F'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', };
  myType = ChartType.PieChart;
  title = 'Niveles de recogida por ruta - semana del x al x de x';
  //type = 'PieChart';
  columnNames = ['Ruta', 'Total'];
  options = {
  };
  // options = {
  //   colors: ['#F29F05', '#F28705', '#C62A02', '#D93D04', '#F67500'],
  // };
  width = 550;
  height = 400;
  controlinicio:any;
  controlfinal:any;
  fechainicial: string = "2022-03-20";
  fechafinal: string = "2022-03-30";

  datosFiltrados:boolean = false;
  pesajesEntreFechas:any[] =  [];
  planPesajesEntreFechas:any[];





  constructor(private router:Router,
    private http: HttpClient,
    private _clientes:HttpClient,
    private _pesajes: PesajesService) {
      this._pesajes.getPesajes().subscribe((pesajes:any)=>{
        this.datosFiltrados = false;
        this.datos = pesajes;
        for(let i in this.datos){
          let donut = [this.datos[i].ruta.denom,Number(this.datos[i].pesaje)];
          //this.single = this.datosRespuesta;
          this.datosRespuesta.push(donut);
          this.single=this.datosRespuesta;
          //this.multi=this.datosRespuesta;
          //console.log(this.datosRespuesta);

        }
          //console.log(this.x);
      });

      this.crearFormulario();
      this.filtrar();
      this.mostrar();

     }

     crearFormulario(){
      this.formPesajes = new FormGroup({
        fechainicio: new FormControl(),
        fechafin: new FormControl(),
      });
    }



    mostrar(){
      //return alert("hola");
    }

     onChangeInicio(newValue:any) {
      this.controlinicio = this.formPesajes.controls['fechainicio'].value;
      this.controlinicio = newValue;  // don't forget to update the model here
      this.fechainicial = newValue;
      console.log(this.fechainicial);
  }

  onChangeFinal(newValue:any) {
    this.controlfinal = this.formPesajes.controls['fechafin'].value;
    this.controlfinal = newValue;  // don't forget to update the model here
    this.fechafinal = newValue;
    console.log(this.fechafinal);
}


     filtrar(){


        this._pesajes.getPesajesEntreFechas(this.fechainicial, this.fechafinal).subscribe((pesajes:any)=>{
          this.datosFiltrados=true; // Tienes que meter aqí el booleano, fuera no tiene valor porque no se recuperan datos
          this.pesajesEntreFechas = pesajes;
          this.planPesajesEntreFechas = [];
          console.log(this.pesajesEntreFechas);
          for(let i in this.pesajesEntreFechas){
            let pesajeFecha = [this.pesajesEntreFechas[i].ruta.denom, this.pesajesEntreFechas[i].pesaje];

            this.planPesajesEntreFechas.push(pesajeFecha);
          }
        });
    }

  ngOnInit(): void {
    if(this.fechainicial == undefined ){
      this.fechainicial == "2022-03-20";
    }
    if(this.fechafinal == undefined){
      this.fechafinal == "2022-03-30";
    }
  }

}
