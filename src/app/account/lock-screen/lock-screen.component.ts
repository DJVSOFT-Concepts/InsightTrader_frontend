import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapperComponent } from '@auth/account-wrapper.component'

@Component({
  selector: 'app-lock-screen',
  standalone: true,
  imports: [CommonModule, AccountWrapperComponent, RouterModule],
  template: `
    <app-account-wrapper>
      <div class="text-center w-75 m-auto">
        <img
          src="assets/images/users/avatar-1.jpg"
          height="64"
          alt="user-image"
          class="rounded-circle shadow"
        />
        <h4 class="text-dark-50 text-center mt-3 fw-bold">Hi ! Michael</h4>
        <p class="text-muted mb-4">Enter your password to access the admin.</p>
      </div>

      <form action="#">
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            class="form-control"
            type="password"
            required=""
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div class="mb-0 text-center">
          <button class="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>

      <ng-template #bottomLinks>
        <div class="row mt-3">
          <div class="col-12 text-center">
            <p class="text-muted">
              Not you? return
              <a routerLink="/pages-login" class="text-muted ms-1"
                ><b>Sign In</b></a
              >
            </p>
          </div>
          <!-- end col -->
        </div>
      </ng-template>
      <!-- end row -->
    </app-account-wrapper>
  `,
  styles: ``,
})
export class LockScreenComponent {}
