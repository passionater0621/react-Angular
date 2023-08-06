import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/types/property';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  property: Property | undefined;

  phoneEdit: boolean = false;
  cityEdit: boolean = false;
  areaEdit: boolean = false;
  descriptionEdit: boolean = false;
  photoEdit: boolean = false;
  priceEdit: boolean = false;

  form = this.fb.group({
    city: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    area: ['', [Validators.required]],
    photo: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    this.getPropertyInfo();
  }

  id: string = this.activatedRoute.snapshot.params['propertyId'];

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  getPropertyInfo() {
    const id = this.activatedRoute.snapshot.params['propertyId'];
    this.apiService.getProperty(id).subscribe(property => {
      this.property = property;
      this.form.setValue({
        city: this.property.city,
        phone: this.property.phone,
        area: this.property.area,
        photo: this.property.photo,
        price: this.property.price,
        description: this.property.description,
      })

    })
  }

  edit() {
    console.log(this.form.value)
    const { city, phone, area, photo, price, description } = this.form.value;
    this.apiService.editProperty(this.id, city!, phone!, area!, photo!, price!, description!).subscribe({
      next: () => { this.router.navigate([`/catalog/${this.id}`]) },
      error: () => { this.router.navigate(['/error']) }
    })
  }
}
