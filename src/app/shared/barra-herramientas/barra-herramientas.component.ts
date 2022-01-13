import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-herramientas',
  templateUrl: './barra-herramientas.component.html',
  styleUrls: ['./barra-herramientas.component.css']
})
export class BarraHerramientasComponent implements OnInit {

  div1:boolean=false;

  constructor() {

    this.div1Function();

   }

  div1Function(){

    this.div1 = !this.div1;

  }

  ngOnInit(): void {
  }

}
