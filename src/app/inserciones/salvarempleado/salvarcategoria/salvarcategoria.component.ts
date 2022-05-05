import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, ReactiveFormsModule, NgModel } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmpleadoModel } from 'src/app/models/empleado';
import { Observable } from 'rxjs';
import { CategoriasService } from 'src/app/services/categorias.service';
import { EmpleadocategoriaService } from 'src/app/services/empleadocategoria.service';
import { TipocontratoService } from 'src/app/services/tipocontrato.service';
import { CategoriaModel } from 'src/app/models/categoriaModel';
import { EmpleadocategoriaModel } from 'src/app/models/empleadocategoria';
import { EmpleadoRecuperadoModel } from 'src/app/models/empleadoRecuperadoModel';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash';
import { ReversePipe } from 'ng-pipes';


export class ObjetoExportacion{

  empleado:EmpleadoModel;
  categoria:CategoriaModel;

}


@Component({
  selector: 'app-salvarcategoria',
  templateUrl: './salvarcategoria.component.html',
  template:`<p>Message from parent: {{nif}}</p>`,
  styleUrls: ['./salvarcategoria.component.css']
})
export class SalvarcategoriaComponent implements OnInit {

  formCategoria:FormGroup;
  tiposContrato:any[] = []; // Devuelve un array con los tipos de contrato existentes
  categorias:any[] = []; // Devuleve un array de categorías existentes

  inputCategoria:any;
  inputEmpleado:any;
  idcategoria:any;
  idempleado:any;

  resultados:any[] = [];

  @Input() nif:string;
  @Input() empleado: any;
  emp:EmpleadoModel = new EmpleadoModel();

  cat: CategoriaModel = new CategoriaModel();

  empleados:any[] = [];
  numempleados:any[] = [];
  empleadosConCategoria:any[] = [];
  num:number;
  reg:number;

  empleadoTemporal:EmpleadoModel = new EmpleadoModel();
  CategoriaTemporal:CategoriaModel = new CategoriaModel();

  nuevaCategoria:EmpleadocategoriaModel = new EmpleadocategoriaModel();

  constructor(private router: Router,
    private fB: FormBuilder,
    private _empleados: EmpleadosService,
    private _categorias: CategoriasService,
    private _empleadocategoria: EmpleadocategoriaService,
    private _tipocontrato: TipocontratoService,
    private activatedRoute: ActivatedRoute) {

      this._categorias.getCategorias().subscribe((categorias:any) => {
        this.categorias=categorias;
        console.log(this.categorias);
      });


      this._tipocontrato.getTiposContrato().subscribe((tipos:any) => {
        this.tiposContrato=tipos;
        console.log(this.tiposContrato);
      });

      this._empleados.getEmpleados().subscribe((empleados:any) => {
        this.empleados = empleados;
      });

      this.crearFormulario();
      //this.obtenerEmpleado();

    }

  ngOnInit(): void {
  }



  crearFormulario(){

    this.formCategoria = new FormGroup({
      empleado: new FormControl(),
      categoria: new FormControl()
    });

    console.log(this.formCategoria);

  }

  onChange(newValue:any) {
    this.inputCategoria = this.formCategoria.controls['categoria'].value;
    this.inputCategoria = newValue;  // don't forget to update the model here
    this.idcategoria=Number(newValue.substring(0,7)); // ESTO ESTA MAL NECESITAS CREAR UN METODO PARA OBTENER LA SUBCADENA HASTA EL GUION
    console.log(this.idcategoria);
    this.CategoriaTemporal = this.idcategoria;
    //return this.idcategoria;
  }

  onChangeEmpleado(valor:any){
    this.inputEmpleado = this.formCategoria.controls['empleado'].value;
    this.inputEmpleado = valor;
    this.idempleado=Number(valor);
    this.empleadoTemporal.idempleado = this.idempleado;
    console.log(this.idempleado);
  }


  ActualizarCategoriaEmpleado(){
    this.nuevaCategoria.empleado = this.idempleado;
    this.nuevaCategoria.categoria = this.idcategoria;
    this._empleadocategoria.putCategoriaEmpleado( this.nuevaCategoria.empleado, this.nuevaCategoria ).subscribe();
  }



  guardarCategoria(){
    this._empleadocategoria.addcategoriaEmpleado(this.idempleado, this.idcategoria).subscribe();
 }

}
