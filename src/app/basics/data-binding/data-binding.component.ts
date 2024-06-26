import { Component } from '@angular/core';

export class User {
  name: string = '';
  age: number = 0;
}

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  title: string = 'Angular Basics';

  user: User = {
    name: 'John Doe',
    age: 25,
  };

  imageUrl: string =
    'https://angular.io/assets/images/logos/angular/angular.png';

  isButtonDisabled: boolean = true;

  count = 0;

  name = 'John Doe';

  public increment() {
    this.count++;
  }
}
