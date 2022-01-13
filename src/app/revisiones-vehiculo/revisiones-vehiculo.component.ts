import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RevisionesvehiculosService } from '../services/revisionesvehiculos.service';


@Component({
  selector: 'app-revisiones-vehiculo',
  templateUrl: './revisiones-vehiculo.component.html',
  styleUrls: ['./revisiones-vehiculo.component.css']
})
export class RevisionesVehiculoComponent implements OnInit {

  revisiones:any[] = [];

  idx:number;

  constructor( private route: Router, private activatedRoute: ActivatedRoute, private _revisiones: RevisionesvehiculosService) {
    this._revisiones.getRevisiones().subscribe( (rev:any) => {
      console.log(rev);
      this.revisiones = rev;

    });

    this.verRevision( this.idx );
  }

  verRevision( idx:number ){

  }

  ngOnInit(): void {
  }

}
