import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoComponent } from 'src/app/empleados/empleado/empleado.component';
import { EmpleadoModel } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';



@Component({
  selector: 'app-horasmedico',
  templateUrl: './horasmedico.component.html',
  styleUrls: ['./horasmedico.component.css']
})
export class HorasmedicoComponent implements OnInit {

  @Input() emp:any;

  idx:number = 1;
  empleado:EmpleadoModel;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private emple: EmpleadosService ) {
    this.emple.getEmpleado( this.idx ).subscribe( (e:any) =>{
      this.empleado = e;
    });
  }

  ngOnInit(): void {
  }

}
