import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form : FormGroup = this.fb.group
  ({
    email: ['', Validators.required],
    password: ['', Validators.required]
    });
  constructor(private authService: AuthService,private fb: FormBuilder, private router: Router){
    
  }
  login(){
    let user = this.authService.login(this.form.value.email,this.form.value.password);
    if(!user){
      alert("Invalid credentials")
    }else{
      this.router.navigateByUrl('/admin')
    }
  }
  register(){
    this.router.navigateByUrl('/register')
  }
}
