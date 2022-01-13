import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';



@Component({
  selector: 'app-contenedoresrutas',
  templateUrl: './contenedoresrutas.component.html',
  styleUrls: ['./contenedoresrutas.component.css']
})
export class ContenedoresrutasComponent implements OnInit {

  ContenedoresRuta:any[] = [];
  ContenedorRuta:any[] = [];
  idRuta:number;

  idx:number;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _contenRutas: ContenedoresRutasService ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this._contenRutas.getContenedorRuta( this.idx ).subscribe( (datos:any) => {
      this.ContenedoresRuta = datos;
    });
   }

  ngOnInit(): void {
  }

}
