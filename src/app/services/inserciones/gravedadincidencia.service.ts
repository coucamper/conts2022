import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GravedadincidenciaService {

  gravedad:any[] = [];

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute ) { }


  getGravedad(){
    return this.http.get('http://localhost:8093/gravedad')
    .pipe( map( (data:any) => {
      return data; 
    }));
  }

}
