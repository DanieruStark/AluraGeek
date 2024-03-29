import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autentica(email: string, senha: string, page: string): Observable<any> {
    return this.httpClient.post(`${API}/${page}`, {
      email: email,
      senha: senha
    })
  }
}
