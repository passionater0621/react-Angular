import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rePass: ['', [Validators.required]],
  });


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }
  register() {

    const { username, email, password, rePass } = this.form.value

    this.userService.register(username!, email!, password!, rePass!).subscribe((response) => {
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(['/home']);
    })
  }
}
