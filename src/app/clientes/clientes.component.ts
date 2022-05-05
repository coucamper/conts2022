import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'lodash';
import { map } from 'rxjs/operators';
import { ClienteModel } from '../models/clienteModel';
import { AuthService } from '../services/auth-service.service';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  // NO BORRAR ESTOS
  // clientes:any[] = [];
  // cliente:ClienteModel;
  // cliente2:ClienteModel = new ClienteModel();


  // PUEDES BORRAR
  clientes: ClienteModel[];
  paginador: any;
  clienteSeleccionado: ClienteModel;




  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _clientes:ClienteService,
              private authService: AuthService
              ) {

                // this._clientes.getClientes().subscribe((cs:any) =>{
                //   this.clientes = cs;
                //   console.log(this.clientes);
                // });

               }






  ngOnInit(): void {
      this._clientes.getClientes()
      .subscribe((response:any) => {
          this.clientes = response;
          console.log(response);
          return this.clientes;
      });
  }
}
