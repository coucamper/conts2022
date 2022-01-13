import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ClaseService } from '../services/clase.service';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:any[] = [];


  constructor(private router:Router,
              private _clientes: ClienteService ) {

                this._clientes.getClientes().subscribe( (cli:any) => {
                  this.clientes = cli;
                });

  }

  ngOnInit(): void {
  }

}
