import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUser: string | null = '';

  constructor(private loginService: loginService, 
              private router: Router) {}
  ngOnInit() {
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
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    
  }
}