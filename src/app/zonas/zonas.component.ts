import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ZonasService } from '../services/zonas.service';


@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  zonas:any[] = [];


  constructor(private router:Router,
              private _zonas: ZonasService) {
                this.getZonas();
              }

  ngOnInit(): void {
  }


  getZonas(){
    this._zonas.getComarcas().subscribe((coms:any) => {
      this.zonas = coms;
    });
  }


}
