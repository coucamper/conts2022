import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoModule } from '../models/mantenimientoModel';
import { MantenimientosService } from '../services/mantenimientos.service';
import { TipomantenimientoService } from '../services/tipomantenimiento.service';
import { VehiculosService } from '../services/vehiculos.service';

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

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _mantenimientos: MantenimientosService,
              private _vehiculo: VehiculosService,
              private _tiposMant: TipomantenimientoService ) {
              this.idx = this.activatedRoute.snapshot.params['id'];

              this._tiposMant.getTiposmantenimiento().subscribe((tipos:any) =>{
                this.tiposMante=tipos;
              });

              this.verMantenimientos();
              this.localizarVehiculo();
              this.cargarVehiculos();
              this.verMantenVehiculo();
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
  }

  refresh(): void {
    window.location.reload();
  }


}
