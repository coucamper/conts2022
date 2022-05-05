import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'lodash';
import { map } from 'rxjs/operators';
import { ClienteModel } from '../models/clienteModel';
import { AuthService } from '../services/auth-service.service';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  // NO BORRAR ESTOS
  // clientes:any[] = [];
  // cliente:ClienteModel;
  // cliente2:ClienteModel = new ClienteModel();


  // PUEDES BORRAR
  cliente:any;
  paginador: any;
  clienteSeleccionado: ClienteModel;
  idx:number;



  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _clientes:ClienteService,
              private authService: AuthService
              ) {
                this.idx = this.activatedRoute.snapshot.params['id'];
                // this._clientes.getClientes().subscribe((cs:any) =>{
                //   this.clientes = cs;
                //   console.log(this.clientes);
                // });

               }






  ngOnInit(): void {
      this._clientes.getCliente(this.idx)
      .subscribe((response:any) => {
          this.cliente = response;
          console.log(response);
          return this.cliente;
      });
  }
}
