import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MensajeModel } from '../models/mensajeModel';
import { number } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  url = 'http://localhost:8093/mensaje';
  url2 = 'http://localhost:8093/mensajeform';

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    console.log("servicio de mensajes funcionando ");
  }


  getMensajes(){
    return this.http.get('http://localhost:8093/mensaje')
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getMensaje( idmensaje:number ){
    return this.http.get(`${this.url}/${idmensaje}`);
  }

  getMensajesReceptor( idreceptor:number ){
    return this.http.get(`http://localhost:8093/mensajereceptor/${idreceptor}`);
  }

  postMensaje( mensaje:MensajeModel ){
    return this.http.post(`${this.url}`, mensaje );
  }


  postMensajeFormulario( idreceptor:number, idremitente:number, idtipoimpor:number, mensaje:MensajeModel){
    return this.http.post(`${this.url2}/${idreceptor}/${idremitente}/${idtipoimpor}`, mensaje );
  }

  deleteMensajeFormulario( idmensaje:number ){
    return this.http.delete(`${this.url}/${idmensaje}`);
  }

}
