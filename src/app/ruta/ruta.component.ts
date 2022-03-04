import { Component, OnInit, Output } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { rutaModel } from '../models/rutaModel';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { RutasService } from '../services/rutas.service';






@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  rutas:any[] = [];
  idx:number;
  ruta = new rutaModel();
  r:ContenedoresRutasModel = new ContenedoresRutasModel();
  idExiste:boolean = false;
  formRuta:FormGroup;

  @Output() ContenedoresRuta:any[] = [];
  contenedoresRuta:any[] = [];

  rt:string;


  constructor( private router: Router, private _rutas: RutasService, private activatedRoute: ActivatedRoute, private _contenRutas: ContenedoresRutasService) {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this._rutas.getRutas().subscribe( (data:any) => {
      //console.log(data);
      this.cambiaTitulo();


    });

    this.rt = `/ruta/${this.idx}`;


    this._contenRutas.getContenedoresRuta().subscribe( (dato:any) =>{
      this.ContenedoresRuta = dato;
      this.ContenedoresRuta.forEach( contenedor =>{

        if(contenedor.ruta.idruta == this.idx ){
          this.contenedoresRuta.push(contenedor);
          console.log(this.contenedoresRuta);

        }
      });
    });




    this.verRuta( this.idx );
    this.filtrarContenedores(this.idx);
  }

  cambiaTitulo(){
    let idexiste = this.activatedRoute.snapshot.params['id'];

    if(idexiste){
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  verRuta( idx:number ) {
    this._rutas.getRuta( idx ).subscribe( (res:any) => {
      this.ruta = res;
      //console.log(this.ruta);
      return this.ruta;
    });
  }

  filtrarContenedores( idx:number ){
   this._contenRutas.getContenedoresRuta().subscribe( (cr:any) => {
    console.log(cr);

   });
  }


  guardar( form: NgForm ){

    if( this.formRuta.invalid ){

      return Object.values( this.formRuta.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      })

    }


     if( this.ruta.idruta){
       this._rutas.updateRuta( this.ruta.idruta, this.ruta ).subscribe( (data: any) => {
         console.log( data );
       });
     } else {
       this._rutas.saveRuta( this.ruta ).subscribe( (res:any) => {
         console.log(res);
       });
     }

  }




  ngOnInit():void {
    this.idx = this.activatedRoute.snapshot.params['id'];

  }



}
