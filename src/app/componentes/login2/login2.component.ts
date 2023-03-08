import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoginAzure } from 'src/app/servicios/loginApi.service';
import {
  Form,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { loginData } from '../../interfaces/loginDara.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
  
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginAzure: LoginAzure,
    private afAuth: AngularFireAuth,
    private flasMessages: FlashMessagesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      api: ['firebase', Validators.required],
    });
  }

  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const api = this.loginForm.value.api;

    if (api == 'firebase') {
      this.afAuth
        .signInWithEmailAndPassword(username, password)
        .then((user) => {
          this.router.navigate(['']);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.loginAzure.loginWithApi(username, password).subscribe((data) => {
        console.log(data);
        this.router.navigate(['tablaAzure']);
      });
    }
  }
}
