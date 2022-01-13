import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';
import { rutaModel } from 'src/app/models/rutaModel';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ContenedoresRutasService } from 'src/app/services/contenedoresrutas.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { RutasService } from 'src/app/services/rutas.service';



@Component({
  selector: 'app-rutasjornada',
  templateUrl: './rutasjornada.component.html',
  styleUrls: ['./rutasjornada.component.css']
})
export class RutasjornadaComponent implements OnInit {

  conductor:EmpleadoModel;
  rutas:any[] = [];
  @Output() ruta:rutaModel;

  @Output() contenedores:any[] = [];

  idx:number = 1;
  idruta:number = 2;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _empleado: EmpleadosService, private _rutas: RutasService, private _contenedores: ContenedoresRutasService) {
    this._empleado.getEmpleado( this.idx ).subscribe( (e:any) =>{
      console.log( e );
      this.conductor = e;
    });

    this._rutas.getRuta( this.idruta ).subscribe( (r:any) => {
      console.log( "ruta" + r );
      this.ruta = r;
    });

     this._contenedores.getContenedoresRuta().subscribe( (contens:any) => {
      //console.log( "bamba " + contens);
       this.contenedores = contens;
     });

    // this._contenedores.getContenedorRuta( this.idruta ).subscribe( ( cn:any) =>{
    //   this.contenedores = cn;
    // });

  }

  abrirModal(){

  }

  ngOnInit(): void {
  }

}
