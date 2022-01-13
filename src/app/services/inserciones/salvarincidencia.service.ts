import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SalvarincidenciaService {

  constructor( private http: HttpClient,
    private activatedRoute : ActivatedRoute ) { 
      console.log("Servicio de insercion de contenedor funcionando!");
}

}
