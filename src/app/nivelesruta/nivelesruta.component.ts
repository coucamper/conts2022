import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelesContenedoresRutaService } from '../services/nivelescontenedoresruta.service';

@Component({
  selector: 'app-nivelesruta',
  templateUrl: './nivelesruta.component.html',
  styleUrls: ['./nivelesruta.component.css']
})
export class NivelesrutaComponent implements OnInit {

  nivelContenedoresRuta:any[] = [];

  idx:any;
  paginador:any;
  page:any;
  items: any[] = this.nivelContenedoresRuta;
  pageOfItems: Array<any>;
  totalElements: number;



  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private _nivelesContRuta: NivelesContenedoresRutaService) {

     }

     getNiveles(){
      // Esta parte de codigo es la que genera la ruta
      this.activatedRoute.paramMap.subscribe(params =>{
      this.page = this.activatedRoute.snapshot.paramMap.get('page');
       if(!this.page){
         this.page = 0;
       }
     });
  }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];

    this._nivelesContRuta.getNivelesPorpesaje(this.idx).subscribe((nivs:any) => {
      this.nivelContenedoresRuta = nivs;
      console.log(this.nivelContenedoresRuta);
      return this.nivelContenedoresRuta;
    });

  }

}
