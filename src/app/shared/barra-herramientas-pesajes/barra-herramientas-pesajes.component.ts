import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgSelectComponent, NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { RutasService } from 'src/app/services/rutas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';



@Component({
  selector: 'app-barra-herramientas-pesajes',
  templateUrl: './barra-herramientas-pesajes.component.html',
  styleUrls: ['./barra-herramientas-pesajes.component.css']
})
export class BarraHerramientasPesajesComponent implements OnInit {

  rutas:any[] = [];
  vehiculos:any[] = [];
  empleados:any[] = [];
  items:any[] = [];



  div1:boolean=false;

  constructor( private _rutas: RutasService, private _vehic: VehiculosService, private _emples: EmpleadosService, private config: NgSelectConfig ) {

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    this.div1Function();

    this._rutas.getRutas().subscribe( (r:any) =>{
      this.rutas = r;
      return this.rutas;
    });

    this._vehic.getVehiculos().subscribe( (v:any) => {
      this.vehiculos = v;
      this.items = this.vehiculos;
      return this.vehiculos;
    });

    this._emples.getEmpleados().subscribe( (emp:any) =>{
      this.empleados = emp;
      return this.empleados;
    });



   }

  div1Function(){

    this.div1 = !this.div1;

  }


  ngOnInit(): void {
  }

}
