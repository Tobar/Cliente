import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicio } from 'src/app/servicios/doubleService.service';
import { loginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {

  //firebase
  isLoggedIn: boolean = false;
  loggedInUser: string | null = '';

  //api
  UsuarioRegistrado: string | null = '';
  isLoggedInApi: boolean = false;


  constructor(private loginService: loginService, 
              private router: Router,
              private authService: AuthServicio) {}
  ngOnInit() {

    //api
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedInApi = true;
        this.UsuarioRegistrado = auth.email;
      } else {
        this.isLoggedInApi = false;
      }

    //firebase
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  logout(){
    if(this.loggedInUser){
      this.loginService.logout();
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
  
    }else{
      
    //Logout de la api
    this.authService.finSesion();
    this.router.navigate(['/login']);
    }

   
    
  }
}
