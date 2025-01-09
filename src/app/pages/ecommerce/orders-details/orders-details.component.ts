import { Component } from '@angular/core'
import { OrderDetailsItem } from '@core/model/ecommerce.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { ItemsComponent } from './components/items.component'
import { ShippingComponent } from './components/shipping.component'
import { BillingComponent } from './components/billing.component'
import { DeliveryComponent } from './components/delivery.component'
import { SummeryComponent } from './components/summery.component'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-orders-details',
  standalone: true,
  imports: [
    PagetitleComponent,
    ItemsComponent,
    SummeryComponent,
    ShippingComponent,
    BillingComponent,
    DeliveryComponent,
    NgbTooltipModule,
  ],
  template: `<app-pagetitle
      title="Order Details"
      subtitle="Ecommerce"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row justify-content-center">
      <div class="col-lg-7 col-md-10 col-sm-11">
        <div class="horizontal-steps mt-4 mb-4 pb-5" id="tooltip-container">
          <div class="horizontal-steps-content">
            <div class="step-item">
              <span placement="bottom" ngbTooltip="20/08/2018 07:24 PM"
                >Order Placed</span
              >
            </div>
            <div class="step-item current">
              <span placement="bottom" ngbTooltip="21/08/2018 11:32 AM"
                >Packed</span
              >
            </div>
            <div class="step-item">
              <span>Shipped</span>
            </div>
            <div class="step-item">
              <span>Delivered</span>
            </div>
          </div>

          <div class="process-line" style="width: 33%"></div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-8">
        <app-items [data]="order.items"></app-items>
      </div>
      <!-- end col -->

      <div class="col-lg-4">
        <app-summery [data]="order"></app-summery>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-4">
        <app-shipping [data]="order.shipping"></app-shipping>
      </div>
      <!-- end col -->

      <div class="col-lg-4">
        <app-billing [data]="order.billing"></app-billing>
      </div>
      <!-- end col -->

      <div class="col-lg-4">
        <app-delivery [data]="order.delivery"></app-delivery>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->`,
  styles: ``,
})
export class OrdersDetailsComponent {
  order: OrderDetailsItem = {
    id: '#BM31',
    order_status: 'Packed',
    items: [
      {
        id: 1,
        name: 'The Military Duffle Bag',
        quantity: 3,
        price: '$128',
        total: '$384',
      },
      {
        id: 2,
        name: 'Mountain Basket Ball',
        quantity: 1,
        price: '$199',
        total: '$199',
      },
      {
        id: 3,
        name: 'Wavex Canvas Messenger Bag',
        quantity: 5,
        price: '$180',
        total: '$900',
      },
      {
        id: 4,
        name: 'The Utility Shirt',
        quantity: 2,
        price: '$79',
        total: '$158',
      },
    ],
    gross_total: '$1641',
    shipping_charge: '$23',
    tax: '$19.22',
    net_total: '$1683.22',
    shipping: {
      provider: 'Stanley Jones',
      address_1: '795 Folsom Ave, Suite 600',
      address_2: 'San Francisco, CA 94107',
      phone: '(123) 456-7890 ',
      mobile: '(+01) 12345 67890',
    },
    billing: {
      type: 'Credit Card',
      provider: 'Visa ending in 2851',
      valid: '02/2020',
    },
    delivery: {
      provider: 'UPS Delivery',
      order_id: '#BM31',
      payment_mode: 'COD',
    },
  }
}
