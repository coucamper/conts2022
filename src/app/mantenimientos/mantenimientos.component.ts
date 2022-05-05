import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { tap } from 'rxjs/operators';
import { MantenimientoModule } from '../models/mantenimientoModel';
import { MantenimientosService } from '../services/mantenimientos.service';
import { TipomantenimientoService } from '../services/tipomantenimiento.service';
import { VehiculosService } from '../services/vehiculos.service';

export class Mantenimiento {
  idmantenimiento:number;
  fechamantenimiento:string;
  mantenimiento:string;
  proveedor:string;
  coste:number;
  numfactura:string;
  tipomante:number;
  idvehiculo:number;
}


@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  idx:number;
  mantenimientos:any[] = [];
  mantenVehiculo:MantenimientoModule;
  vehiculo:MantenimientoModule;
  vehiculos:any[] = [];
  idvehiculo:any;
  misterio:any[] = [];
  tiposMante:any[] = [];
  mantens:any[] = [];

  page:any;
  paginador:any;
  items: any[] = this.mantenimientos;
  pageOfItems: Array<any>;
  totalElements: number;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _mantenimientos: MantenimientosService,
              private _vehiculo: VehiculosService,
              private _tiposMant: TipomantenimientoService,
              private paginator:NgxPaginationModule ) {
              this.idx = this.activatedRoute.snapshot.params['id'];

              this._tiposMant.getTiposmantenimiento().subscribe((tipos:any) =>{
                this.tiposMante=tipos;
              });

              this.verMantenimientos();
              this.localizarVehiculo();
              this.cargarVehiculos();
              //this.verMantenVehiculo();
              this.getMantenimientos();
  }


  getMantenimientos(){
    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe(params =>{
      this.page = this.activatedRoute.snapshot.paramMap.get('page');
       if(!this.page){
         this.page = 0;
       }
     });
}

  verMantenimientos(){
    this._mantenimientos.getMantenimientos().subscribe((mantenimientos:any) => {
      this.mantenimientos=mantenimientos;
      console.log(this.mantenimientos);

      for(let i=0; i<this.mantenimientos.length; i++){

        if(this.mantenimientos[i].tipomante == this.tiposMante[i].idtipomante){
          this.mantenimientos[i].tipomante.replaceAll(this.mantenimientos[i].tipomante, this.tiposMante[i].denommante);
        }

      }

      console.log(this.mantenimientos)
      return this.mantenimientos;
    });
  }


  verMantenVehiculo(){
    this._mantenimientos.getMantenimiento( this.idx ).subscribe((mantenimiento:any) => {
      this.mantenVehiculo=mantenimiento;
      console.log(this.mantenVehiculo);
      return this.mantenVehiculo;
    });
  }

  cargarVehiculos(){
    this._vehiculo.getVehiculos().subscribe((vs:any) =>{
      this.vehiculos = vs;
      console.log(this.vehiculos);

    });
  }

  localizarVehiculo(){
    this._vehiculo.getVehiculo( this.idx ).subscribe((vehic:any) =>{
      this.vehiculo=vehic;
      console.log(this.vehiculo)
    });
  }

  eliminarMantenimiento( id:number ){
    this._mantenimientos.deleteMantenimiento( id ).subscribe();
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._mantenimientos
        .getMantenimientosPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Mantenimiento[]).forEach((mantenimiento) =>
              console.log(mantenimiento.mantenimiento)
            );
          })
        )
        .subscribe((response) => {
          this.mantenimientos = response.content as Mantenimiento[];
          this.paginador = response;
          console.log(this.mantenimientos);
        });
    });

  }

  refresh(): void {
    window.location.reload();
  }


}
