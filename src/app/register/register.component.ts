import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form : FormGroup = this.fb.group
  ({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
    });
  constructor(private authService: AuthService,private fb: FormBuilder,private router: Router ){
    
  }
  register(){
    this.authService.register(this.form.value.name,this.form.value.email,this.form.value.password);
  }
  login(){
    this.router.navigateByUrl('/login')
  }
}
