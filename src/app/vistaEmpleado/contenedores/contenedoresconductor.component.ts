import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { BarraHerramientasEmpleadosComponent } from 'src/app/shared/barra-herramientas-empleados/barra-herramientas-empleados.component';
import { NavegacionComponent } from 'src/app/shared/navegacion/navegacion.component';
import { NavegacionconductorComponent } from 'src/app/shared/navegacionconductor/navegacionconductor.component';
import { rutaModel } from 'src/app/models/rutaModel';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MensajesService } from 'src/app/services/mensajes.service';





@Component({
  selector: 'app-contenedoresconductor',
  templateUrl: './contenedoresconductor.component.html',
  styleUrls: ['./contenedoresconductor.component.css']
})
export class ContenedoresConductorComponent implements OnInit {


  contenedores:any[] = [];

  contenedor:ContenedorVOModule = new ContenedorVOModule();



  fecha = new Date();
  mes = new Date().toLocaleString( 'default', { month: 'long' } );
  anio = new Date().getFullYear().toLocaleString();

  constructor( private router:Router,
               private _contenedores: ContenedoresService ) {

      this._contenedores.getContenedores().subscribe( (conts:any) => {
        this.contenedores = conts;
        console.log( this.contenedores );
        return this.contenedores;
      });
    }


  ngOnInit(): void {
  }

}
