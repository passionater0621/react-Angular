import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent {
  isAuthenticated = true;

  constructor(private userService: UserService) {
    if (this.userService.isAuthenticated()) {
      this.isAuthenticated = false;
    } else {
      this.isAuthenticated = false
    }
  }
  ngOnInit(): void { }

}
