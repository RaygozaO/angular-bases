import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {
  public name:string = 'Peter Parker';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
}
