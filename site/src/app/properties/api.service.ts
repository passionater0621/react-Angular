import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../types/property';
import { Comment1 } from '../types/comment';

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

  getProperty(id: string) {
    return this.http.get<Property>(
      `https://real-estate-ee905-default-rtdb.europe-west1.firebasedatabase.app/properties/${id}.json`
    );
  }

  newComment(id: string, comment: string, name: string) {
    return this.http.post<Comment1[]>(
      `https://real-estate-ee905-default-rtdb.europe-west1.firebasedatabase.app/properties/${id}/comments.json`
      , {
        name, comment
      });
  }

  getComments(id: string) {
    return this.http.get<Comment1[]>(`https://real-estate-ee905-default-rtdb.europe-west1.firebasedatabase.app/properties/${id}/comments.json`)
  }

  getArrayValuesComments(comments: Comment1[]) {
    let allComments = []
    for (let comment in comments) {
      let commentar = `${Object.values(comments[comment])[1]}: ${Object.values(comments[comment])[0]}`
      allComments.push(commentar)
    }
    return allComments;
  }
}