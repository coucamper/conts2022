import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-barra-herramientas-rutas',
  templateUrl: './barra-herramientas-rutas.component.html',
  styleUrls: ['./barra-herramientas-rutas.component.css']
})
export class BarraHerramientasRutasComponent implements OnInit {

  rutas:any[] = [];


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

  constructor( private _rutas: RutasService ) {

    this.div1Function();

    this._rutas.getRutas().subscribe( (ruts:any) => {
        this.rutas = ruts;
    });


   }

  div1Function(){

    this.div1 = !this.div1;

  }


  ngOnInit(): void {
  }

}
