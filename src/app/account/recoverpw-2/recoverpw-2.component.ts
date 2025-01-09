import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'

@Component({
  selector: 'app-recoverpw-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- title-->
        <h4>Reset Password</h4>
        <p class="text-muted mb-4">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>

        <!-- form -->
        <form action="#">
          <div class="mb-3">
            <label for="emailaddress" class="form-label">Email address</label>
            <input
              class="form-control"
              type="email"
              id="emailaddress"
              required=""
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-0 text-center d-grid">
            <button class="btn btn-primary" type="submit">
              <i class="mdi mdi-lock-reset"></i> Reset Password
            </button>
          </div>
        </form>
        <!-- end form-->
      </div>

      <ng-template #bottomLinks>
        <!-- Footer-->
        <footer class="footer footer-alt">
          <p class="text-muted">
            Back to
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
export class Recoverpw2Component {}
