import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsCategorys } from '../products-category';

const API = 'http://localhost:3000/starwars';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private httpClient: HttpClient) { }

  userList(): Observable<ProductsCategorys>{
    return this.httpClient.get<ProductsCategorys>(`${API}`);
  }
}
