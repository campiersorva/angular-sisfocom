import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string[] = ['Thoor','Ironman','Oliver Atom','Goku','Naruto'];
  heroeborrado:string = '';

  borrarheroe():void{
    this.heroeborrado = this.heroes.shift() || '';
  }
}
