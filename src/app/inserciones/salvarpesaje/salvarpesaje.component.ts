import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PesajeModel } from 'src/app/models/pesajeModel';
import { VehiculosPesajesModel } from 'src/app/models/vehiculosPesajesModel';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { SalvarpesajeService } from 'src/app/services/inserciones/salvarpesaje.service';
import { PesajesService } from 'src/app/services/pesajes.service';
import { RutasService } from 'src/app/services/rutas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { VehiculosPesajesService } from 'src/app/services/vehiculospesajes.service';
import { VehiculospesajesComponent } from 'src/app/vehiculospesajes/vehiculospesajes.component';





@Component({
  selector: 'app-salvarpesaje',
  templateUrl: './salvarpesaje.component.html',
  styleUrls: ['./salvarpesaje.component.css']
})
export class SalvarpesajeComponent implements OnInit {

  formPesaje:FormGroup;

  vehiculospesajes:any[] = [];
  rutas:any[] = [];
  vehiculos:any[] = [];
  empleados:any[] = [];
  pesajes:any[] = [];

  pesaje:PesajeModel = new PesajeModel();
  vehiculopesaje:VehiculosPesajesModel = new VehiculosPesajesModel();

  idx:number;

  constructor( private router: Router,
    private fB: FormBuilder, private _empleados:EmpleadosService, private _rutas: RutasService,
    private _vehiculos: VehiculosService, private _vehiPesa:VehiculosPesajesService, private _pesajes: PesajesService, private activatedRoute: ActivatedRoute ) {

      this.idx = this.activatedRoute.snapshot.params['id'];

      this.crearFormulario();

      // this._empleados.getEmpleados().subscribe( (data:any) => {
      //   console.log(data);
      //   this.empleados=data;
      // });


      // this._rutas.getRutas().subscribe( (data:any) => {
      //   console.log(data);
      //   this.rutas=data;
      // });

      this.cargarVehiculosPesajes();
      this.cargarRutas();
      this.cargarVehiculos();
      this.cargarempleados();
      this.cargarPesajes();

    }

    get fechapesajeNoValida(){
      return this.formPesaje.get('fechapesaje')?.invalid && this.formPesaje.get('fechapesaje')?.touched;
    }

    get idrutaNoValida(){
      return this.formPesaje.get('idruta')?.invalid && this.formPesaje.get('idruta')?.touched;
    }

    get pesajeNoValida(){
      return this.formPesaje.get('pesaje')?.invalid && this.formPesaje.get('pesaje')?.touched;
    }

    get vehiculoNoValida(){
      return this.formPesaje.get('vehiculo')?.invalid && this.formPesaje.get('vehiculo')?.touched;
    }

    get idempleadoNoValida(){
      return this.formPesaje.get('idempleado')?.invalid && this.formPesaje.get('idempleado')?.touched;
    }

    get comprobanteNoValida(){
      return this.formPesaje.get('comprobante')?.invalid && this.formPesaje.get('comprobante')?.touched;
    }


  ngOnInit(): void {

  }


  cargarVehiculosPesajes(){
    this._vehiPesa.getvehiculosPesajes().subscribe( (vehipesas:any) =>{
      this.vehiculospesajes = vehipesas;
      console.log(this.vehiculospesajes);
      return this.vehiculospesajes;
    });
  }

  cargarRutas(){
    this._rutas.getRutas().subscribe( (rut:any) =>{
      this.rutas = rut;
      return this.rutas;
    });
  }

  cargarVehiculos(){
    this._vehiculos.getVehiculos().subscribe( (vehiculo:any) =>{
      this.vehiculos = vehiculo;
      return this.vehiculos;
    });
  }

  cargarempleados(){
    this._empleados.getEmpleados().subscribe( (emp:any) => {
      this.empleados = emp;
      return this.empleados;
    });
  }

  cargarPesajes(){
    this._pesajes.getPesajes().subscribe( (pesaje:any) => {
      this.pesajes = pesaje;
      console.log( this.pesajes );
      return this.pesajes;
    });
  }


  crearFormulario(){

    this.formPesaje = new FormGroup({
      fechapesaje: new FormControl(),
      idruta: new FormControl(),
      pesaje: new FormControl(),
      vehiculo: new FormControl(),
      idempleado: new FormControl(),
      comprobante: new FormControl()
    });
  }


  validarFormulario( form:NgForm){
    if( this.formPesaje.invalid ){

      return Object.values( this.formPesaje.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  guardar(){

    this.validarFormulario( this.formPesaje.value );

    if( this.vehiculopesaje.idvehipesaje ){

      this.vehiculopesaje = this.formPesaje.value;
      return this._vehiPesa.putVehiculoPesaje( this.idx, this.vehiculopesaje ).subscribe();

      }else {
        return this._vehiPesa.postVehiculoPesaje( this.vehiculopesaje ).subscribe();
      }

      //return this.empleado;

  }

}
