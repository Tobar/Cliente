import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class loginService {

  loginAp(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private authService: AngularFireAuth, private http: HttpClient) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, password).then(
        (datos) => resolve(datos),
        (error) => reject(error)
      );
    });
  }
  getAuth() {
    return this.authService.authState.pipe(map((auth) => auth));
  }
  logout() {
    this.authService.signOut();
  }

  registrarse(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email, password).then(
        (datos) => resolve(datos),
        (error) => reject(error)
      );
    });
  }
}
