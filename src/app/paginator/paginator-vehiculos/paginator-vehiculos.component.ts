import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paginator-vehiculos',
  templateUrl: './paginator-vehiculos.component.html',
  styleUrls: ['./paginator-vehiculos.component.css']
})
export class PaginatorVehiculosComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];


  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }

}
