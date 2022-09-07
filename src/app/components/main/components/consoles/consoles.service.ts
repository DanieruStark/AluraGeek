import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsCategorys } from '../products-category';

const API = 'http://localhost:3000/consoles';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(private httpClient: HttpClient) { }

  userList(): Observable<ProductsCategorys>{
    return this.httpClient.get<ProductsCategorys>(`${API}`);
  }
}
