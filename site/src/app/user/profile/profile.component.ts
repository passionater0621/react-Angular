import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ApiService } from 'src/app/properties/api.service';
import { Property } from 'src/app/types/property';
import { User } from 'src/app/types/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  properties: Property[] = [];
  ids: string[] = [];
  isLoading: boolean = true;
  user: User | undefined

  constructor(private userService: UserService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllProperties().subscribe({
      next: (properties) => {
        this.isLoading = false;
        this.properties = Object.values(properties).filter(property => property.userId === this.userService.userId)
        this.ids = Object.keys(properties);
         this.apiService.getArrayValues(this.properties, this.ids);
      }
    })
    this.user = this.userService.user;
  }
}
