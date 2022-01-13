import { Component, OnInit, Output } from '@angular/core';
import { ClaseService } from 'src/app/services/clase.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-barra-herramientas-empleados',
  templateUrl: './barra-herramientas-empleados.component.html',
  styleUrls: ['./barra-herramientas-empleados.component.css']
})
export class BarraHerramientasEmpleadosComponent implements OnInit {

  empleadosFormFilter:FormGroup;
  empleados:any[] = [];
  nomEmp:any[] = [];

  @Output() categoria:any[] = [];

  cat:any;

  categorias = [
    { categoria: 'Gerente'},
    { categoria: 'Titulado superior'},
    { categoria: 'Técnico superior'},
    { categoria: 'Encargado general'},
    { categoria: 'Encargado'},
    { categoria: 'Técnico'},
    { categoria: 'Ayudante'},
    { categoria: 'Conductor'},
    { categoria: 'Ayudante de conductor'}
  ];

  div1:boolean=false;

  constructor( private _empleados: EmpleadosService ) {

    this.div1Function();

    this._empleados.getEmpleados().subscribe( ( emps:any) => {
      this.empleados = emps;

    this.crearForm();
    });


   // this.filtrarnombre();
   }

   crearForm( ){

      this.empleadosFormFilter = new FormGroup({
        nomemp: new FormControl(),
        categoria: new FormControl(),
        finicial: new FormControl(),
        ffinal: new FormControl()
      });
   }


  div1Function(){
    this.div1 = !this.div1;
  }




  ngOnInit(): void {
  }

}
