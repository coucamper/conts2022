import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MultaModule } from 'src/app/models/multaModel';
import { PolizaModule } from 'src/app/models/polizaModel';
import { VehiculoModel } from 'src/app/models/vehiculoModel';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MultasService } from 'src/app/services/multas.service';
import { PolizasService } from 'src/app/services/polizas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';



@Component({
  selector: 'app-salvarmulta',
  templateUrl: './salvarmulta.component.html',
  styleUrls: ['./salvarmulta.component.css']
})
export class SalvarmultaComponent implements OnInit {
  formMulta: FormGroup;
  idx:number;
  idExiste:boolean = false;
  idempleado:number;
  idvehiculo:number;

  empleados:any[] = [];
  vehiculos:any[] = [];

  controlEmpleado:any;
  controlVehiculo:any;
  multa:MultaModule = new MultaModule();


  constructor(
              private router: Router,
              private fB: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _vehiculos: VehiculosService,
              private _vehiculo: VehiculoModel,
              private _empleados: EmpleadosService,
              private _multas: MultasService
              ) {

                this._empleados.getEmpleados().subscribe((empleados:any) =>{
                  this.empleados = empleados;
                  //return this.empleados;
                });

                this._vehiculos.getVehiculos().subscribe((vehiculos:any) =>{
                  this.vehiculos = vehiculos;
                  //return this.vehiculos;
                });

                this.crearFormulario();

              }

  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }


  crearFormulario(){
    this.formMulta = new FormGroup({
      idmulta: new FormControl(),
      causamulta: new FormControl(),
      importe: new FormControl(),
      fechamulta: new FormControl(),
      lugarmulta: new FormControl(),
      idempleado: new FormControl(),
      idvehiculo: new FormControl()
    });
  }

  onChangeVehiculo(newValue:any){
    this.controlVehiculo = this.formMulta.controls['idvehiculo'].value;
    this.controlVehiculo = newValue;
    this.idvehiculo = this.controlVehiculo;
    console.log(this.idvehiculo);
   //return this.idvehiculo;
  }

  onChangeEmpleado(newValue:any){
    this.controlEmpleado = this.formMulta.controls['idempleado'].value;
    this.controlEmpleado = newValue;
    this.idempleado = this.controlEmpleado;
    console.log(this.idempleado);
    //return this.idempleado;
  }

  guardarMulta(){
    this.multa = this.formMulta.value;
    this.multa.idempleado = Number(this.idempleado);
    this.multa.idvehiculo = Number(this.idvehiculo);
    console.log(this.multa);
    this.router.navigate(['/vehiculos']);
    return this._multas.postMulta( this.idempleado, this.idvehiculo, this.multa ).subscribe();
  }

  ngOnInit(): void {
  }

}
