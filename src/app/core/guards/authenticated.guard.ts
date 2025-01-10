import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const accessToken = localStorage.getItem('token')
    if (!accessToken) {
      this.router.navigate(['/pages-login-2'])
      return false
    }
    return true
  }
}
