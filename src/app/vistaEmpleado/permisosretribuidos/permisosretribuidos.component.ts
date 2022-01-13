import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { permisoretribuidoModel } from 'src/app/models/permisoretribuidoModel';
import { PermisosretribuidosService } from 'src/app/services/permisosretribuidos.service';


@Component({
  selector: 'app-permisosretribuidos',
  templateUrl: './permisosretribuidos.component.html',
  styleUrls: ['./permisosretribuidos.component.css']
})
export class PermisosretribuidosComponent implements OnInit {

  permisosRetribuidos:any[] =  [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _permisos: PermisosretribuidosService, private permiso: permisoretribuidoModel) {

    this._permisos.getTiposPermisosR().subscribe( (prs:any) =>{
      this.permisosRetribuidos = prs;
    });

   }

  ngOnInit(): void {
  }

}
