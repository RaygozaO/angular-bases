import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)" style="margin-right: 10px;">+1</button>
    <button (click)="resetCounter()" style="margin-right: 10px;">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{
  constructor() { }
  public counter:number = 10;
   increaseBy(value:number){
    this.counter +=value;
  }
  resetCounter(){
    this.counter = 10;
  }

}
