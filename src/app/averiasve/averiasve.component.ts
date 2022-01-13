import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AveriaModel } from '../models/averia-model.ts/averiaModel';
import { AveriasService } from '../services/averias.service';


@Component({
  selector: 'app-averiasve',
  templateUrl: './averiasve.component.html',
  styleUrls: ['./averiasve.component.css']
})
export class AveriasveComponent implements OnInit {

  averias:any[] = [];

  div1:boolean = true;

  constructor( private router:Router, private activatedRoute: ActivatedRoute, private _averias: AveriasService, private averia: AveriaModel ) {

    this._averias.getAverias().subscribe( (ave:any) => {
      this.averias = ave;
    });

   }



  div1Function(){

    this.div1 = !this.div1;

  }

  ngOnInit(): void {
  }

}
