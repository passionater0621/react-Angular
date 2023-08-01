import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { EmailValidator } from 'src/app/shared/validators/app-email.validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, EmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rePass: ['', [Validators.required, Validators.minLength(6)]],
  });


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }
  register() {

    const { username, email, password, rePass } = this.form.value

    if (password !== rePass) {
      return alert('Password`s dont match!');
    }

    this.userService.register(username!, email!, password!, rePass!).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response))
        this.router.navigate(['/home']);
      },
      error: (error) => {
        return alert(error.error.error.message)
      }
    })
  }
}
