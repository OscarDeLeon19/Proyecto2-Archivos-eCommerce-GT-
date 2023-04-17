import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/auth/interfaces/usuario.interface';
import { Router } from '@angular/router';
import { ComunService } from '../../services/comun.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario?: Usuario;

  constructor(private router: Router, private comunService: ComunService) {

  }

  ngOnInit(): void {
    this.comunService.obtenerUsuario();
    this.usuario = this.comunService.getUsuario();
    console.log('Comun Component');
    console.log(this.usuario);
  }
}
