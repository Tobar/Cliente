import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ClienteServico } from 'src/app/servicios/cliente.service';
import { LoginAzure } from 'src/app/servicios/loginApi.service';
import { ClienteService } from 'src/app/servicios/clienteapi.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { NgForm } from '@angular/forms';
import { FlashMessage } from 'flash-messages-angular/module/flash-message';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SalarioUsuario } from 'src/app/modelo/api.model';

@Component({
  selector: 'app-tabla-azure',
  templateUrl: './tabla-azure.component.html',
  styleUrls: ['./tabla-azure.component.css'],
})
export class TablaAzureComponent implements OnInit {


 private url = 'https://ultraenvios.azurewebsites.net/api/Customer';



  salario: SalarioUsuario = {
    id:'',
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private LoginAzure: LoginAzure,
  ) {}


  Salario(formData: SalarioUsuario){
    const data = {
      id: formData.id,
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      saldo: formData.saldo,
    }
    this.http.post(this.url, data).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.log(error);
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }


  usuariosS:any;
  Clientes: SalarioUsuario[] = [];
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe((data) => {
      this.usuariosS = data;
      console.log(this.usuariosS);
    })

    this.LoginAzure.getSalarios().subscribe((data) => {
      this.Clientes = data;
      console.log(this.Clientes);
    }
    )
  }

  
  getSaldoTotal(){
    let total = 0;
    for(let i = 0; i < this.Clientes.length; i++){
      total += this.Clientes[i].saldo;
    }
    return total;
  }
}

