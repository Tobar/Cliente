import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

import { loginService } from 'src/app/servicios/login.service';
import { LoginAzure } from 'src/app/servicios/loginApi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private flasMessages: FlashMessagesService,
    private loginService: loginService,
    private LoginAzure: LoginAzure,
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ) {}

  email: string = '';
  password: string = '';
  username: string = '';

  ngOnInit(): void {
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });

    
  }
  async login() {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        this.email,
        this.password
      );
      this.router.navigate(['/']);
    } catch {
      this.flasMessages.show('Usuario o contraseña incorrectos', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    }
  }

  
}
