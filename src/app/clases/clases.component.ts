import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClaseService } from '../services/clase.service';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases:any[] = [];


  constructor(private router:Router,
              private _clases: ClaseService ) {

                this._clases.getClases().subscribe( (clas:any) =>{
                  this.clases = clas;
                });

  }

  ngOnInit(): void {
  }

}
