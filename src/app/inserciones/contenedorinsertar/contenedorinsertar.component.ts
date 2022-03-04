import { Component, OnInit } from '@angular/core';
import { ContenedorComponent } from 'src/app/contenedor/contenedor.component';
import { NavegacionComponent } from 'src/app/shared/navegacion/navegacion.component';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { SalvarcontendorService } from 'src/app/services/inserciones/salvarcontendor.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalidadesService } from 'src/app/services/localidades.service';
import { ConcejosComarcasService } from 'src/app/services/concejoscomarcas.service';
import { ComarcaService } from 'src/app/services/comarca.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contenedorinsertar',
  templateUrl: './contenedorinsertar.component.html',
  styleUrls: ['./contenedorinsertar.component.css']
})



export class ContenedorinsertarComponent implements OnInit {

  form: FormGroup;
  localidades:any[] = [];
  zonas:any[] = [];
  idcomarca:number;
  control:any;
  contenedor:ContenedorVOModule;
  url = 'http://localhost:8093/contenedor';

  constructor( private router: Router,
               private fB: FormBuilder,
               private _comarcas: ComarcaService,
               private _localidades: ConcejosComarcasService,
               private _contenedor: ContenedoresService,
               private http: HttpClient, ) {

                 this.crearFormulario();
                 this.traerZonas();
               }

  ngOnInit(): void {}

  get localidadNoValida(){
    return this.form.get('localidad')?.invalid && this.form.get('localidad')?.touched;
  }


  get denomNoValida(){
    return this.form.get('denom')?.invalid && this.form.get('denom')?.touched;
  }

  get barrioNoValida(){
    return this.form.get('barrio')?.invalid && this.form.get('barrio')?.touched;
  }

  get ubicacionNoValida(){
    return this.form.get('ubicacion')?.invalid && this.form.get('ubicacion')?.touched;
  }

  get coordNoValida(){
    return this.form.get('coordenadas')?.invalid && this.form.get('coordenadas')?.touched;
  }

  get mapaNoValida(){
    return this.form.get('mapa')?.invalid && this.form.get('mapa')?.touched;
  }



  traerZonas(){
    this._comarcas.getComarcas().subscribe((coms:any) =>{
      this.zonas=coms;
      //console.log(this.zonas);
    });
  }


  traerLocalidadesZonas( idcom:number ){
    this._localidades.getConcejosPorComarca( idcom ).subscribe((concejos:any) =>{
      this.localidades=concejos;
      console.log(this.localidades);
    });
  }


  onChange(newValue:any) {

    this.control = this.form.controls['denom'].value;
    this.control = newValue;  // don't forget to update the model here
    this.idcomarca=Number(newValue.charAt(0));
    this.traerLocalidadesZonas( this.idcomarca );
}

validarForm(form: FormGroup) {
  if (this.form.invalid) {
    return Object.values(this.form.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        Object.values(control.controls).forEach((control) =>
          control.markAsTouched()
        );
      } else {
        control.markAsTouched();
      }
    });
  }
}



  crearFormulario(){

    this.form = new FormGroup({
      zona: new FormControl(),
      localidad: new FormControl(),
      barrio: new FormControl(),
      denom: new FormControl(),
      ubicacion: new FormControl(),
      coordenadas: new FormControl(),
      mapa: new FormControl(),
      fechaimplantacion: new FormControl()
    });


  }



  creaContenedor(){
    this.contenedor.localidad=this.form.controls['localidad'].value;
    this.contenedor.zona=this.form.controls['zona'].value;
    this.contenedor.barrio=this.form.controls['barrio'].value;
    this.contenedor.denom=this.form.controls['denom'].value;
    this.contenedor.ubicacion=this.form.controls['ubicacion'].value;
    this.contenedor.coordenadas=this.form.controls['coordenadas'].value;
    this.contenedor.mapa=this.form.controls['mapa'].value;
    this.contenedor.fechaimplantacion=this.form.controls['fechaimplantacion'].value;

    this.http.post(`${ this.url }`, this.contenedor );
    console.log(this.contenedor.localidad);


    this._contenedor.postContenedor(this.contenedor).subscribe();

  }


  guardarContenedor() {
    this.validarForm(this.form.value);

    if (this.contenedor.idcontenedor) {
      this.contenedor = this.form.value;
      return this._contenedor.putContenedor( this.idcomarca, this.contenedor).subscribe();
      // return this._contenedor.putVehiculo(this.idx, this.Vehiculo).subscribe();
    } else {
      // Como el id de la ruta no existe, le paso un objeto ruta
      this._contenedor.postContenedor(this.contenedor).subscribe();
    }
    return this.contenedor;
  }


  guardar(){

    this.validarForm(this.form.value);
    //this.creaContenedor();

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



    //  if( this.ruta.idruta){
    //   this._rutas.updateRuta( this.ruta.idruta, this.ruta ).subscribe( (data: any) => {
    //     console.log( data );
    //   });
    // } else {
    //   this._rutas.saveRuta( this.ruta ).subscribe( (res:any) => {
    //     console.log(res);
    //   });
    // }


  }


}
