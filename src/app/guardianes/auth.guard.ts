import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core"
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthResponse } from "../interfaces/auth-response.interface"

@Injectable()


export class AuthGuard {



    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ){}
    
  

    

    }
