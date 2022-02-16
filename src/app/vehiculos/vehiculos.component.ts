import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoModel } from '../models/vehiculoModel';
import { MantenimientosService } from '../services/mantenimientos.service';
import { VehiculosService } from '../services/vehiculos.service';




@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos:any[] = [];
  vehiculosF:any[] = [];
  vehiculo:VehiculoModel;
  idx:number;

  vehiculosFormFilter:FormGroup;
  result:any[]=[];
  seleccionado:string;
  selected:string;
  mantenVehiculo:any [] = [];


  div1:boolean=false;

  constructor( private route: Router,
               private activatedRoute: ActivatedRoute,
               private _vehiculos: VehiculosService,
               private _mantenimientos: MantenimientosService ) {
                this._vehiculos.getVehiculos().subscribe( (datos:any) => {

                  this.vehiculos = datos;
                  this.vehiculosF = this.vehiculos;

                });

                this.idx = this.activatedRoute.snapshot.params['id'];



                //this.vehiculosF = this.vehiculos;

                this.crearForm();
                this.div1Function();
                this.onSelect();
                this.verVehiculo( this.idx );
                this.removeFilter();


               }



  verVehiculo( idx:number ){
    return this._vehiculos.getVehiculo( this.idx );
  }

  div1Function(){
    this.div1 = !this.div1;
  }


  refresh(): void {
    window.location.reload();
  }


  crearForm( ){

    this.vehiculosFormFilter = new FormGroup({
      matricula: new FormControl(),
      aseguradora: new FormControl(),
      finicial: new FormControl(),
      ffinal: new FormControl()
    });
 }

  onSelect(){
    this.vehiculosF = this.vehiculos.filter( v => v.matricula == this.seleccionado || v.aseguradora == this.selected );
  }

  verMantenVehiculo( idx:number ){
    this._mantenimientos.getMantenimiento( this.idx ).subscribe((mantenimiento:any) => {
      this.mantenVehiculo=mantenimiento;
      console.log(this.idx)
      console.log(this.mantenVehiculo)
    });

  }



  removeFilter(){
    this.seleccionado = "";
    this.vehiculosF = [...this.vehiculos];
    this.selected = "";
    this.vehiculosF = [...this.vehiculos];
  }

  //  onSelectCat(){
  //   this.categoriasF = this.empleados.filter( c => c.categoria == this.selected );
  //   console.log(this.categoriasF);
  //  }

  ngOnInit(): void {
   // this.vehiculosF = [...this.vehiculos];

  }

}
