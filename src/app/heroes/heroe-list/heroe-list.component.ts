import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {
  public heroeNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deleteHero?:string;

  removeLast():void{
     this.deleteHero = this.heroeNames.pop();
  }
}
