import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.email === 'user@user.com' && usuario.senha === '1234') {
      this.router.navigate(['/home'])
      return alert('Usuario autenticado com sucesso!')
    }
    return alert('Usuário o senha inválida')
  }
}
