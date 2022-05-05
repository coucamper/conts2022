import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paginator-comarcas',
  templateUrl: './paginator-comarcas.component.html',
  styleUrls: ['./paginator-comarcas.component.css']
})
export class PaginatorComarcasComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];


  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }

}
