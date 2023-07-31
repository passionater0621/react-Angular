import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/properties/api.service';
import { Property } from 'src/app/types/property';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit{
  userId: string | undefined = ''

  form = this.fb.group({
    city: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    area: ['', [Validators.required]],
    photo: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userId = this.userService.user?.email.split('@')[0];
  }

  post() {
    const { city, phone, area, photo, price, description } = this.form.value;
    console.log({ city, phone, area, photo, price, description })

    this.apiService.postApartment(city!, phone!, area!, photo!, price!, description!, this.userId!)
      .subscribe(
        {
          next: () => {
            this.router.navigate(['/catalog'])
          },
          error: () => {
            this.router.navigate(['/home'])
          }
        }
      )
  }
}
