import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NewProductService {
  constructor(private httpClient: HttpClient) {}

  upload(
    id: number,
    category: string,
    image: string,
    imageBanner: string,
    title: string,
    price: string,
    description: string
  ): Observable<any> {
    return this.httpClient.post(`${API}/${category}`, {
      id: id,
      category: category,
      image: image,
      banner: imageBanner,
      title: title,
      price: price,
      description: description
    });
  }
}
