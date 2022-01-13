import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MensajesService } from '../services/mensajes.service';



@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  
  mensajes:any[] = [];

  constructor( private router:Router, private _mensajes: MensajesService ) { 
    this._mensajes.getMensajes().subscribe( data => {
      console.log(data);
      this.mensajes = data;
    })
  }

  ngOnInit(): void {
  }

}
