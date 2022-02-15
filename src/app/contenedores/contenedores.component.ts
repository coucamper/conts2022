import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContenedoresService } from '../services/contenedores.service';




@Component({
  selector: 'app-contenedores',
  templateUrl: './contenedores.component.html',
  styleUrls: ['./contenedores.component.css']
})
export class ContenedoresComponent implements OnInit {

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


