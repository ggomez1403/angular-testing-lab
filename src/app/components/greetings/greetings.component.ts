import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: '<p class="mensaje">Valor por defecto</p>'
})
export class GreetingsComponent{
  mensaje: string = 'Valor por defecto';
}
