import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  constructor(private userService: UserService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  logout(): void {
    this.userService.logout()
    this.router.navigate(['/login'])
  }

  // get username(): string {
  //   return this.userService.user?.username || '';
  // }
}

