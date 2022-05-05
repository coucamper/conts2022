import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmpleadosService } from '../services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoModel } from '../models/empleado';
import { EmpleadoComponent } from './empleado/empleado.component';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import { MatTable } from '@angular/material/table';
import { CategoriasService } from '../services/categorias.service';
import { EmpleadocategoriaService } from '../services/empleadocategoria.service';
import { NgxPaginationModule } from 'ngx-pagination';



export class Empleado{

  idempleado: number;
  nomemp: string;
  ape1emp:string;
  ape2emp:string;
  nif: string;
  nss: string;
  antiguedad: string;
  telecontacto: string;
  emailemp: string;
  fechanac: string;
  iban: string;
  estudios: string;
  numhijos: string;
  domicilio: string;
  tipocontrato: string;


 }



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
  empleadosCategorias:any;


  div1:boolean=false;
  zonas:any[] = [];
  page:any;
  paginador:any;
  items: any[] = this.empleados;
  pageOfItems: Array<any>;
  totalElements: number;


  constructor( private router: Router,
               private _empleados: EmpleadosService,
               private _categorias: CategoriasService,
               private _empleadocategoria: EmpleadocategoriaService,
               private activatedRoute: ActivatedRoute,
               private paginator:NgxPaginationModule   ) {
                this.idx = this.activatedRoute.snapshot.params['id'];
                this._categorias.getCategorias().subscribe( datos => {
                  console.log(datos);
                  this.cat=datos;
                  //this.empleadoscategorias=this.cat;
                  console.log("Categorias traidas: "+this.cat);
                });

                this._empleadocategoria.getEmpleadosCategorias().subscribe(respuesta =>{
                  this.empleadoscategorias=respuesta;
                });

                // this._empleadocategoria.getEmpleadosCategoriasPage(this.page).subscribe(res => {
                //   this.empleadoscategorias=res;
                // });

                // this._empleadocategoria.getEmpleadosCategorias().subscribe(e=>{

                // });

                this._empleadocategoria.getCategoriaEmpleado(2).subscribe(cat=>{
                  this.empleadocategoria=[cat];
                  for(let e in this.empleadocategoria){
                    console.log("Hola perri "+this.empleadocategoria[e].categoria.denom);
                  }
                  //console.log("hola"+this.empleadocategoria);
                })

                // this._empleados.getEmpleados().subscribe(empleados =>{

                //   this.empleados = empleados;
                //   console.log("Empleados "+this.empleados)
                //   this.empleadosF = this.empleados;
                // });

                this._empleados.getEmpleados().subscribe( data => {
                  console.log(data);
                  this.empleados = data;
                  this.empleadosF = this.empleados;
                  this.categoriasF = this.empleados;
                  console.log("Empleados traidos:"+this.empleadosF);
                  console.log("Categorias traidas: "+this.categoriasF);
                });

                //this.empleadosF = [...this.empleados];
                //this.categoriasF = [...this.empleados];

                this.crearForm();
                this.div1Function();
                this.removeFilter();
                this.getEmpleados();

  }

  getEmpleados(){
    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe(params =>{
    this.page = this.activatedRoute.snapshot.paramMap.get('page');
     if(!this.page){
       this.page = 0;
     }
   });
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



 removeFilter(){
   this.seleccionado = "";
   this.empleadosF = [...this.empleados];
   this.selected = "";
   this.categoriasF = [...this.empleados];
 }



  div1Function(){
    this.div1 = !this.div1;
  }


  ngOnInit():void {
    //this.empleadosF = [...this.empleados];

    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._empleados
        .getEmpleadosPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Empleado[]).forEach((empleado) =>
              console.log(empleado.nomemp)
            );
          })
        )
        .subscribe((response) => {
          this.empleados = response.content as Empleado[];
          this.paginador = response;
          console.log(this.empleadosCategorias);
        });
    });
  }


}
