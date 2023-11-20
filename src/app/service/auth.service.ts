import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}
  private readonly TOKEN_KEY = 'auth_token';

  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  registerUser(registerBody: any) {
    this.apiService.postData(registerBody).subscribe((data)=>{
      if(data!=undefined){
        alert("Usuario registrado correctamente");
      }else{
        alert("Usuario no registrado");
      }

    })
  }
  loginUser(loginBody: any){
    return this.apiService.loginData(loginBody);
  }

}
