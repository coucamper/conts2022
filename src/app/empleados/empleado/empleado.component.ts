import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';

import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmpleadosComponent } from '../empleados.component';
import { map } from 'rxjs/operators';
import { ClassGetter, ClassStmt } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';




@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})


export class EmpleadoComponent implements OnInit {

  empleado = new EmpleadoModel();
  @Output() emp:any;
  vempleado:EmpleadoModel[] = [];
  idx:any;

  empleadoSeleccionado: EmpleadoModel;


  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _empleados: EmpleadosService ) {
    //this.mostrarEmpleado( this.idx );
  this.idx = this.activatedRoute.snapshot.params['id'];

  this.verEmpleado( this.idx );

}



verEmpleado( idx:number ) {

 return this._empleados.getEmpleado( this.idx ).subscribe( ( respuesta:any) => {
    this.emp = respuesta;
    console.log("el empleado es: "+ this.emp.nomemp);
    console.log("el id es: "+ this.emp.idempleado);
    console.log("el nif es: "+ this.emp.nif);
  });

  //return this.emp;
}





ngOnInit() {
  //this.idx = this.activatedRoute.snapshot.params['id'];

}


}


