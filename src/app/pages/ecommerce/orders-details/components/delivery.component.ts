import { Component, Input } from '@angular/core'
import { DeliveryInfoItem } from '@core/model/ecommerce.model'

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mb-3">Delivery Info</h4>

        <div class="text-center">
          <i class="mdi mdi-truck-fast h2 text-muted"></i>
          <h5>
            <b>{{ data.provider }}</b>
          </h5>
          <p class="mb-1"><b>Order ID :</b> {{ data.order_id }}</p>
          <p class="mb-0"><b>Payment Mode :</b> {{ data.payment_mode }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class DeliveryComponent {
  @Input() data!: DeliveryInfoItem
}
