
import { Component, OnInit, Output } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolizaModule } from '../models/polizaModel';
import { PolizasService } from '../services/polizas.service';
import { VehiculosService } from '../services/vehiculos.service';



@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {

  idx:number;
  polizaMod = new PolizaModule();
  idExiste:boolean = false;
  formPoliza:FormGroup;
  poliza:any[] = [];
  vehiculo:any;
  polizas:any[] = [];
  polvehiculo:any[] = [];

  constructor(private router: Router,
              private _poliza: PolizasService,
              private _vehiculo: VehiculosService,
              private activatedRoute: ActivatedRoute ) {
                this.idx = this.activatedRoute.snapshot.params['id'];
                this.mostrarPoliza();
                this.recuperarVehiculo();
                this.cambiaTitulo();
                //this.verPolizaVehiculo();


            this._poliza.getPolizaPorVehiculo( this.idx ).subscribe( (dato:any) =>{
              this.poliza = dato;

              console.log(this.poliza);
              return this.poliza;
            });


  }

  mostrarPoliza(){
    this._poliza.getPolizaPorVehiculo( this.idx ).subscribe((pol:any) =>{
      //console.log("Soy tu poliza")
      //console.log(this.poliza)
      this.polizaMod=pol;
      console.log(this.polizaMod)
      return this.polizaMod;
    });
  }


  // verPolizaVehiculo(){
  //   this._poliza.getPolizaPorVehiculo( this.idx ).subscribe((p:any) => {
  //     this.polvehiculo=p;
  //     console.log("soy una poliza" +(this.polvehiculo));
  //     return this.polvehiculo;
  //   });
  // }


  recuperarVehiculo(){
    this._vehiculo.getVehiculo( this.idx ).subscribe((vehic:any) =>{
      this.vehiculo=vehic;
      //console.log(this.vehiculo);
      return this.vehiculo;
    });
  }

  cambiaTitulo(){
    let idexiste = this.activatedRoute.snapshot.params['id'];

    if(idexiste){
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }


  ngOnInit(): void {
  }

}
