import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginApiService } from 'src/app/servicios/loginApi.service';
import { LoginI } from "src/app/modelo/login.model"

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component {



  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private api: LoginApiService) {}

  onLogin(form: LoginI) {
    this.api.loginbyEmail(form).subscribe((data) => console.log(data));
  }
}
