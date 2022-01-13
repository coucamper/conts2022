import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vacacionEquipoModel } from '../models/vacacionequipoModel';
import { VacacionesequipoService } from '../services/vacacionesequipo.service';

@Component({
  selector: 'app-vacacionesequipo',
  templateUrl: './vacacionesequipo.component.html',
  styleUrls: ['./vacacionesequipo.component.css']
})
export class VacacionesequipoComponent implements OnInit {

  vacacionesGlobales:any;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _vacaciones: VacacionesequipoService, private vacacion: vacacionEquipoModel ) {

    this._vacaciones.getVacacionesequipo().subscribe( (vacaciones:any) =>{
      console.log(vacaciones);
      this.vacacionesGlobales = vacaciones;
    });

   }

  ngOnInit(): void {
  }

}
