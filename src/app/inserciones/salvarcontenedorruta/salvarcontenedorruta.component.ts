import { Component, Input, OnInit, Output } from '@angular/core';
import { ContenedorComponent } from 'src/app/contenedor/contenedor.component';
import { NavegacionComponent } from 'src/app/shared/navegacion/navegacion.component';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { SalvarcontendorService } from 'src/app/services/inserciones/salvarcontendor.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';
import { filter } from 'rxjs/operators';
import { rutaModel } from 'src/app/models/rutaModel';
import { ContenedoresRutasService } from 'src/app/services/contenedoresrutas.service';





@Component({
  selector: 'app-salvarcontenedorruta',
  templateUrl: './salvarcontenedorruta.component.html',
  styleUrls: ['./salvarcontenedorruta.component.css']
})
export class SalvarcontenedorrutaComponent implements OnInit {

  Contenedores:any[] = [];
  form: FormGroup;
  @Input() rutaAnterior:string;
  idx:number;

  rutas:any[] = [];
  ruta:rutaModel;
  idRuta:any;
  urlAnterior:string;

  contenedor:ContenedorVOModule = new ContenedorVOModule();


  constructor( private router: Router,
               private fB: FormBuilder,
               private _contenedores: ContenedoresService,
               private _contenrutas: ContenedoresRutasService,
               private _rutas:RutasService,
               private activatedRoute: ActivatedRoute ) {
                this.idRuta = this.activatedRoute.snapshot.params['id'];

                // let change = router.events.pipe( filter ( event => event instanceof NavigationEnd )).subscribe();

                 this.crearFormulario();

                 this._rutas.getRuta(this.idRuta).subscribe( (dato:any) => {
                    this.ruta = dato;
                    console.log(this.ruta);
                 });

                 this._contenedores.getContenedores().subscribe( (datos:any) => {
                    this.Contenedores = datos;
                 });
                 console.log(this.Contenedores);
                 console.log("Ruta anterior "+ this.rutaAnterior);
               }

  ngOnInit(): void {}


  get denomNoValida(){
    return this.form.get('denom')?.invalid && this.form.get('denom')?.touched;
  }


  salvarContenedor( idRuta:number, contenedor:ContenedorVOModule ){
    return this._contenrutas.saveContenedorRuta( this.idRuta , contenedor).subscribe( (dato:any) => {
      console.log("Contendor: "+dato);
    });
  }



  crearFormulario(){

    this.form = this.fB.group({
      denom: ['', [Validators.required, Validators.minLength(10)] ]
    });

  }

  guardar(){

    if( this.form.invalid ){

      return Object.values( this.form.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      })

    }

     this.form.reset({
       nombre:"Sin nombre"
     })
     console.log( this.form );



  }

}
