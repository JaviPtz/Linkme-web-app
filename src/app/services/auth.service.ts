import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private HttpClient: HttpClient, private router: Router) {}

  register(data: { name: any; email: any; password: any; }): any {
    this.HttpClient.post<any>(`${environment.API_URL}register/`, {
      name: data.name,
      email: data.email,
      password: data.password
    }).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/login']);
      },
      err => {
        if (err.status === 422) {
          console.log(err.error.data);
        }
      });
  }

  login(query: string, data: { email: any; password: any; }): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.HttpClient.post<any>(url, data);
  }

  loggedIn(): boolean {
    // !!-> devuelve true si al expresion existe
    return !!localStorage.getItem('token');
  }

  logout(): void {
    this.HttpClient.get<any>(`${environment.API_URL}logout`).subscribe(
      (      res: any) => {
        console.log(res);
      },
      (      err: any) => {
        console.log(err);
      });
    localStorage.removeItem('token');
    this.router.navigate(['/app']);
  }

  /* getToken(): string {
    return localStorage.getItem('token');
  } */
}
