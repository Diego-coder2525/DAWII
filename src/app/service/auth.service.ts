import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelo/jwt-dto';
import { LoginUsuario } from '../modelo/login-usuario';
import { NuevoUsuario } from '../modelo/nuevo-usuario';
import { Usuario } from '../modelo/Usuario';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private authURL = 'https://backend-mitec-api-production.up.railway.app/auth/';
   authURL = 'http://localhost:8080/auth/';
  constructor(private http: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.authURL + 'register', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
  public obtenerUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.authURL + 'usuario');
  }
}
