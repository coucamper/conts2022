import { Component, OnInit } from '@angular/core';
import { ClaseService } from 'src/app/services/clase.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-barra-herramientas-exportacion',
  templateUrl: './barra-herramientas-exportacion.component.html',
  styleUrls: ['./barra-herramientas-exportacion.component.css']
})
export class BarraHerramientasExportacionComponent implements OnInit {

  clientes:any[] = [];
  clases:any[] = [];
  empleados:any[] = [];

  estadopago = [
    {estadopago: 'facturado'},
    {estadopago: 'pendiente'},
    {estadopago: 'pagado'}
  ];


  div1:boolean=false;

  constructor( private _clientes: ClienteService, private _clases: ClaseService ) {

    this.div1Function();

    this._clientes.getClientes().subscribe( (c:any) => {
      this.clientes = c;
    });

    this._clases.getClases().subscribe( (cl:any) => {
      this.clases = cl;
    });




   }

  div1Function(){

    this.div1 = !this.div1;

  }


  ngOnInit(): void {
  }

}
