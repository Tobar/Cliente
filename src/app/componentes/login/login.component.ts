import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { FlashMessage } from 'flash-messages-angular/module/flash-message';
import { loginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private router: Router,
              private flasMessages : FlashMessagesService,
              private loginService: loginService,
             ) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }
  login(){
    this.loginService.login(this.email, this.password)
    .then(res => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.flasMessages.show(err.message, {
        cssClass: 'alert-danger', timeout: 4000
      })
    });
  }


}
