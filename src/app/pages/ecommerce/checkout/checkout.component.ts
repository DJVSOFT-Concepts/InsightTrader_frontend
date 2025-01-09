import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { CartsummeryComponent } from './components/cart-summery.component'
import { BillingComponent } from './components/billing.component'
import { ShippingComponent } from './components/shipping.component'
import { PaymentComponent } from './components/payment.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    PagetitleComponent,
    CartsummeryComponent,
    BillingComponent,
    ShippingComponent,
    PaymentComponent,
    NgbNavModule,
  ],
  template: ` <app-pagetitle
      title="Checkout"
      subtitle="Ecommerce"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- Checkout Steps -->
            <ul
              ngbNav
              #nav="ngbNav"
              [(activeId)]="activeId"
              class="nav nav-pills bg-nav-pills nav-justified mb-3"
            >
              <li [ngbNavItem]="1" class="nav-item">
                <a ngbNavLink class="nav-link rounded-0">
                  <i class="mdi mdi-account-circle font-18"></i>
                  <span class="d-none d-lg-block">Billing Info</span>
                </a>
                <ng-template ngbNavContent>
                  <app-billing (tabChanged)="changeTab($event)"></app-billing>
                </ng-template>
              </li>
              <li [ngbNavItem]="2" class="nav-item">
                <a ngbNavLink class="nav-link rounded-0">
                  <i class="mdi mdi-truck-fast font-18"></i>
                  <span class="d-none d-lg-block">Shipping Info</span>
                </a>
                <ng-template ngbNavContent>
                  <app-shipping (tabChanged)="changeTab($event)"></app-shipping>
                </ng-template>
              </li>
              <li [ngbNavItem]="3" class="nav-item">
                <a ngbNavLink class="nav-link rounded-0">
                  <i class="mdi mdi-cash-multiple font-18"></i>
                  <span class="d-none d-lg-block">Payment Info</span>
                </a>
                <ng-template ngbNavContent>
                  <app-payment></app-payment>
                </ng-template>
              </li>
            </ul>

            <!-- Steps Information -->
            <div class="tab-content">
              <!-- tab Content-->
              <div class="tab-pane show active" id="billing-information">
                <div class="row">
                  <div class="col-lg-8">
                    <div [ngbNavOutlet]="nav"></div>
                  </div>
                  <div class="col-lg-4">
                    <div class="border p-3 mt-4 mt-lg-0 rounded">
                      <h4 class="header-title mb-3">Order Summary</h4>
                      <app-cartsummery></app-cartsummery>
                    </div>
                    <!-- end .border-->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row-->
              </div>
            </div>
            <!-- end tab content-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->`,
  styles: ``,
})
export class CheckoutComponent {
  activeId: number = 1
  changeTab(event: number) {
    this.activeId = event
  }
}
