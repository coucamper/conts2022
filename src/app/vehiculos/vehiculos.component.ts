import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PolizaModule } from '../models/polizaModel';
import { VehiculoModel } from '../models/vehiculoModel';
import { MantenimientosService } from '../services/mantenimientos.service';
import { PolizasService } from '../services/polizas.service';
import { VehiculosService } from '../services/vehiculos.service';


export class Vehiculo {

  idvehiculo: number;
  matricula: string;
  marca: string;
  modelo: string;
  fechacompra: string;

}

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

  paginador:any;
  items: any[] = this.vehiculos;
  pageOfItems: Array<any>;
  totalElements: number;
  page:any;


  poliza:PolizaModule = new PolizaModule();

  constructor( private route: Router,
               private activatedRoute: ActivatedRoute,
               private _vehiculos: VehiculosService,
               private _mantenimientos: MantenimientosService,
               private _polizas: PolizasService) {
                this._vehiculos.getVehiculos().subscribe( (datos:any) => {

                  //this.vehiculos = datos;
                  this.vehiculosF = this.vehiculos;

                });

                this.idx = this.activatedRoute.snapshot.params['id'];

                this._polizas.getPolizaPorVehiculo( this.idx ).subscribe((poliza:any) =>{
                  this.poliza = poliza;
                  console.log(this.poliza)
                  return this.poliza;
                });


                //this.vehiculosF = this.vehiculos;

                this.crearForm();
                this.div1Function();
                this.onSelect();
                this.verVehiculo( this.idx );
                this.removeFilter();
                this.getVehiculos();

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


  getVehiculos(){
      // Esta parte de codigo es la que genera la ruta
      this.activatedRoute.paramMap.subscribe(params =>{
      this.page = this.activatedRoute.snapshot.paramMap.get('page');
       if(!this.page){
         this.page = 0;
       }
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
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._vehiculos
        .getVehiculosPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Vehiculo[]).forEach((vehiculo) =>
              console.log(vehiculo.matricula)
            );
          })
        )
        .subscribe((response) => {
          this.vehiculos = response.content as Vehiculo[];
          this.vehiculosF = this.vehiculos;
          this.paginador = response;
          console.log(this.vehiculos);
        });
    });

  }

}
