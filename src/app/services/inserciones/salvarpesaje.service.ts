import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SalvarpesajeService implements OnInit {


  constructor( private http: HttpClient, private _empleados: EmpleadosService ) {

    this.getEmpleados();

   }


  getEmpleados( ){
    return this.http.get('http://localhost:8093/empleado')
    .pipe( map( (data:any) => {
      return data; 
    }));
  }

  ngOnInit(): void {
  }
}
