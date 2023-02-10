import { Injectable } from "@angular/core";
import { LoginI } from "../modelo/login.model";
import { RespuestaI } from "../modelo/data.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable  } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  
  url: string = 'https://ultraenvios.azurewebsites.net/api/Authenticate/login';
  constructor(private http: HttpClient) {}

  loginbyEmail(form: LoginI): Observable<RespuestaI> {
    let direccion = this.url;
    return this.http.post<RespuestaI>(direccion, form);
  }
}
