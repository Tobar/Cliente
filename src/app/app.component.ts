import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'control-clientes';

  userLogged = false;
  userApi = false;

  constructor(private afAuth: AngularFireAuth,
              private http: HttpClient) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userLogged = true;
      } else {
        this.userLogged = false;
      }
    })

    this.http.get('https://ultraenvios.azurewebsites.net/api/Customer').subscribe((data) => {
      if(data){
        this.userApi = true;
      }else{
        this.userApi = false;
      }
    })
  }
}
