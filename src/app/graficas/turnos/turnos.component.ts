import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';
import { ChartType, Row } from "angular-google-charts";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TurnoModel } from 'src/app/models/turnoModel';
import { TurnoempleadoService } from 'src/app/services/turnoempleado.service';



@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  turno:TurnoModel;
  turnoFecha:TurnoModel;
  formTurnos:FormGroup;
  myTypeTime = ChartType.Timeline;
  title = 'Niveles de recogida por ruta - Semana del xx al xx de xxxx';
  //type = 'PieChart';
  columnNames = ['Ruta', 'Total'];
  widthTime = 1530;
  heightTime = 300;



  planVacas:any[] = [];
  turnos:any[] = [];
  turnosEntreFechas:any[] = [];
  planTurnos:any[] = [];
  planTurnosEntreFechas:any[] = [];
  columnNamesTime = ['turno', 'Empleado', 'Fecha inicio', 'Fecha fin'];
  controlinicio:any;
  controlfinal:any;

  fechainicial:any;
  fechafinal:any;

  winWidth:number = document.body.clientWidth;

  datosFiltrados:boolean = false;

  options = {
    width_units: '%'
  };
  // options = {
  //   colors: ['#F29F05', '#F28705', '#F27405', '#D93D04', '#F67500'],
  // };

  constructor(private router:Router,
              private _turnos: TurnoempleadoService,
              private activatedRoute: ActivatedRoute,
              private fB: FormBuilder) {
                this.crearFormulario();
                this.resizeTimechart();
                this.fechainicial = this.formTurnos.controls['fechainicioturno'].value;
                this.fechafinal = this.formTurnos.controls['fechafinturno'].value;

                window.onresize = this.resizeTimechart;
               }





               resizeTimechart(){
                //console.log(window.innerWidth);
                let winWidth = window.innerWidth;
                if(winWidth < 1024){
                  console.log("Hola, estoy aquí!");
                  this.widthTime = 100;
                }

               }

               crearFormulario(){
                this.formTurnos = new FormGroup({
                  fechainicioturno: new FormControl(),
                  fechafinturno: new FormControl(),
                });
              }




              onChangeInicio(newValue:any) {
                this.controlinicio = this.formTurnos.controls['fechainicioturno'].value;
                this.controlinicio = newValue;  // don't forget to update the model here
                this.fechainicial = newValue;
                //console.log(this.fechainicial);
            }

            onChangeFinal(newValue:any) {
              this.controlfinal = this.formTurnos.controls['fechafinturno'].value;
              this.controlfinal = newValue;  // don't forget to update the model here
              this.fechafinal = newValue;
              //console.log(this.fechafinal);
          }

          refresh(){
            window.location.reload()
          }



          filtrar(){

            this._turnos.getTurnosEntreFechas(this.fechainicial,this.fechafinal).subscribe((turnosfechas:any) =>{
              this.datosFiltrados=true; // Tienes que meter aqí el booleano, fuera no tiene valor porque no se recuperan datos
              this.turnosEntreFechas = turnosfechas;
              //console.log(this.turnosEntreFechas)

              this.planTurnosEntreFechas =  [];
              console.log(this.planTurnosEntreFechas);
              for(let i in this.turnosEntreFechas){
                let turnoFecha = [this.turnosEntreFechas[i].turno.denomturno,
                                  this.turnosEntreFechas[i].empleado.nomemp,
                                  new Date(this.turnosEntreFechas[i].fechafinturno),
                                  new Date(this.turnosEntreFechas[i].fechainicioturno)];

                this.planTurnosEntreFechas.push(turnoFecha);
                console.log(this.planTurnosEntreFechas);
                //console.log(this.turnosEntreFechas[i].fechafinturno);
              }
              console.log(this.planTurnosEntreFechas);
            });
          }


  ngOnInit(): void {


    this._turnos.getTurnosEmpleados().subscribe((turnos:any) =>{
      this.datosFiltrados=false;
      this.turnos  = turnos;
      //console.log(this.turnos)
      for(let i in this.turnos){
        let turno = [this.turnos[i].turno.denomturno,
                     this.turnos[i].empleado.nomemp,
                     new Date(this.turnos[i].fechafinturno),
                     new Date(this.turnos[i].fechainicioturno)];
        this.planTurnos.push(turno);

      }
      //console.log(this.planTurnos);
    });
  }

}
