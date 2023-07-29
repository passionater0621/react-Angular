import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
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
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/home']);
    })
  }
}
