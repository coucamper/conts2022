import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { VacacionesequipoService } from 'src/app/services/vacacionesequipo.service';

@Component({
  selector: 'app-salvarvacacionesempleado',
  templateUrl: './salvarvacacionesempleado.component.html',
  styleUrls: ['./salvarvacacionesempleado.component.css'],
})
export class SalvarvacacionesempleadoComponent implements OnInit {
  formVacaEmpleado: FormGroup;
  idExiste: boolean = false;
  idx: number;
  empleado: EmpleadoModel;
  listaEmpleados: any[] = [];

  constructor(
    private Route: Router,
    private activatedRoute: ActivatedRoute,
    private _vacaciones: VacacionesequipoService,
    private _empleado: EmpleadosService
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this._empleado.getEmpleado(this.idx).subscribe((e: any) => {
      this.empleado = e;
      console.log(this.empleado);
    });

    this._empleado.getEmpleados().subscribe((empleados: any) => {
      this.listaEmpleados = empleados;
      console.log(this.listaEmpleados);
    });

    this.crearForm();
  }

  ngOnInit(): void {
    this.idExiste = this.activatedRoute.snapshot.params['id'];
    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  crearForm() {
    this.formVacaEmpleado = new FormGroup({
      idplanvacaciones: new FormControl(),
      anyo: new FormControl(),
      anyoanterior: new FormControl(),
      diasvacaciones: new FormControl(),
      finiciovaca: new FormControl(),
      ffinvaca: new FormControl(),
      diasconsume: new FormControl(),
      diasconsumidos: new FormControl(),
      diasrestantes: new FormControl(),
      empleado: new FormControl(),
      pendientesanyoanterior: new FormControl(),
    });
  }

  guardarVacaciones() {}
}
