import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';
  age = 10;
  userJSON = {
    name: "Sandeep Yadav",
    mobile: "8483856421"
  }
  constructor() {
    console.log('App Page started')
  }

  clickMe() {
    console.log('you clicked me !!');
  }

  increment() {
    this.age = this.age + 1;
  }

  decrement() {
    if (this.age > 0) {
      this.age = this.age - 1;
    }
    else {
      alert('Age can not be less than zero')
    }
  }
  setAgeZero() {
    this.age = 0;
  }
}
