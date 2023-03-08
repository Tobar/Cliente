import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/servicios/login.service';
import { LoginAzure } from 'src/app/servicios/loginApi.service';


@Component({
  selector: 'app-cabecero2',
  templateUrl: './cabecero2.component.html',
  styleUrls: ['./cabecero2.component.css']
})
export class Cabecero2Component implements OnInit {
  
  isLoggedIn: boolean = false;
  loggedInUser: string | null = '';

  constructor(private loginService: loginService, 
              private router: Router,
              private loginApi: LoginAzure) {}
  ngOnInit() {

    this.loginApi.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = this.loginApi.getToken();
      }else{
        this.isLoggedIn = false;
      }
    })


  }
  logout(){
    this.loginApi.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/log']);
  }
}
