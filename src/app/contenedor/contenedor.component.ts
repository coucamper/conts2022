import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';


@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  res:any;
  idx:number;

  idruta:number;

  contenedor:ContenedoresRutasModel = new ContenedoresRutasModel();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _contenRutas: ContenedoresRutasService ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }


  asociarContendorARuta(){

    this._contenRutas.asociarContenedorARuta( this.idruta, this.idx, this.contenedor ).subscribe((c:any) => {
      this.res = c;
      console.log("C es: "+this.res);
    });

  }

  ngOnInit(): void {
  }

}
