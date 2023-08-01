import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmailValidator } from 'src/app/shared/validators/app-email.validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  form = this.fb.group({
    email: ['', [Validators.required, EmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  login() {
    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe((response) => {
      console.log(response)
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/home']);
    })
    
  }
}
