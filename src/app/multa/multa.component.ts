
import { Component, OnInit, Output } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MultaModule } from '../models/multaModel';
import { MultasService } from '../services/multas.service';
import { VehiculosService } from '../services/vehiculos.service';


@Component({
  selector: 'app-multa',
  templateUrl: './multa.component.html',
  styleUrls: ['./multa.component.css']
})
export class MultaComponent implements OnInit {
  idx:number;
  multaMod = new MultaModule();
  idExiste:boolean = false;
  formMulta:FormGroup;
  multa:any[] = [];
  multas:any[] = [];
  multasvehiculo:any[] = [];
  vehiculo:any;

  constructor(private router: Router,
              private _multa: MultasService,
              private _vehiculo: VehiculosService,
              private activatedRoute: ActivatedRoute ) {
                this.idx = this.activatedRoute.snapshot.params['id'];
                this.mostrarMulta();
                this.cambiaTitulo();
                this.recuperarVehiculo();
                // this.verPolizaVehiculo()


                this._multa.getMultasPorVehiculo( this.idx ).subscribe((multa:any) =>{
                  this.multasvehiculo=multa;
                  this.multas=multa;
                  console.log(this.multasvehiculo);
                  return this.multasvehiculo;
                });

            // this._poliza.getPoliza( this.idx ).subscribe( (dato:any) =>{
            //   this.poliza = dato;
            //   this.poliza.forEach( poliza =>{

            //     if(poliza.vehiculo.idvehiculo == this.idx ){
            //       this.polizas.push(poliza);
            //       //console.log(this.polizas);
            //     }
            //   });
            // });


  }

  mostrarMulta(){
    this._multa.getMulta( this.idx ).subscribe((multa:any) => {
      this.multa=multa;
      //console.log(this.multa);
    });
  }

  // mostrarPoliza(){
  //   this._poliza.getPoliza( this.idx ).subscribe((pol:any) =>{
  //     //console.log("Soy tu poliza")
  //     //console.log(this.poliza)
  //     this.polizaMod=pol;
  //     return this.poliza;
  //   });
  // }

  verMultasPorVehiculo(){
    this._multa.getMultasPorVehiculo( this.idx ).subscribe((multas:any) => {
      this.multas=multas;
      //console.log(this.multas)
    });
  }

  // verPolizaVehiculo(){
  //   this._poliza.getPolizaPorVehiculo( this.idx ).subscribe((p:any) => {
  //     this.polvehiculo=p;
  //     console.log("soy una poliza" +(this.polvehiculo));
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
