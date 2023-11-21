import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports: [MatButtonModule,ReactiveFormsModule]
})

export class LoginComponent {
  form : FormGroup = this.fb.group
  ({
    username: ['', Validators.required],
    password: ['', Validators.required]
    });
  constructor(private authService: AuthService,private fb: FormBuilder, private router: Router){
    
  }
  login(){
    let loginBody = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    if(loginBody.username=="" || loginBody.password==""){
      alert("Faltan campos por llenar");
    }else{
      this.authService.loginUser(loginBody).subscribe(
        (Token) => {
          alert("Usuario logueado correctamente: ");
          let userToken = Token.token;
          // guardo el token en el localStorage
          this.authService.setAuthToken(userToken);
          // redirijo al home
          this.router.navigateByUrl('/home');
        },
        (error) => {
          alert("Usuario no logueado.");
        }
      );
    }
    
    
  }
  register(){
    // boton para redirigir al registro xd
    this.router.navigateByUrl('/register')
  }
}
