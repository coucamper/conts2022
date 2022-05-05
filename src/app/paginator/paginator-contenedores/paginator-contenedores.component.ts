import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paginator-contenedores',
  templateUrl: './paginator-contenedores.component.html'
})
export class PaginatorContenedoresComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];


  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }

}
