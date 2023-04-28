import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Tarjeta, Usuario } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {

  @ViewChild("miFormulario") miFormulario!: NgForm;

  usuario!: Usuario;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }
  guardar() {
    if (this.miFormulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No haz ingresado todos los datos'
      })
    } else {
      const objTarjeta: Tarjeta = this.miFormulario.value;
      const body = {
        username: this.usuario.username,
        tarjeta: objTarjeta
      }
      const comprobacion = this.usuario.tarjetas!.find(pr => objTarjeta.numero == pr.numero);
      if (comprobacion) {
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar tarjeta',
          text: 'El numero esta repetido'
        })
      } else {
        this.authService.agregarTarjeta(body)
          .subscribe({
            next: (result: any) => {
              if (result.modifiedCount == 1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Tarjeta Agregada',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.usuario.tarjetas!.push(objTarjeta);
                localStorage.setItem("usuario", JSON.stringify(this.usuario));
                setTimeout(() => { window.location.reload() }, 1500);

              }
            },
            error: (err) => { console.log('Error: ', err); }
          });
      }
    }
  }

  obtenerUsuario() {
    const jsonUsuario = localStorage.getItem("usuario");
    if (jsonUsuario) {
      this.usuario = JSON.parse(jsonUsuario);
    }
  }
}
