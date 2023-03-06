import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AuthServicio {
  
    private UsuarioNormal: any;

    public finSesion(){
        this.UsuarioNormal = null;
        localStorage.removeItem('token');
    }

    public estaLogueado(): boolean{
    
        return !!this.UsuarioNormal;

    }

    public getToken():string{
        return localStorage.getItem('token') || '';
    }

    public setToken(token:string):void{
        localStorage.setItem('token', token)
    }

}
