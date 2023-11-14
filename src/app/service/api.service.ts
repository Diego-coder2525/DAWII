import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApiRegistro="http://localhost:8080/auth/register";
  private urlApiLogin="http://localhost:8080/auth/login";
  constructor(private http: HttpClient) { }
  public postData(data: any) : Observable<any>{
    return this.http.post(this.urlApiRegistro,data);
  }
  public loginData(data: any) : Observable<any>{
    return this.http.post(this.urlApiLogin,data);
  }
}
