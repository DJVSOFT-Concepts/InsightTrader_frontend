import { AuthService } from '@/app/services/auth.service';
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule, Router } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule, FormsModule],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- title-->
        <h4 class="mt-0">Sign In</h4>
        <p class="text-muted mb-4">
          Enter your email address and password to access account.
        </p>

        <!-- form -->
        <form (ngSubmit)="login()">
          <div class="mb-3">
            <label for="emailaddress" class="form-label">Email address</label>
            <input
              class="form-control"
              type="email"
              id="emailaddress"
              name="emailaddress"
              [(ngModel)]="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <a routerLink="/pages-recoverpw-2" class="text-muted float-end"
              ><small>Forgot your password?</small></a
            >
            <label for="password" class="form-label">Password</label>
            <input
              class="form-control"
              type="password"
              [(ngModel)]="pwd"
              required
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="checkbox-signin"
              />
              <label class="form-check-label" for="checkbox-signin"
                >Remember me</label
              >
            </div>
          </div>
          <div class="d-grid mb-0 text-center">
            <button class="btn btn-primary" type="submit">
              <i class="mdi mdi-login"></i> Log In
            </button>
          </div>
          <!-- social-->
          <div class="text-center mt-4">
            <p class="text-muted font-16">Sign in with</p>
            <ul class="social-list list-inline mt-3">
              <li class="list-inline-item me-2 ms-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-primary text-primary"
                  ><i class="mdi mdi-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-danger text-danger"
                  ><i class="mdi mdi-google"></i
                ></a>
              </li>
              <li class="list-inline-item me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-info text-info"
                  ><i class="mdi mdi-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item me-2">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-secondary text-secondary"
                  ><i class="mdi mdi-github"></i
                ></a>
              </li>
            </ul>
          </div>
        </form>
        <!-- end form-->
      </div>

      <ng-template #bottomLinks>
        <footer class="footer footer-alt">
          <p class="text-muted">
            Don't have an account?
            <a routerLink="/pages-register-2" class="text-muted ms-1"
              ><b>Sign Up</b></a
            >
          </p>
        </footer>
      </ng-template>
    </app-account-wrapper2>
  `,
  styles: ``,
})
export class Login2Component {
  email:string = '';
  pwd:string = '';
  errorMessage:string | null = null;

  constructor(private authService:AuthService, private router: Router) {}

  login():void {
    this.authService.login(this.email, this.pwd);
  }
}
