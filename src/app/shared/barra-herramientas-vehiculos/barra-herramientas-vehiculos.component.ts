import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-barra-herramientas-vehiculos',
  templateUrl: './barra-herramientas-vehiculos.component.html',
  styleUrls: ['./barra-herramientas-vehiculos.component.css']
})
export class BarraHerramientasVehiculosComponent implements OnInit {

  vehiculos:any[] = [];


    areas = [
      { area: 'Occidente' },
      { area: 'centro' },
      { area: 'Oriente' }
    ];


    localidades = [
      { localidad: 'Avilés' },
      { localidad: 'Gijón' },
      { localidad: 'Pola de Laviana' },
      { localidad: 'Mieres' },
      { localidad: 'Oviedo' },
      { localidad: 'Pravia' },
      { localidad: 'Villaviciosa' }
    ];

    periodicidad = [
      { periodicidad: 'Diaria' },
      { periodicidad: 'Semanal' },
      { periodicidad: 'Quincenal' },
      { periodicidad: 'Mensual' },
    ];



  empleados:any[] = [];


  div1:boolean=false;

  constructor( private _vehiculos: VehiculosService ) {

    this.div1Function();

    this._vehiculos.getVehiculos().subscribe( (vehic:any) =>{
      this.vehiculos = vehic;
    });


   }

  div1Function(){

    this.div1 = !this.div1;

  }

  ngOnInit(): void {
  }

}
