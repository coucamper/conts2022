import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaseModel } from 'src/app/models/claseModel';
import { rutaModel } from 'src/app/models/rutaModel';
import { ClaseService } from 'src/app/services/clase.service';

@Component({
  selector: 'app-salvarclase',
  templateUrl: './salvarclase.component.html',
  styleUrls: ['./salvarclase.component.css'],
})
export class SalvarclaseComponent implements OnInit {
  formClase: FormGroup;
  idExiste: boolean = false;
  clase = new ClaseModel();

  idx: number;

  constructor(
    private router: Router,
    private fB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _clases: ClaseService
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    //this.idx = this.activatedRoute.snapshot.params['id'];
  }
  get denomNoValida() {
    return (
      this.formClase.get('denom')?.invalid && this.formClase.get('denom')?.touched
    );
  }

  get fechainiNoValida() {
    return (
      this.formClase.get('fechaini')?.invalid &&
      this.formClase.get('fechaini')?.touched
    );
  }

  get periodoNoValida() {
    return (
      this.formClase.get('periodo')?.invalid &&
      this.formClase.get('periodo')?.touched
    );
  }

  get rutaNoValida() {
    return (
      this.formClase.get('ruta')?.invalid && this.formClase.get('ruta')?.touched
    );
  }

  cambiaTitulo() {
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  // obtenerClase(idx: number) {
  //   return this._clases.getClases().subscribe( (data:any) => {
  //     this
  //   });
  // }

  crearFormulario() {
    this.formClase = this.fB.group({
      denom: ['', [Validators.required, Validators.minLength(20)]],
      fechaini: ['', [Validators.required]],
      periodo: ['', [Validators.required, Validators.minLength(6)]],
      ruta: ['', Validators.required],
    });
  }

  guardar() {
    if (this.formClase.invalid) {
      return Object.values(this.formClase.controls).forEach((control) => {
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
}
