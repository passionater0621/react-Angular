import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  logout(): void {
    localStorage.removeItem('user')
  }
}
