import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmpleadosService } from '../services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoModel } from '../models/empleado';
import { EmpleadoComponent } from './empleado/empleado.component';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import { MatTable } from '@angular/material/table';
import { CategoriasService } from '../services/categorias.service';
import { EmpleadocategoriaService } from '../services/empleadocategoria.service';





@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any[] = [];
  empleado:any[] = [];
  emp:EmpleadoModel;
  idempleado: any;
  idx:number;

  empleadoSeleccionado: EmpleadoModel;


  /* VARIABLES DE BARRA-HERRAMIENTAS */

  empleadosFormFilter:FormGroup;
  empleadosF:any[] = [];
  nomEmp:any[] = [];

  @Output() categoria:any[] = [];

  cat:any;

  seleccionado:string;
  selected:string;

  pgIndex = 2;

  catE:any[] = [];
  categorias:any[] = [];
  categoriasF:any[] = [];

  empleadocategoria:any[] = [];
  empleadoscategorias:any;


  div1:boolean=false;

  constructor( private router: Router,
               private _empleados: EmpleadosService,
               private _categorias: CategoriasService,
               private _empleadocategoria: EmpleadocategoriaService,
               private activatedRoute: ActivatedRoute  ) {

                this._categorias.getCategorias().subscribe( datos => {
                  console.log(datos);
                  this.cat=datos;
                  this.empleadoscategorias=this.cat;
                  console.log("Categorias traidas: "+this.cat);
                });

                this._empleadocategoria.getEmpleadosCategorias().subscribe(respuesta =>{
                  this.empleadoscategorias=respuesta;
                });

                // this._empleadocategoria.getEmpleadosCategorias().subscribe(e=>{

                // });

                this._empleadocategoria.getCategoriaEmpleado(2).subscribe(cat=>{
                  this.empleadocategoria=[cat];
                  for(let e in this.empleadocategoria){
                    console.log("Hola perri "+this.empleadocategoria[e].categoria.denom);
                  }
                  //console.log("hola"+this.empleadocategoria);
                })

                this._empleados.getEmpleados().subscribe(empleados =>{

                  this.empleados = empleados;
                  console.log("Empleados "+this.empleados)
                  this.empleadosF = this.empleados;
                });

                // this._empleados.getEmpleados().subscribe( data => {
                //   console.log(data);
                //   this.empleados = data;
                //   this.empleadosF = this.empleados;
                //   this.categoriasF = this.empleados;
                //   console.log("Empleados traidos:"+this.empleadosF);
                //   console.log("Categorias traidas: "+this.categoriasF);
                // });

                //this.empleadosF = [...this.empleados];
                //this.categoriasF = [...this.empleados];

                this.crearForm();
                this.div1Function();
                this.onSelect();
                this.onSelectCat();
                this.removeFilter();

  }


  verEmpleado( idx:number ){
    return this._empleados.getEmpleado( idx );
  }

  borrarEmpleado( idx:number ){
    return this._empleados.deleteEmpleado( idx ).subscribe( (data:any) => {
      console.log(data);
      this.empleado = data;
    })
  }


  crearForm( ){

    this.empleadosFormFilter = new FormGroup({
      nomemp: new FormControl(),
      categoria: new FormControl(),
      finicial: new FormControl(),
      ffinal: new FormControl()
    });
 }

 onSelect(){
  this.empleadosF = this.empleados.filter( e => e.nomemp == this.seleccionado || e.categoria == this.selected );
 }

 onSelectCat(){
  this.categoriasF = this.empleados.filter( c => c.categoria == this.selected );
  console.log(this.categoriasF);
 }

 removeFilter(){
   this.seleccionado = "";
   this.empleadosF = [...this.empleados];
   this.selected = "";
   this.categoriasF = [...this.empleados];
 }



  div1Function(){
    this.div1 = !this.div1;
  }


  ngOnInit(){
    this.empleadosF = [...this.empleados];
  }


}
