import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { AccountWrapperComponent } from '@auth/account-wrapper.component'
import { BgCirclesComponent } from '@component/bg-circles/bg-circles.component'
import { AuthenticationService } from '@core/service/auth.service'
import { Store } from '@ngrx/store'
import { login } from '@store/authentication/authentication.actions'
import { first } from 'rxjs'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    AccountWrapperComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <app-account-wrapper>
      <div class="text-center w-75 m-auto">
        <h4 class="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
        <p class="text-muted mb-4">
          Enter your email address and password to access admin panel.
        </p>
      </div>

      <form action="#" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="emailaddress" class="form-label">Email address</label>
          <input
            class="form-control"
            type="email"
            id="emailaddress"
            required=""
            formControlName="email"
            placeholder="Enter your email"
          />
        </div>

        <div class="mb-3">
          <a routerLink="/pages-recoverpw" class="text-muted float-end"
            ><small>Forgot your password?</small></a
          >
          <label for="password" class="form-label">Password</label>
          <div class="input-group input-group-merge">
            <input
              [type]="showPassword ? 'text' : 'password'"
              id="password"
              class="form-control"
              formControlName="password"
              placeholder="Enter your password"
            />
            <div
              class="input-group-text"
              [ngClass]="{ 'show-password': showPassword }"
              (click)="showPassword = !showPassword"
            >
              <span class="password-eye"></span>
            </div>
          </div>
        </div>

        <div class="mb-3 mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="checkbox-signin"
              checked
            />
            <label class="form-check-label" for="checkbox-signin"
              >Remember me</label
            >
          </div>
        </div>

        <div class="mb-3 mb-0 text-center">
          <button class="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>

      <!-- Pass bottomLinks content -->
      <ng-template #bottomLinks>
        <div class="text-center mt-3">
          <p class="text-muted">
            Don't have an account?
            <a routerLink="/pages-register" class="text-muted ms-1"
              ><b>Sign Up</b></a
            >
          </p>
        </div>
      </ng-template>
    </app-account-wrapper>

    <!-- end page -->
  `,
  styles: ``,
})
export class LoginComponent {
  loginForm!: FormGroup
  formSubmitted: boolean = false
  showPassword: boolean = false

  private store = inject(Store)

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {
    if (this.authenticationService.user) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['hyper@coderthemes.com', [Validators.required, Validators.email]],
      password: ['Hyper', Validators.required],
    })
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() {
    return this.loginForm.controls
  }

  /**
   * On submit form
   */
  onSubmit(): void {
    this.formSubmitted = true
    if (this.loginForm.valid) {
      const email = this.formValues['email'].value // Get the username from the form
      const password = this.formValues['password'].value // Get the password from the form

      // Login Api
      this.store.dispatch(login({ email: email, password: password }))
    }
  }
}
