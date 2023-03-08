import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AuthServicio {
  
    private UsuarioNormal: any;

    public logout(){
        this.UsuarioNormal = null;
        localStorage.removeItem('token');
    }

    public isLoggedIn(): boolean{
    
        return !!this.UsuarioNormal;

    }

    public getToken():string{
        return localStorage.getItem('token') || '';
    }

    public setToken(token:string):void{
        localStorage.setItem('token', token)
    }

}
