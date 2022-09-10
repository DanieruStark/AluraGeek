import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsCategory } from '../components/main/components/products-category';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {

  constructor(private httpClient: HttpClient) { }

  buscaStarWarsIds(id: number): Observable<ProductsCategory>{
    return this.httpClient.get<ProductsCategory>(`${API}/starwars/${id}`);
  }

  buscaConsolesIds(id: number): Observable<ProductsCategory>{
    return this.httpClient.get<ProductsCategory>(`${API}/consoles/${id}`);
  }

  buscaDiversosIds(id: number): Observable<ProductsCategory>{
    return this.httpClient.get<ProductsCategory>(`${API}/diversos/${id}`);
  }
}
