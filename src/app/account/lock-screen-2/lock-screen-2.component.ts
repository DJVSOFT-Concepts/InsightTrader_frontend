import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'

@Component({
  selector: 'app-lock-screen-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- User pic with title-->
        <div class="text-center w-75 m-auto">
          <img
            src="assets/images/users/avatar-1.jpg"
            height="64"
            alt="user-image"
            class="rounded-circle shadow"
          />
          <h4 class="text-dark-50 text-center mt-3 fw-bold">Hi ! Michael</h4>
          <p class="text-muted mb-4">
            Enter your password to access the admin.
          </p>
        </div>

        <!-- form -->
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
          <div class="mb-0 text-center d-grid">
            <button class="btn btn-primary" type="submit">
              <i class="mdi mdi-login"></i> Log In
            </button>
          </div>
          <!-- social-->
          <div class="text-center mt-4">
            <p class="text-muted font-16">Authentication in with</p>
            <ul class="social-list list-inline mt-3">
              <li class="list-inline-item  me-2 ms-2">
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
        <!-- Footer-->
        <footer class="footer footer-alt">
          <p class="text-muted">
            Not you? return
            <a routerLink="/pages-login-2" class="text-muted ms-1"
              ><b>Sign In</b></a
            >
          </p>
        </footer>
      </ng-template>
    </app-account-wrapper2>
  `,
  styles: ``,
})
export class LockScreen2Component {}
