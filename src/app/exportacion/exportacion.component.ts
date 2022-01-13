import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExportacionesService } from '../services/exportaciones.service';
import { NavegacionconductorComponent } from '../shared/navegacionconductor/navegacionconductor.component';



@Component({
  selector: 'app-exportacion',
  templateUrl: './exportacion.component.html',
  styleUrls: ['./exportacion.component.css']
})
export class ExportacionComponent implements OnInit {

  exportaciones:any[] = [];

  constructor( private router: Router, private _exportaciones:ExportacionesService ) {
    this._exportaciones.getExportaciones().subscribe( data => {
      console.log(data);
      this.exportaciones = data;
    })
   }

  ngOnInit(): void {
  }

}
