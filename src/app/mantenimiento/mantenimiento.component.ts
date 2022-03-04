import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoModule } from '../models/mantenimientoModel';
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
  mantenimiento = new MantenimientoModule();
  mantenVehiculo:any [] = [];
  manten:any[] = [];
  vehiculo:any;
  mants:any [] = [];
  idvehiculo:any;
  idExiste:boolean = false;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _mantenimientos: MantenimientosService,
              private _vehiculo: VehiculosService) {
              this.idx = this.activatedRoute.snapshot.params['id'];


              this._mantenimientos.getMantenimiento( this.idx ).subscribe( (dato:any) =>{
                this.mantenimientos = dato;
              });



              this.mantenimientosVehiculo();
              console.log(this.manten)
              this.localizarVehiculo();
              this.traerMantenimientos();
  }


  localizarVehiculo(){
    this._vehiculo.getVehiculo(this.idx).subscribe((vehic:any) => {
      this.vehiculo=vehic;
     console.log(this.vehiculo)
    });
  }

  traerMantenimientos(){
    this._mantenimientos.getMantenimientos().subscribe((mans:any) => {
      this.mantenimientos=mans;
      this.idvehiculo=this.mantenimientos[1].idvehiculo.idvehiculo;
      //console.log("El id es: "+this.mantenimientos[1].idvehiculo.idvehiculo)
    });
  }


  mantenimientosVehiculo(){
    this._mantenimientos.getMantenimiento( this.idx ).subscribe((mantenimiento:any) => {
      this.mantenVehiculo=mantenimiento;
      console.log("mantenimiento: "+this.mantenVehiculo)
      for(let i in this.mantenVehiculo){
        console.log(this.mantenVehiculo[i]);
      }

      if( this.mantenVehiculo.length < 0 ){
        this.idExiste = false;
      }else{
        this.idExiste = true;
      }
    });
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }



}
