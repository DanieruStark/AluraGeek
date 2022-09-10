import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsCategorys } from '../products-category';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  userListStarWars(): Observable<ProductsCategorys>{
    return this.httpClient.get<ProductsCategorys>(`${API}/starwars`);
  }
  userListConsoles(): Observable<ProductsCategorys>{
    return this.httpClient.get<ProductsCategorys>(`${API}/consoles`);
  }
  userListDiversos(): Observable<ProductsCategorys>{
    return this.httpClient.get<ProductsCategorys>(`${API}/diversos`);
  }
}
