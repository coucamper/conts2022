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

  idvehiculo:number;
  idempleado:number;
  idruta:number;

  controlVehiculo:any;
  controlEmpleado:any;
  controlRuta:any;

  rutaTemporal:any;

  timer1:any;

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



  onChangeVehiculo(newValue:any){
    this.controlVehiculo = this.formPesaje.controls['vehiculo'].value;
    this.controlVehiculo = newValue;
    this.idvehiculo = Number(newValue);
    console.log(this.idvehiculo);
    return this.idvehiculo;
  }

  onChangeEmpleado(newValue:any){
    this.controlEmpleado = this.formPesaje.controls['idempleado'].value;
    this.controlEmpleado = newValue;
    this.idempleado = Number(newValue);
    console.log(this.idempleado);
    return this.idempleado;
  }

  onChangeRuta(newValue:any){
    this.controlRuta = this.formPesaje.controls['idruta'].value;
    this.controlRuta = newValue;
    this.idruta = Number(newValue);
    console.log(this.idruta);
    return this.idruta;
  }








/*
    this.control = this.formRuta.controls['denom'].value;
    this.control = newValue;  // don't forget to update the model here
    this.idcomarca=Number(newValue.charAt(0));
    this.traerLocalidadesZonas( this.idcomarca );
    console.log(this.idcomarca);
*/


  formarPesaje(){
    this.pesaje.fechapesaje = this.formPesaje.controls['fechapesaje'].value;
    this.pesaje.idruta = this.idruta;
    this.pesaje.idempleado = this.idempleado;
    this.pesaje.pesaje = this.formPesaje.controls['pesaje'].value;
    return this.pesaje;
  }

  formarVehiculoPesaje(){

  }


  guardar(){

    this.formarPesaje();
    console.log(this.pesaje);

    this.validarFormulario( this.formPesaje.value );

    // ---------------------------------------
    if( this.vehiculopesaje.idvehipesaje ){
      this.vehiculopesaje = this.formPesaje.value;
      this._vehiPesa.putVehiculoPesaje( this.idx, this.vehiculopesaje ).subscribe();
      }else {
        this._pesajes.postPesaje(Number(this.idruta), this.idempleado, this.idvehiculo, this.pesaje).subscribe();
      }
    // ---------------------------------------

    //this.rutaTemporal = this._pesajes.recuperarPesaje( this.pesaje.fechapesaje, this.pesaje.idruta, this.pesaje.idempleado).subscribe();

  }





}
