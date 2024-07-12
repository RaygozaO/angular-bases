import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name:string = 'Peter Parker';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroeDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name = 'Spiderman'
  }
  changeAge():void{
    this.age = 35;
  }
  changeRestablecer():void{
    this.age=45;
    this.name = 'Peter Parker';
    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML = '<h1>Desde Angular</h1>';
    })
  }
}
