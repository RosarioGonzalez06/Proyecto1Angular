import { Component } from '@angular/core';

@Component({
  selector: 'app-pag1',
  imports: [],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.scss'
})
export class Pag1Component {
  nombre = '';
  mostrarNombre(event: any) {
    this.nombre = event.target.value;
  }
}
