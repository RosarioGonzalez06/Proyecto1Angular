import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true, 
  imports: [],
  templateUrl: './saludo.html',
  styleUrls: ['./saludo.scss']
})
export class Saludo {
mensaje: string = '';
decirHola() {
    this.mensaje = 'Hola';
  }
}
