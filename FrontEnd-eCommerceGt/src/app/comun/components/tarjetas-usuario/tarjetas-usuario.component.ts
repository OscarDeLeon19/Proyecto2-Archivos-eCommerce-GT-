import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Tarjeta, Usuario } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjetas-usuario',
  templateUrl: './tarjetas-usuario.component.html',
  styleUrls: ['./tarjetas-usuario.component.css']
})
export class TarjetasUsuarioComponent implements OnInit {

  tarjetas: Tarjeta[] = [];
  usuario!: Usuario;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.agregarTarjetas();
  }

  agregarTarjetas() {
    const jsonUsuario = localStorage.getItem("usuario");
    if (jsonUsuario) {
      this.usuario = JSON.parse(jsonUsuario);
      this.tarjetas = this.usuario.tarjetas!;
    }
  }

  borrarTarjeta(i: number) {
    const tarjeta = this.tarjetas[i]
    Swal.fire({
      title: `¿Deseas borrar esta tarjeta: ${tarjeta.numero}?`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {

        const body = {
          username: this.usuario.username,
          numero: tarjeta.numero
        }
        this.authService.borrarTarjeta(body)
          .subscribe({
            next: (result: any) => {
              if (result.modifiedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Tarjeta Eliminada',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.tarjetas.splice(i, 1);
                this.usuario.tarjetas = this.tarjetas;
                localStorage.setItem("usuario", JSON.stringify(this.usuario));
              }
            },
            error: (err) => { console.log('Error: ', err); }
          });


      }
    })
  }
}
