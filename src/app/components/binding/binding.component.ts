import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {

  phone = '100500';
  user = {
    name: 'Jane',
    surname: 'Doe',
  };
  boldText = `<b>BOLD!</b>`;

  login = '';
  password = '';


  constructor() {
  }

  get fullName() {
    return `${this.user.name} ${this.user.surname}`;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updatePhone();
      // this.phone = '100700';
    }, 3000);
  }

  updatePhone() {
    this.phone = String(Math.round(Math.random() * 100000));
  }

  onInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.phone = target.value;
  }

  onSubmit() {
    this.login = '';
    this.password = '';
  }
}
