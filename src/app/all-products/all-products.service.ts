import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsCategorys } from '../components/main/components/products-category';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

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
