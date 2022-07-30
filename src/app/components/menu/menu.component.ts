import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @HostBinding('class')
  hostClass = 'hidden';
  private skipClick: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  hostClick($event: Event) {
    console.log('click', $event);
    $event.stopPropagation();
  }

  // @HostListener('window:click', ['$event'])
  // windowClick($event: Event) {
  //   console.log('click', $event);
  // }


  show() {
    this.hostClass = 'shown';
    this.skipClick = true;
  }

  @HostListener('window:click')
  hide() {
    if (this.skipClick) {
      this.skipClick = false;
      return;
    }
    this.hostClass = 'hidden';
  }

}
