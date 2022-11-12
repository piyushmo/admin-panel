import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authServiceService:AuthServiceService ) { }
  userName = "hitesh"; 
  @Output() setRolesForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  login() {
   // let user:any = document.getElementById("usrName").;
this.authServiceService.login(this.userName);
this.setRolesForMe.emit();
  }

}
