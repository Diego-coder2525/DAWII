import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form : FormGroup = this.fb.group
  ({
    username: ['', Validators.required],
    password: ['', Validators.required],
    lastname: ['', Validators.required],
    firstname: ['', Validators.required],
    country: ['', Validators.required],
    });
  constructor(private authService: AuthService,private fb: FormBuilder,private router: Router ){
    
  }
  register(){
    let registerBody = {
      username: this.form.value.username,
      password: this.form.value.password,
      lastname: this.form.value.lastname,
      firstname: this.form.value.firstname,
      country: this.form.value.country,
    };
   if(registerBody.username=="" || registerBody.password=="" || registerBody.lastname=="" || registerBody.firstname=="" || registerBody.country==""){
      alert("Faltan campos por llenar");
   }else{
    this.authService.registerUser(registerBody);
   }
    
    
  }
  login(){
    this.router.navigateByUrl('/login')
  }
}
