import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapperComponent } from '@auth/account-wrapper.component'

@Component({
  selector: 'app-recoverpw',
  standalone: true,
  imports: [CommonModule, AccountWrapperComponent, RouterModule],
  template: `
    <app-account-wrapper>
      <div class="text-center w-75 m-auto">
        <h4 class="text-dark-50 text-center mt-0 fw-bold">Reset Password</h4>
        <p class="text-muted mb-4">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>
      </div>

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

        <div class="mb-0 text-center">
          <button class="btn btn-primary" type="submit">Reset Password</button>
        </div>
      </form>

      <!-- Pass bottomLinks content -->
      <ng-template #bottomLinks>
        <div class="row mt-3">
          <div class="col-12 text-center">
            <p class="text-muted">
              Back to
              <a routerLink="/pages-login" class="text-muted ms-1"
                ><b>Log In</b></a
              >
            </p>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </ng-template>
    </app-account-wrapper>
  `,
  styles: ``,
})
export class RecoverpwComponent {}
