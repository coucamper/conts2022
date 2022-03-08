import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'lodash';
import { ClienteModel } from '../models/clienteModel';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:ClienteModel[];
  cliente:ClienteModel;

  cliente2:ClienteModel = new ClienteModel();

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _clientes:ClienteService
              ) {

                // this._clientes.getClientes().subscribe((clientes:any) =>{
                //   this.clientes=clientes;
                //   console.log(this.clientes);
                // });

               }



               salvarCliente(){
                 this.cliente2.cliente = "Maria";
                 this.cliente2.email = "maria@gmail.com";
                this._clientes.postCliente(this.cliente2).subscribe();
               }


               cargarClientes(){
                this._clientes.getClientes().subscribe((cs:any) =>{
                  this.clientes = cs;
                });
               }



  ngOnInit(): void {

  }

}
