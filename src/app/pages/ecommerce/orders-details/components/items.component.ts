import { Component, Input, input } from '@angular/core'
import { OrderDetailsItem, OrderItem } from '@core/model/ecommerce.model'

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mb-3">Items from Order #12537</h4>

        <div class="table-responsive">
          <table class="table mb-0">
            <thead class="table-light">
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              @for (item of data; track $index) {
                <tr>
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.total }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
    </div>
  `,
  styles: ``,
})
export class ItemsComponent {
  @Input() data!: OrderItem[]
}
