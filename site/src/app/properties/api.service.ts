import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../types/property';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getAllProperties() {
    return this.http.get<Property[]>(
      'https://real-estate-ee905-default-rtdb.europe-west1.firebasedatabase.app/properties.json'
    );
  }

  postApartment(
    city: string,
    phone: string,
    area: string,
    photo: string,
    price: string,
    description: string,
    userId: string | undefined
  ) {
    return this.http.post<Property[]>(
      'https://real-estate-ee905-default-rtdb.europe-west1.firebasedatabase.app/properties.json',
      {
        city, phone, area, photo, price, description, userId
      });
  }

  getArrayValues(properties: Property[], ids: string[]) {
    for (let propery of properties) {
      propery.id = ids.shift();
    }
    return properties;
  }
}
