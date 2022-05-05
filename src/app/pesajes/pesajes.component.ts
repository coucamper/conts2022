import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PesajeModel } from '../models/pesajeModel';
import { VehiculosPesajesModel } from '../models/vehiculosPesajesModel';
import { PesajesService } from '../services/pesajes.service';
import { VehiculosService } from '../services/vehiculos.service';
import { VehiculosPesajesService } from '../services/vehiculospesajes.service';


export class Pesaje {

  idpesaje: number;
  fechapesaje: number;
  pesaje: number;
  vehiculo: string;
  idoperario: number;
  idruta: number;

}

export class VehiculosPesajes {

  idvehipesaje: number;
  idpesaje: number;
  idvehiculo:number;

}


@Component({
  selector: 'app-pesajes',
  templateUrl: './pesajes.component.html',
  styleUrls: ['./pesajes.component.css']
})
export class PesajesComponent implements OnInit {

  pesajes:any[] = [];
  vehiculosPesajes:any[] = [];
  vehiculos:any[] = [];
  pesaje:PesajeModel = new PesajeModel();
  vehiculopesaje:VehiculosPesajesModel = new VehiculosPesajesModel();

  idx:number;
  page:any;
  paginador:any;
  items: any[] = this.pesajes;
  pageOfItems: Array<any>;
  totalElements: number;

  constructor( private router: Router, private _pesajes: PesajesService , private _vehiculos: VehiculosService, private _vehipesa: VehiculosPesajesService,
               private activatedRoute: ActivatedRoute) {

               this.idx = activatedRoute.snapshot.params['id'];
               //this.verVehiculosPesajes();
               this.verVehiculoPesaje(this.idx);
               this.getPesajes();
  }


  getPesajes(){
    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe(params =>{
      this.page = this.activatedRoute.snapshot.paramMap.get('page');
       if(!this.page){
         this.page = 0;
       }
     });
}

  verVehiculosPesajes(){
    return this._vehipesa.getvehiculosPesajes().subscribe( (vhp:any) => {
      this.vehiculosPesajes = vhp;
      //console.log(this.vehiculosPesajes );
      return this.vehiculosPesajes;
    });
  }

  verVehiculoPesaje( idx:number ){
    this._vehipesa.getVehiculoPesaje( this.idx ).subscribe( (vehi:any) => {
      this.vehiculopesaje = vehi;
      return this.vehiculopesaje;
    });
  }

  eliminarPesaje( idpesaje:number ){
    this._pesajes.deletePesaje( idpesaje ).subscribe();
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._pesajes
        .getPesajesPaginados(this.page)
        .pipe(
          tap((response) => {
            (response.content as Pesaje[]).forEach((pesaje) =>
              console.log(pesaje.idpesaje)
            );
          })
        )
        .subscribe((response) => {
          this.pesajes = response.content as Pesaje[];
          this.paginador = response;
          //console.log(this.pesajes);
        });
    });
  }


  refresh(): void {
    window.location.reload();
  }


}
