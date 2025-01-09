import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AccountWrapperComponent } from '@auth/account-wrapper.component'

@Component({
  selector: 'app-confirm-mail',
  standalone: true,
  imports: [CommonModule, AccountWrapperComponent],
  template: `
    <app-account-wrapper>
      <div class="text-center m-auto">
        <img
          src="assets/images/svg/mail_sent.svg"
          alt="mail sent image"
          height="64"
        />
        <h4 class="text-dark-50 text-center mt-4 fw-bold">
          Please check your email
        </h4>
        <p class="text-muted mb-4">
          A email has been send to <b>youremail&#64;domain.com</b>. Please check
          for an email from company and click on the included link to reset your
          password.
        </p>
      </div>

      <form action="/">
        <div class="mb-0 text-center">
          <button class="btn btn-primary" type="submit">
            <i class="mdi mdi-home me-1"></i> Back to Home
          </button>
        </div>
      </form>
    </app-account-wrapper>
  `,
  styles: ``,
})
export class ConfirmMailComponent {}
