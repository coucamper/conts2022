import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { CategoriaModel } from '../models/categoriaModel';
import { AuthService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class ContratoempleadoService {

  constructor() { }
}
