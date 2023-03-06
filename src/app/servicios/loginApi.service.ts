import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { SalarioUsuario } from "../modelo/api.model";



@Injectable({
  providedIn: 'root'
})
export class LoginAzure {
  getSaldo() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private formBuilder: FormBuilder,   private router: Router, private afAuth: AngularFireAuth, private flasMessages: FlashMessagesService, private http: HttpClient) {}
    
    api_URL = environment.back;

    loginWithApi(username:string, password:string){
      const body = {
        username: username,
        password: password
      }
      return this.http.post(this.api_URL, body)
      
    }
  

    clienteCollections: SalarioUsuario[] = [];
    getSalarios(){
      return this.http.get<SalarioUsuario[]>('https://ultraenvios.azurewebsites.net/api/Customer')
    }
  
  
  }


  