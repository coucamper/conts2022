import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientosService } from '../services/mantenimientos.service';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  idx:number;
  mantenimientos:any[] = [];
  mantenVehiculo:any [] = [];
  manten:any[] = [];
  vehiculo:any;
  mants:any [] = [];

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _mantenimientos: MantenimientosService,
              private _vehiculo: VehiculosService) {
              this.idx = this.activatedRoute.snapshot.params['id'];
              this.mantenimientosVehiculo();
              console.log(this.manten)
              this.localizarVehiculo();
              this.traerMantenimientos();
  }


  localizarVehiculo(){
    this._vehiculo.getVehiculo(this.idx).subscribe((vehic:any) => {
      this.vehiculo=vehic;
      console.log("El vehiculo es: "+this.vehiculo.marca)
    });
  }

  traerMantenimientos(){
    this._mantenimientos.getMantenimientos().subscribe((mans:any) => {
      this.mantenimientos=mans;

      this.mantenVehiculo = this.mantenimientos.filter(m => this.mantenimientos.includes(this.idx));
      console.log(this.mantenVehiculo)
    });
  }


  mantenimientosVehiculo(){
    this._mantenimientos.getMantenimiento( this.idx ).subscribe((mantenimiento:any) => {
      this.mantenVehiculo=mantenimiento;
      console.log("mantenimiento: "+this.mantenVehiculo)
      for(let m of this.mantenVehiculo){
        console.log("m"+this.mantenVehiculo[m])
      }
    });
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }



}
