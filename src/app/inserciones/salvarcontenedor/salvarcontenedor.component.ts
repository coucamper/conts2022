import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { ComarcaService } from 'src/app/services/comarca.service';
import { ConcejosComarcasService } from 'src/app/services/concejoscomarcas.service';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ZonasService } from 'src/app/services/zonas.service';



@Component({
  selector: 'app-salvarcontenedor',
  templateUrl: './salvarcontenedor.component.html',
  styleUrls: ['./salvarcontenedor.component.css'],
})
export class SalvarcontenedorComponent implements OnInit {
  // Variable de tipo FormGroup para generar el formulario de inserción
  formContenedor: FormGroup;

  // Variable para guardar el id de navegación
  idx: number;
  idExiste: boolean = false;
  idcomarca:number;
  localidades:any[] = [];
  zonas:any[] = [];
  control:any;
  // modelo para salvar los datos de contenedor en la DB
  contenedor: ContenedorVOModule = new ContenedorVOModule(); // El contenedor creado para persistirlo
  conten: ContenedorVOModule; // El contenedor devuelto

  contenedores: any[] = [];
  //Booleano para comprobar si el id de empleado existe en la DB



  constructor(
    private router: Router,
    private fB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _contenedores: ContenedoresService,
    private _localidades: ConcejosComarcasService,
    private _comarcas: ComarcaService
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];

    this.crearFormulario();
    this.cambiaTitulo();
    this.traerZonas();
    this.traerLocalidadesZonas(this.idcomarca);

    //this.cargarDatos( this.ruta );
    // this.guardarRuta( this.formRuta );

    this._contenedores.getContenedor(this.idx).subscribe((cont: any) => {
      this.conten = cont;
      console.log(this.conten);
      return this.conten;
    });
  }



  traerLocalidadesZonas( idcom:number ){
    this._localidades.getConcejosPorComarca( this.idcomarca ).subscribe((concejos:any) =>{
      this.localidades=concejos;
      console.log(this.localidades);
    });
  }


  traerZonas(){
    this._comarcas.getComarcas().subscribe((coms:any) =>{
      this.zonas=coms;
      console.log(this.zonas);
    });
  }


  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }

  get zonaNoValida(){
    return this.formContenedor.get('zona')?.invalid && this.formContenedor.get('zona')?.touched;
  }

  get localidadNoValida(){
    return this.formContenedor.get('localidad')?.invalid && this.formContenedor.get('localidad')?.touched;
  }


  get denomNoValida(){
    return this.formContenedor.get('denom')?.invalid && this.formContenedor.get('denom')?.touched;
  }

  get barrioNoValida(){
    return this.formContenedor.get('barrio')?.invalid && this.formContenedor.get('barrio')?.touched;
  }

  get ubicacionNoValida(){
    return this.formContenedor.get('ubicacion')?.invalid && this.formContenedor.get('ubicacion')?.touched;
  }

  get coordNoValida(){
    return this.formContenedor.get('coordenadas')?.invalid && this.formContenedor.get('coordenadas')?.touched;
  }

  get mapaNoValida(){
    return this.formContenedor.get('mapa')?.invalid && this.formContenedor.get('mapa')?.touched;
  }

  get fechaNoValida(){
    return this.formContenedor.get('fechaimplantacion')?.invalid && this.formContenedor.get('fechaimplantacion')?.touched;
  }



  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  crearFormulario() {
    this.formContenedor = new FormGroup({
      idcontenedor: new FormControl(),
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

  validarForm(form: NgForm) {
    if (this.formContenedor.invalid) {
      return Object.values(this.formContenedor.controls).forEach((control) => {
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


  onChange(newValue:any) {

    this.control = this.formContenedor.controls['denom'].value;
    this.control = newValue;  // don't forget to update the model here
    this.idcomarca=Number(newValue.charAt(0));
    this.traerLocalidadesZonas( this.idcomarca );
    console.log(this.idcomarca);
}


  guardarContenedor() {
    this.validarForm(this.formContenedor.value);

    if (this.contenedor.idcontenedor) {
      this.conten = this.formContenedor.value;
      return this._contenedores
        .putContenedor(this.idx, this.contenedor)
        .subscribe();
    } else {
      // Como el id de la ruta no existe, le paso un objeto ruta
      this._contenedores.postContenedor(this.contenedor).subscribe();

      return this.conten;
    }
  }


  refresh(): void {
    window.location.reload();
  }


}
