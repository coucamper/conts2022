import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paginator-polizas',
  templateUrl: './paginator-polizas.component.html',
  styleUrls: ['./paginator-polizas.component.css']
})
export class PaginatorPolizasComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }
}
