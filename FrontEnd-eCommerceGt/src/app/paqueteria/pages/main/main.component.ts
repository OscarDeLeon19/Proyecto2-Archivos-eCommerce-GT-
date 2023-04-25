import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../../comun/services/comun.service';
import { PaqueteriaService } from '../../services/paqueteria.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private paqueteriaService: PaqueteriaService){}

  ngOnInit(): void {
    this.paqueteriaService.obtenerUsuario();
  }
}
