import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'

@Component({
  selector: 'app-confirm-mail-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- email send icon with text-->
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
            A email has been send to <b>youremail&#64;domain.com</b>. Please
            check for an email from company and click on the included link to
            reset your password.
          </p>
        </div>

        <!-- form -->
        <form action="/">
          <div class="mb-0 d-grid text-center">
            <button class="btn btn-primary" type="submit">
              <i class="mdi mdi-home me-1"></i> Back to Home
            </button>
          </div>
        </form>
        <!-- end form-->
      </div>

      <ng-template #bottomLinks>
        <!-- Footer-->
        <footer class="footer footer-alt">
          <p class="text-muted">
            2018 -
            {{ year }}
            © Hyper - Coderthemes.com
          </p>
        </footer>
      </ng-template>
    </app-account-wrapper2>
  `,
  styles: ``,
})
export class ConfirmMail2Component {
  year = new Date().getFullYear()
}
