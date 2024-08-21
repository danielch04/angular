import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
              <h2>Counter {{counter}} </h2>

              <button class="btn btn-primary mx-2"
              (click)="increaseBy(+1)">+1</button>
              <button class="btn btn-success mx-2" (click)="resetCounter()" >reset</button>
              <button class="btn btn-danger mx-2" (click)="increaseBy(-1)" >-1</button>
            `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }

}
