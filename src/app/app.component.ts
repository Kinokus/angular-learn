import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-learn';
  showProduct: boolean = true;
  expression: boolean = false;
  age: number = 18;

  onSayHi($event: any) {
    console.log($event, 'say !');
  }
}
