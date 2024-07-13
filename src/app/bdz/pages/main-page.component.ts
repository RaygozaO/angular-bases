import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPagesComponent{
  public characters: Character[]=[
    {name:'Kriling', power:9000},
    {name:'Goku', power:21000},
    {name:'Vegueta', power:19000}
  ];

}
