import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteServico } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';

import { FlashMessagesService } from 'flash-messages-angular/module/flash-messages.service';
import { NgForm } from '@angular/forms';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  providers: [NgbModalConfig, NgbModal],
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  [x: string]: any;
  content = '';

  clientes: Cliente[] = [] ;
  cliente : Cliente = {
    nombre: '',
    email: '',
    apellido: '',
    saldo: 0
  }
  @ViewChild("clienteForm")
  clienteForm: NgForm = new NgForm([],[]) ;

  @ViewChild("botonCerrar") botonCerrar: ElementRef = new ElementRef({});
 

  constructor( private clientesServicio: ClienteServico,
              config: NgbModalConfig, 
              private modalService: NgbModal) {
              config.backdrop = 'static';
              config.keyboard = false;

   }

  ngOnInit(){
    this.clientesServicio.getClientes().subscribe(
      clientes => {
      this.clientes = clientes;
    }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente =>{
        saldoTotal += cliente.saldo ? cliente.saldo : 0;
      })
    }
    return saldoTotal;
  }
  agregar({value, valid}:NgForm){

    if(!valid){
        this['flashMensaje'].show('Por favor llena el formulario correctamente', {
          cssClass: 'alert-danger', timeout: 4000
        });

  }
  else{
    //agregar al nuevo cliente
    this.clientesServicio.agregarCliente(value);
    this.clienteForm.resetForm();
    this.cerrarModal();
  }
  }
  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }
  open(content: any) {
		this.modalService.open(content);
	}
}
