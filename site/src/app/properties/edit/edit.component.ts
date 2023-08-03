import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/types/property';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  property: Property | undefined;

  form = this.fb.group({
    city: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    area: ['', [Validators.required]],
    photo: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]]
  });
  constructor(private fb: FormBuilder,
    private apiServes: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  edit() {
    const id = this.activatedRoute.snapshot.params['propertyId'];
    const { city, phone, area, photo, price, description } = this.form.value;
    console.log( city, phone, area, photo, price, description)

    this.apiServes.editProperty(id, city!, phone!, area!, photo!, price!, description!).subscribe({
      next: () => {
        this.router.navigate([`/catalog/${id}`])
      },
      error: () => {
        this.router.navigate(['/error'])
      }
    })
  }

  ngOnInit(): void {
    this.getPropertyInfo()
  }

  getPropertyInfo() {
    const id = this.activatedRoute.snapshot.params['propertyId'];
    this.apiServes.getProperty(id).subscribe(property => {
      this.property = property;
      console.log(property)
    })
  }

}
