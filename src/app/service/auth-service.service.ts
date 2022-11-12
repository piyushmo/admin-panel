import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  users = [{userName:"hitesh", role:"accountant"},
  {userName:"piyush", role:"accountant"},
  {userName:"harsh", role:"inpection_cons"}

  
];

currentUserRole = "";
  constructor() { }

  login(user) {
    for(var i=0; i<this.users.length; i++) {
      if(this.users[i].userName === user) {
        this.currentUserRole = this.users[i].role;
        localStorage.removeItem("role");
        localStorage.setItem("role",this.currentUserRole);
      }
    }
  }
}
