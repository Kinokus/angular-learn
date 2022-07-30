import { Component } from '@angular/core';


interface User {
  id: number,
  name: string,
  surname: string,
  template: string

}


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent {

  expression = true;
  deepObject: any = null;
  users: User[] = [
    {id: 1, name: 'name 1', surname: 'surname 1', template: 'bold'},
    {id: 2, name: 'name 2', surname: 'surname 2', template: 'italic'},
    {id: 3, name: 'name 3', surname: 'surname 3', template: 'unknown'},
  ];

  generateUser() {
    this.deepObject = {
      user: {
        name: 'name',
        surname: 'surname',
      },
    };
  };

  trackBy(index: number, user: User) {
    return user.id;
  }

}
