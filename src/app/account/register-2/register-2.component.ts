import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'
import { AuthService } from '@/app/services/auth.service'
import { user } from '@/app/models/user.model'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-register-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule, FormsModule],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- title-->
        <h4 class="mt-3">Free Sign Up</h4>
        <p class="text-muted mb-4">
          Don't have an account? Create your account, it takes less than a
          minute
        </p>

        <!-- form -->
        <form (ngSubmit)="onSubmit()" action="#">
          <div class="mb-3">
            <label for="fullname" class="form-label">First Name</label>
            <input
              class="form-control"
              type="text"
              id="first_name"
              name="first_name"
              [(ngModel)] ="currentUser.first_name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="last_name" class="form-label">Last Name</label>
            <input
              class="form-control"
              type="text"
              id="last_name"
              name="last_name"
              [(ngModel)] ="currentUser.last_name"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="emailaddress" class="form-label">Email address</label>
            <input
              class="form-control"
              type="email"
              id="emailaddress"
              [(ngModel)] ="currentUser.email"
              name="emailaddress"
              required
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              class="form-control"
              type="password"
              required
              id="password"
              name="password"
              [(ngModel)] ="currentUser.password"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="checkbox-signup"
              />
              <label class="form-check-label" for="checkbox-signup"
                >I accept
                <a href="javascript: void(0);" class="text-muted"
                  >Terms and Conditions</a
                ></label
              >
            </div>
          </div>
          <div class="mb-0 d-grid text-center">
            <button class="btn btn-primary" type="submit">
              <i class="mdi mdi-account-circle"></i> Sign Up
            </button>
          </div>
          <!-- social-->
          <div class="text-center mt-4">
            <p class="text-muted font-16">Sign up using</p>
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
            Already have account?
            <a routerLink="/pages-login-2" class="text-muted ms-1"
              ><b>Log In</b></a
            >
          </p>
        </footer>
      </ng-template>
    </app-account-wrapper2>
  `,
  styles: ``,
})
export class Register2Component implements OnInit {
  currentUser: user = new user();
  constructor(private authService:AuthService) {
    
  }
  
  ngOnInit(): void {
    
  }

  onSubmit():void {
    this.authService.register(this.currentUser);
  }
}
