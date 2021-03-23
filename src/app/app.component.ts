import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';
  age = 10;
  userJSON: any = {}
  userList = [];
  httpStatus = false;
  constructor() {
    console.log('App Page started');
    this.getAPI();
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
  getAPI() {
    this.httpStatus = true;
    setTimeout(() => {
      const response = {
        "Data": [
          {
            "name": "Sandeep Yadav",
            "mobile": "8483856421",
            "email": "sandeep.c.yadav@capgemini.com",
            "education": [
              {
                "standard": "SSC",
                "school": "BHHHS"
              },
              {
                "standard": "HSC",
                "school": "RKT"
              },
              {
                "standard": "BSC IT",
                "school": "Seva Sadan"
              }
            ]
          },
          {
            "name": "Rahul M",
            "mobile": "9673412006",
            "email": "rahul.mutyalkar@gebbs.com",
            "education": [
              {
                "standard": "SSC",
                "school": "BHHHS"
              },
              {
                "standard": "HSC",
                "school": "National College"
              },
              {
                "standard": "BSC IT",
                "school": "Seva Sadan"
              }
            ]
          },
          {
            "name": "Pawan Pandey",
            "mobile": "8446131952",
            "email": "pawan.g.s.pandey@serevestack.io",
            "education": [
              {
                "standard": "SSC",
                "school": "Guru Govind"
              },
              {
                "standard": "HSC",
                "school": "RKT"
              },
              {
                "standard": "BSC IT",
                "school": "Seva Sadan"
              }
            ]
          }
        ],
        "Messages": [

          {
            "message": "User List",
            "Type": "Success"
          }]
      }

      if (response && response.Data != null) {
        this.userList = response.Data;
        this.httpStatus = false;
      }
      else {
        this.userList = [];
        this.httpStatus = false;
      }
      
    }, 400)

  }
}
