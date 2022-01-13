import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LlenadoModel } from '../models/llenadoModel';
import { LlenadosService } from '../services/llenados.service';


@Component({
  selector: 'app-llenados',
  templateUrl: './llenados.component.html',
  styleUrls: ['./llenados.component.css']
})
export class LlenadosComponent implements OnInit {

  idx:number;

  Llenados:any[] = [];



  constructor( private route: Router, private actRoute: ActivatedRoute, private _llenados: LlenadosService ) {

    this._llenados.getLlenados().subscribe( ( llenados:any) => {
      this.Llenados = llenados;
      console.log(this.Llenados);
      return this.Llenados;
    });

   }

  ngOnInit(): void {
  }

}
