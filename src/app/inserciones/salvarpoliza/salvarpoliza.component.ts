import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolizaModule } from 'src/app/models/polizaModel';
import { VehiculoModel } from 'src/app/models/vehiculoModel';
import { PolizasService } from 'src/app/services/polizas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';



@Component({
  selector: 'app-salvarpoliza',
  templateUrl: './salvarpoliza.component.html',
  styleUrls: ['./salvarpoliza.component.css']
})
export class SalvarpolizaComponent implements OnInit {

  idx:number;
  idExiste:boolean = false;
  formPoliza:FormGroup;
  poliza:PolizaModule = new PolizaModule();
  vehiculo: VehiculoModel = new VehiculoModel();
  vehiculos:any[] = [];

  controlVehiculo:any;
  idvehiculo:number;



  constructor(
              private router: Router,
              private fB: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _vehiculos: VehiculosService,
              private _vehiculo: VehiculoModel,
              private _polizas: PolizasService
  ) {
              this.idx = this.activatedRoute.snapshot.params['id'];

              this._vehiculos.getVehiculos().subscribe((vehiculos:any) =>{
                this.vehiculos = vehiculos;
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
    this.formPoliza = new FormGroup({
      idpoliza : new FormControl(),
      numpoliza : new FormControl(),
      aseguradora : new FormControl(),
      fechapoliza : new FormControl(),
      modalidad : new FormControl(),
      franquicia : new FormControl(),
      importepoliza : new FormControl(),
      periodofact : new FormControl(),
      vehiculo : new FormControl()
    })
  }




  onChangeVehiculo(newValue:any){
    this.controlVehiculo = this.formPoliza.controls['vehiculo'].value;
    this.controlVehiculo = newValue;
    this.idvehiculo = this.controlVehiculo;
    console.log(this.vehiculo);
    return this.idvehiculo;
  }

  guardarPoliza(){
    this.poliza = this.formPoliza.value;
    this._vehiculos.getVehiculo(this.idvehiculo).subscribe((v:any) =>{
      this.vehiculo = v;
      this.poliza.vehiculo = this.vehiculo;
      this._polizas.postPoliza(this.poliza ).subscribe();
    });

    this.router.navigate(['/vehiculos']);
  }

  ngOnInit(): void {

  }

}


/*

    {
        "idpoliza": 1,
        "numpoliza": "54554546456",
        "aseguradora": "Fenix Auto",
        "fechapoliza": "2021-01-01",
        "modalidad": "Terceros ampliado con lunas y asistencia completa",
        "franquicia": "200",
        "importepoliza": 680.95,
        "periodofact": "anual",
        "vehiculo": {
            "idvehiculo": 1,
            "marca": "Pegaso",
            "modelo": "Eurocargo",
            "matricula": "45678-HGZ",
            "fechacompra": "2017-01-01"
        }
    }


*/
