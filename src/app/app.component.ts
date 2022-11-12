import { Component } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  showLoginPage = true;

  constructor(private _authService: AuthServiceService) {

  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  getUserRoles() {
    this.showLoginPage = this._authService.currentUserRole ==""
  }
}
