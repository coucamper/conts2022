import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { permisoretribuidoModel } from 'src/app/models/permisoretribuidoModel';
import { PermisosnoretribuidosService } from 'src/app/services/permisosnoretribuidos.service';



@Component({
  selector: 'app-permisos-no-retribuidos',
  templateUrl: './permisos-no-retribuidos.component.html',
  styleUrls: ['./permisos-no-retribuidos.component.css']
})
export class PermisosNoRetribuidosComponent implements OnInit {

  permisosNoRetribuidos:any[] =  [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _permisos: PermisosnoretribuidosService, private permiso: permisoretribuidoModel) {

    this._permisos.getTiposPermisosNr().subscribe( (prs:any) =>{
      this.permisosNoRetribuidos = prs;
    });

   }

  ngOnInit(): void {
  }

}
