import { Component, Input } from '@angular/core'
import { ShippingAddress } from '@core/model/ecommerce.model'

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mb-3">Shipping Information</h4>

        <h5>{{ data.provider }}</h5>

        <address class="mb-0 font-14 address-lg">
          {{ data.address_1 }}<br />
          {{ data.address_2 }}<br />
          <abbr title="Phone">P:</abbr> {{ data.phone }} <br />
          <abbr title="Mobile">M:</abbr> {{ data.mobile }}
        </address>
      </div>
    </div>
  `,
  styles: ``,
})
export class ShippingComponent {
  @Input() data!: ShippingAddress
}
