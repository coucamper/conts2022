import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';
import { VehiculosPesajesModel } from '../models/vehiculosPesajesModel';
import { PesajesService } from '../services/pesajes.service';
import { VehiculosService } from '../services/vehiculos.service';
import { VehiculosPesajesService } from '../services/vehiculospesajes.service';


@Component({
  selector: 'app-pesajes',
  templateUrl: './pesajes.component.html',
  styleUrls: ['./pesajes.component.css']
})
export class PesajesComponent implements OnInit {

  pesajes:any[] = [];
  vehiculosPesajes:any[] = [];
  vehiculos:any[] = [];

  llenados = [
    { valor: "1"},
    { valor: "2"},
    { valor: "3"},
    { valor: "4"}
  ]

  pesaje:PesajeModel = new PesajeModel();

  vehiculopesaje:VehiculosPesajesModel = new VehiculosPesajesModel();

  idx:number;

  constructor( private router: Router, private _pesajes: PesajesService , private _vehiculos: VehiculosService, private _vehipesa: VehiculosPesajesService,
               private activatedRoute: ActivatedRoute) {
    this.idx = activatedRoute.snapshot.params['id'];


    // this._pesajes.getPesajes().subscribe( data => {
    //   //console.log(data);
    //   this.pesajes = data;
    // });

    // this._vehiculos.getVehiculos().subscribe( (vehi:any) => {
    //   this.vehiculos = vehi;
    // });

    this.verVehiculosPesajes();
   // this.verVehiculoPesaje( this.idx );

  }


  // verPesaje( idx:number ){
  //   this._pesajes.getPesaje( this.idx ).subscribe( (pes:any ) => {
  //       this.pesaje = pes;
  //       return this.pesaje;
  //   });
  // }


  verVehiculosPesajes(){
    return this._vehipesa.getvehiculosPesajes().subscribe( (vhp:any) => {
      this.vehiculosPesajes = vhp;
      console.log( this.vehiculosPesajes );
      return this.vehiculosPesajes;
    });
  }

  verVehiculoPesaje( idx:number ){
    this._vehipesa.getVehiculoPesaje( this.idx ).subscribe( (vehi:any) => {
      this.vehiculopesaje = vehi;
      return this.vehiculopesaje;
    });
  }


  ngOnInit(): void {
  }





}
