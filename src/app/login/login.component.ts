import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';
  page = 'user';
  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autentica(this.email, this.senha, this.page).subscribe({
      next: () => {
        console.log('autenticado com sucesso');
      },
      error: (err) => {
        alert('Email ou senha inválido');
        console.log(err);
      }
    })
  }
}
