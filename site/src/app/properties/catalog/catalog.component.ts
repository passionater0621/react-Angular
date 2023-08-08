import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Property } from 'src/app/types/property';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  allProperties: Property[] = [];
  properties: Property[] = [];
  ids: string[] = [];
  allIds: string[] = [];
  isLoading: boolean = true;
  matches: Property[] = [];

  form = this.fb.group({
    city: [''],
  });

  constructor(private apiService: ApiService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.apiService.getAllProperties().subscribe({
      next: (properties) => {
        this.isLoading = false;
        this.properties = Object.values(properties);
        this.ids = Object.keys(properties);
        this.allProperties = Object.values(properties);
        this.allIds = Object.keys(properties);
        this.apiService.getArrayValues(this.properties, this.ids);
        this.apiService.getArrayValues(this.allProperties, this.allIds);
      }
    })
  }

  search() {
    const { city } = this.form.value;
    this.matches = [];

    if (this.properties !== undefined) {
      for (const property of this.allProperties) {
        if (property.city.toLowerCase().includes(city!.toLowerCase())) {
          this.matches.push(property)
        }
      }
      this.properties = this.matches
      this.isLoading = false;
    }

    if (city == '') {
      this.apiService.getAllProperties().subscribe({
        next: (properties) => {
          this.isLoading = false;
          this.properties = Object.values(properties);
          this.ids = Object.keys(properties);
          this.allProperties = Object.values(properties);
          this.allIds = Object.keys(properties);
          this.apiService.getArrayValues(this.properties, this.ids);
          this.apiService.getArrayValues(this.allProperties, this.allIds);
        }
      })
    }

  }

}
