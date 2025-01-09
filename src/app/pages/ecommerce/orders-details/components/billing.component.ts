import { Component, Input } from '@angular/core'
import { Billing } from '@core/model/ecommerce.model'

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mb-3">Billing Information</h4>

        <ul class="list-unstyled mb-0">
          <li>
            <p class="mb-2">
              <span class="fw-bold me-2">Payment Type:</span> {{ data.type }}
            </p>
            <p class="mb-2">
              <span class="fw-bold me-2">Provider:</span> {{ data.provider }}
            </p>
            <p class="mb-2">
              <span class="fw-bold me-2">Valid Date:</span> {{ data.valid }}
            </p>
            <p class="mb-0"><span class="fw-bold me-2">CVV:</span> xxx</p>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class BillingComponent {
  @Input() data!: Billing
}
