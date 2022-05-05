import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }

}

// CODIGO DE PAGINATOR.COMPONENT.HTML

// <ul *ngIf="paginas" class="pagination">
//   <li *ngFor="let pagina of paginas">
//     <a [routerLink]="['/localidades', pagina-1]" class="btn">{{ pagina }}</a>

//   </li>
// </ul>
