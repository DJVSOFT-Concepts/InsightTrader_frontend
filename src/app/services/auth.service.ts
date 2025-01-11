import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { of, Observable } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { user } from '@/app/models/user.model'
import { environment } from './environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(user: user) {
    const registerUrl: string = `${this.apiUrl}/users`
    this.http
      .post(registerUrl, user)
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            console.log('Login Successful:', response)
            // Save user and token to localStorage
            localStorage.setItem('user', JSON.stringify(response))
            localStorage.setItem('token', response.token)
            // Redirect to home page
            this.router.navigate(['/'])
          } else {
            console.error('Login failed: Invalid response')
          }
        }),
        catchError((error) => {
          console.error('Error:', error)
          return of(null)
        })
      )
      .subscribe()
  }

  login(email: string, password: string) : Observable<string | null> {
    const loginUrl: string = `${this.apiUrl}/users/login`
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    return this.http
      .post(loginUrl, { email, password }, { headers })
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            console.log('Login Successful:', response)
            // Save user and token to localStorage
            localStorage.setItem('user', JSON.stringify(response))
            localStorage.setItem('token', response.token)
            // Redirect to home page
            this.router.navigate(['/'])
          }
        }),
        catchError((error) => {
          // Handle server or validation errors

          let errorMessage = 'An error occurred during login. Please try again later.';
          if (error.status === 401) {
            let errorMessage = 'Invalid email or password. Please try again.';
            console.error('Invalid credentials:', error.error.message)
          } 
          return of(errorMessage); // Return the error message
        })
      );
    }
}
