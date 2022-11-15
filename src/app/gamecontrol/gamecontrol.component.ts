import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  counter: number = 0;
  @Output() emitCounter = new EventEmitter<number>();
  ref: any;

  constructor() { }

  ngOnInit(): void {
  }

  startEmitGame() {
    this.ref = setInterval( () => {
      this.emitCounter.emit(this.counter+=1);
    }, 1000)
  }

  startGame() {
    this.ref = setInterval(() => {
      this.counter+=1;
    }, 1000)
  }

  stopGame() {
    clearInterval(this.ref);
    this.counter = 0;
  }

}
