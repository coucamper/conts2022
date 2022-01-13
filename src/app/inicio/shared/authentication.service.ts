import { HttpClient, HttpResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { SessionModel } from "src/app/models/sessionModel";
import { LoginObjectModel } from "./login-objectModel";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {}

  private basePath = '/api/authenticate/';

  // login(loginObj: LoginObjectModel): Observable<SessionModel> {
  // return this.http.post(this.basePath + 'login', loginObj).map(this.extractData);

  // }

  // logout(): Observable<Boolean> {
  // return this.http.post(this.basePath + 'logout', {}).map(this.extractData);
  // }

  private extractData(res: Response) {
  let body = res.json();
  return body;
  }


}
