import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import {Router} from '@angular/router';
import { user } from '@/app/models/user.model'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/stocks/';

  constructor(private http: HttpClient, private router:Router) {}

  register(user: user) {
    const registerUrl: string = `${this.apiUrl}register/`;
    this.http.post(registerUrl, user).pipe(
      tap((response) => console.log('Registered:', response)),
      catchError((error) => {
        console.error('Error:', error);
        return of(null);
      })
    ).subscribe();
  }

  login(email: string, password: string) {

    const loginUrl:string = `${this.apiUrl}login/`;
    const headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});     

    this.http.post<{refresh:string, access:string, first_name:string}>(loginUrl, {email: email, password:password},{headers}).subscribe(
      (response) => {
        console.log('Success:', response);
        localStorage.setItem('accessToken', response.access);
        localStorage.setItem('refreshToken',response.refresh);
        localStorage.setItem('first_name',response.first_name);


        this.router.navigate(['']);
      },
      (error) => {console.error('Error:', error)}
    );
  }
}
