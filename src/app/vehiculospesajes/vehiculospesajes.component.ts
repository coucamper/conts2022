import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosPesajesService } from '../services/vehiculospesajes.service';



@Component({
  selector: 'app-vehiculospesajes',
  templateUrl: './vehiculospesajes.component.html',
  styleUrls: ['./vehiculospesajes.component.css']
})
export class VehiculospesajesComponent implements OnInit {

  VehiculosPesajes:any[] = [];


  idx:number;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _vehipesajes: VehiculosPesajesService ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this._vehipesajes.getvehiculosPesajes().subscribe( (vehipe:any) => {
      this.VehiculosPesajes = vehipe;
    });
   }

  ngOnInit(): void {
  }


}
