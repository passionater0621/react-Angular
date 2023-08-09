import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.isLoading = false;
  }
}
