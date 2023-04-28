import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd-eCommerceGt';

  constructor(){

    for (let i = 0; i < 10; i++) {
      const pass = this.generarPassword();
      console.log(pass);
    }
  }
  generarPassword() {
    let password = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
      let caracter = Math.floor(Math.random() * caracteres.length + 1);
      password += caracteres.charAt(caracter)
    }

    return password;
  }
}
