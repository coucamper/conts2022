import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://localhost:8093/"

  constructor( private http: HttpClient, private activatedR: ActivatedRoute ) {

   }
}
