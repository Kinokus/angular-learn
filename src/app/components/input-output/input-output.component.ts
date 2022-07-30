import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {

  expression: boolean = false;

  @Output()
  sayHi = new EventEmitter();

  @Input()
  title!: string;

  @Input()
  titleSecondary?: string = 'title secondary';


  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('titleThird') titleThird?: string = 'title third';


  @Input()
  counter: number = 0;

  @Output()
  counterChange = new EventEmitter<number>();


  onClick() {
    this.sayHi.emit(this.title + '!');
  }
}
