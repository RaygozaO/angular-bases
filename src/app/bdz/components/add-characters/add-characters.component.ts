import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css'
})
export class AddCharactersComponent {
  public caracter:Character = {
    name:'',
    power: 0
  }
  emitCharacter(){
    console.log(this.caracter);

    this.caracter.name='';
    this.caracter.power = 0;
  }
}
