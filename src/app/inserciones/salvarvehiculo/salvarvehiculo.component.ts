import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoModel } from 'src/app/models/vehiculoModel';
import { VehiculosService } from 'src/app/services/vehiculos.service';



@Component({
  selector: 'app-salvarvehiculo',
  templateUrl: './salvarvehiculo.component.html',
  styleUrls: ['./salvarvehiculo.component.css'],
})
export class SalvarvehiculoComponent implements OnInit {
  formVehiculo: FormGroup;
  idExiste: boolean = false;
  vehiculos: any[] = [];
  Vehiculo = new VehiculoModel();

  idx: number;

  constructor(
    private router: Router,
    private fB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _vehiculos: VehiculosService,
    private vehiculo: VehiculoModel
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];

    this.crearFormulario();
    this.cambiaTitulo();
    this.obtenerVehiculo(this.idx);
    this.obtenerVehiculos();

    this._vehiculos.getVehiculo(this.idx).subscribe((vehic: any) => {
      this.Vehiculo = vehic;
      return this.Vehiculo;
    });
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }

  refresh(): void {
    window.location.reload();
}

  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  obtenerVehiculos() {
    return this._vehiculos.getVehiculos().subscribe((vehiculos: any) => {
      this.vehiculos = vehiculos;
    });
  }

  obtenerVehiculo(idx: number) {
    return this._vehiculos.getVehiculo(idx).subscribe((vehi: any) => {
      this.Vehiculo = vehi;
    });
  }

  get marcaNoValida() {
    return (
      this.formVehiculo.get('marca')?.invalid &&
      this.formVehiculo.get('marca')?.touched
    );
  }

  get modeloNoValida() {
    return (
      this.formVehiculo.get('modelo')?.invalid &&
      this.formVehiculo.get('modelo')?.touched
    );
  }

  get matriculaNoValida() {
    return (
      this.formVehiculo.get('matricula')?.invalid &&
      this.formVehiculo.get('matricula')?.touched
    );
  }

  get fechacompraNoValida() {
    return (
      this.formVehiculo.get('fechacompra')?.invalid &&
      this.formVehiculo.get('fechacompra')?.touched
    );
  }

  get aseguradoraNoValida() {
    return (
      this.formVehiculo.get('aseguradora')?.invalid &&
      this.formVehiculo.get('aseguradora')?.touched
    );
  }

  get polizaNoValida() {
    return (
      this.formVehiculo.get('poliza')?.invalid &&
      this.formVehiculo.get('poliza')?.touched
    );
  }

  crearFormulario() {
    this.formVehiculo = new FormGroup({
      marca: new FormControl(),
      modelo: new FormControl(),
      matricula: new FormControl(),
      fechacompra: new FormControl(),
      aseguradora: new FormControl(),
      poliza: new FormControl()
    });
  }

  validarFormulario(form: NgForm) {
    if (this.formVehiculo.invalid) {
      return Object.values(this.formVehiculo.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  guardarVehiculo() {
    this.validarFormulario(this.formVehiculo.value);

    if (this.Vehiculo.idvehiculo) {
      this.Vehiculo = this.formVehiculo.value;
      return this._vehiculos.putVehiculo(this.idx, this.Vehiculo).subscribe();
    } else {
      // Como el id de la ruta no existe, le paso un objeto ruta
      this._vehiculos.postVehiculo(this.Vehiculo).subscribe();
    }
    return this.vehiculo;
  }
}
