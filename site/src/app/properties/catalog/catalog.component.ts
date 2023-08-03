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
  isLoading: boolean = true

  constructor(private apiService: ApiService,) { }
  ngOnInit(): void {
    this.apiService.getAllProperties().subscribe({
      next: (property) => {
        this.isLoading = false
        this.properties = Object.values(property)
        this.ids = Object.keys(property)
        this.apiService.getArrayValues(this.properties, this.ids)
      }
    })
  }
}
