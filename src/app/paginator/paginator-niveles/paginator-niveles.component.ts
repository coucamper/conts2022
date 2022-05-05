import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paginator-niveles',
  templateUrl: './paginator-niveles.component.html',
  styleUrls: ['./paginator-niveles.component.css']
})
export class PaginatorNivelesComponent implements OnInit {

  @Input() paginador:any;
  paginas:number[];
  idx:any;
  page:number;
  size:number;
  formSize:FormGroup;

  controlSize:any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {

  }


  ngOnInit(): void {
    //this.idx = this.activatedRoute.snapshot.params['id'];
    this.idx = this.activatedRoute.snapshot.paramMap.get('id');
    let page = this.activatedRoute.snapshot.paramMap.get('page');
    if (!page) {
      this.page = 0;
    }

    this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor,indice) => indice+1);
  }


}
