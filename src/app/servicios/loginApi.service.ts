import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { Observable, tap } from "rxjs";
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
    private currentUser: any;

    loginWithApi(username:string, password:string): Observable<any>{
      const body = {
        username: username,
        password: password
      }
      return this.http.post<any>(this.api_URL, body).pipe(tap(response =>{
        this.currentUser = response;
        this.setToken(response.token)
      }))
      
    }
    
    public logout(){
      this.currentUser = null;
      localStorage.removeItem('token');
  }

  public isLoggedIn():boolean{
      return !!this.getToken();
  }

  public getToken():string{
      return localStorage.getItem('token') || '';  
  }

  public setToken(token:string):void{
      localStorage.setItem('token', token)
  }

  getAuth(): Observable<boolean>{

    return new Observable<boolean>(observer => {
      if(this.getToken()){
        observer.next(true);
      }else{
        observer.next(false);
      }
    })
  }
    clienteCollections: SalarioUsuario[] = [];
    getSalarios(){
      return this.http.get<SalarioUsuario[]>('https://ultraenvios.azurewebsites.net/api/Customer')
    }


    registroUsuario(usuario: any){
      return this.http.post('https://ultraenvios.azurewebsites.net/api/Customer', usuario)
    }
  
  
  }


  