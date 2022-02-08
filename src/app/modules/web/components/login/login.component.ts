import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private validateEmail =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Validaciones
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern(this.validateEmail)],
      ],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    console.log(this.loginForm.value);
    this.authService
      .login('login/', {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe(
        (res) => {
          console.log(res);

          localStorage.setItem('token', res.token);
          this.router.navigate(['/manage']);
        },
        (error) => {
          console.log(error);
        }
      );
    this.loginForm.reset();
  }

  // getters de formGroup

  get email(): AbstractControl | any {
    return this.loginForm.get('email');
  }
  get password(): AbstractControl | any {
    return this.loginForm.get('password');
  }
}
