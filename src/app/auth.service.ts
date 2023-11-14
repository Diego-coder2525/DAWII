import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [
    { id: 1, name: 'admin', email: 'admin@gmail.com', password: '123' },
    { id: 2, name: 'user', email: 'user@gmail.com', password: '123' },
  ];
  session: any;
  constructor() {}

  login(email:string,password:string){
    let user = this.users.find((u)=>u.email === email && u.password === password)
    if(user){
      this.session = user;
      localStorage.setItem('session',JSON.stringify(this.session));
    }

    return user;
  }
  register(name:string,email:string,password:string){
    this.users.push({email,password,name});
  }
}
