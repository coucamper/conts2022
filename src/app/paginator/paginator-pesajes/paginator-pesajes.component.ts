import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paginator-pesajes',
  templateUrl: './paginator-pesajes.component.html',
  styleUrls: ['./paginator-pesajes.component.css']
})
export class PaginatorPesajesComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];


  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }

}
