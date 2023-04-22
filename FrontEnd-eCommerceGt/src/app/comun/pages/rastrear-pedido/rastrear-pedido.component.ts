import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun.service';
import { Pedido, Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-rastrear-pedido',
  templateUrl: './rastrear-pedido.component.html',
  styleUrls: ['./rastrear-pedido.component.css']
})
export class RastrearPedidoComponent implements OnInit{

  pedidos:Pedido[] = [];

  constructor(private comunService: ComunService){}


  ngOnInit(): void {
    const usuario = this.comunService.getUsuario();
    this.comunService.verPedidos(usuario!.username)
      .subscribe({
        next: (result: Pedido[]) => {
          this.pedidos = result;
        },
        error: (err) => {console.log(err);}
      });
  }
}
