import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenedorVOModule } from 'src/app/models/contenedor-vo/contenedorModel';
import { ContenedoresService } from 'src/app/services/contenedores.service';


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

  // modelo para salvar los datos de contenedor en la DB
  contenedor: ContenedorVOModule = new ContenedorVOModule();

  // modelo para traer los datos del contenedor
  conten: ContenedorVOModule;

  contenedores: any[] = [];
  //Booleano para comprobar si el id de empleado existe en la DB
  idExiste: boolean = false;

  constructor(
    private router: Router,
    private fB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _contenedores: ContenedoresService
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];

    this.crearFormulario();
    this.cambiaTitulo();

    //this.cargarDatos( this.ruta );
    // this.guardarRuta( this.formRuta );

    this._contenedores.getContenedor(this.idx).subscribe((cont: any) => {
      this.conten = cont;
      console.log(this.conten);
      return this.conten;
    });
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }

  // get idrutaNoValida(){
  //   return this.formContenedor.get('idruta')?.invalid && this.formContenedor.get('idruta')?.touched;
  // }

  // get denomNoValida(){
  //   return this.formContenedor.get('denom')?.invalid && this.formContenedor.get('denom')?.touched;
  // }

  // get fechainiNoValida(){
  //   return this.formContenedor.get('fechaini')?.invalid && this.formContenedor.get('fechaini')?.touched;
  // }

  // get periodoNoValida(){
  //   return this.formContenedor.get('periodo')?.invalid && this.formContenedor.get('periodo')?.touched;
  // }

  // get rutaNoValida(){
  //   return this.formContenedor.get('ruta')?.invalid && this.formContenedor.get('ruta')?.touched;
  // }

  // get zonaNoValida(){
  //   return this.formContenedor.get('zona')?.invalid && this.formContenedor.get('zona')?.touched;
  // }

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
      denom: new FormControl(),
      barrio: new FormControl(),
      localidad: new FormControl(),
      ubicacion: new FormControl(),
      coordenadas: new FormControl(),
      fechaimplantacion: new FormControl(),
      mapa: new FormControl(),
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

  guardarContenedor() {
    this.validarForm(this.formContenedor.value);

    if (this.conten.idcontenedor) {
      this.contenedor = this.formContenedor.value;
      return this._contenedores
        .putContenedor(this.idx, this.contenedor)
        .subscribe();
    } else {
      // Como el id de la ruta no existe, le paso un objeto ruta
      this._contenedores.postContenedor(this.contenedor).subscribe();

      return this.contenedor;
    }
  }


  refresh(): void {
    window.location.reload();
  }


}
