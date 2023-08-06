import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Property } from 'src/app/types/property';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  properties: Property[] = [];
  ids: string[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService,) { }
  ngOnInit(): void {
    this.apiService.getAllProperties().subscribe({
      next: (properties) => {
        this.isLoading = false;
        this.properties = Object.values(properties);
        this.ids = Object.keys(properties);
        this.apiService.getArrayValues(this.properties, this.ids);
      }
    })
  }
}
