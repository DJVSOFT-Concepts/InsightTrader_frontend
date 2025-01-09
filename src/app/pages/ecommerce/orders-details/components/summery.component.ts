import { Component, Input } from '@angular/core'
import { OrderDetailsItem } from '@core/model/ecommerce.model'

@Component({
  selector: 'app-summery',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mb-3">Order Summary</h4>

        <div class="table-responsive">
          <table class="table mb-0">
            <thead class="table-light">
              <tr>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grand Total :</td>
                <td>{{ data.gross_total }}</td>
              </tr>
              <tr>
                <td>Shipping Charge :</td>
                <td>{{ data.shipping_charge }}</td>
              </tr>
              <tr>
                <td>Estimated Tax :</td>
                <td>{{ data.tax }}</td>
              </tr>
              <tr>
                <th>Total :</th>
                <th>{{ data.net_total }}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
    </div>
  `,
  styles: ``,
})
export class SummeryComponent {
  @Input() data!: OrderDetailsItem
}
