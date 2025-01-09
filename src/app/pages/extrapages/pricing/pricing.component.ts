import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { PricingCardComponent } from '@component/pricing-card/pricing-card.component'
import { plans } from '@core/data'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, PagetitleComponent, PricingCardComponent],
  template: `
    <app-pagetitle
      title="Pricing"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row justify-content-center">
      <div class="col-xxl-10">
        <!-- Pricing Title-->
        <div class="text-center">
          <h3 class="mb-2">Our Plans and Pricing</h3>
          <p class="text-muted w-50 m-auto">
            We have plans and prices that fit your business perfectly. Make your
            client site a success with our products.
          </p>
        </div>

        <!-- Plans -->
        <app-pricing-card [pricingList]="pricingList"></app-pricing-card>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class PricingComponent {
  pricingList = plans
}
