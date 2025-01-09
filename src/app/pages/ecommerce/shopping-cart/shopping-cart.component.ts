import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { cart } from '@core/data'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [PagetitleComponent, RouterModule],
  template: `
    <app-pagetitle
      title="Shopping Cart"
      subtitle="Ecommerce"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <div class="table-responsive">
                  <table
                    class="table table-borderless table-nowrap table-centered mb-0"
                  >
                    <thead class="table-light">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th style="width: 50px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (data of cartList; track $index) {
                        <tr>
                          <td>
                            <img
                              src="{{ data.image }}"
                              alt="contact-img"
                              title="contact-img"
                              class="rounded me-3"
                              height="64"
                            />
                            <p class="m-0 d-inline-block align-middle font-16">
                              <a
                                routerLink="/apps-ecommerce-products-details"
                                class="text-body"
                                >{{ data.name }}</a
                              >
                              <br />
                              <small class="me-2"
                                ><b>Size:</b> {{ data.size }}
                              </small>
                              <small><b>Color:</b> {{ data.color }} </small>
                            </p>
                          </td>
                          <td>$ {{ data.price }}</td>
                          <td>
                            <input
                              type="number"
                              min="1"
                              value="{{ data.qty }}"
                              class="form-control"
                              placeholder="Qty"
                              style="width: 90px"
                              (change)="changeQty($event, $index)"
                            />
                          </td>
                          <td>$ {{ data.total }}</td>
                          <td>
                            <a
                              href="javascript:void(0);"
                              class="action-icon"
                              (click)="removeCart($index)"
                            >
                              <i class="mdi mdi-delete"></i
                            ></a>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
                <!-- end table-responsive-->

                <!-- Add note input-->
                <div class="mt-3">
                  <label for="example-textarea" class="form-label"
                    >Add a Note:</label
                  >
                  <textarea
                    class="form-control"
                    id="example-textarea"
                    rows="3"
                    placeholder="Write some note.."
                  ></textarea>
                </div>

                <!-- action buttons-->
                <div class="row mt-4">
                  <div class="col-sm-6">
                    <a
                      routerLink="/apps-ecommerce-products"
                      class="btn text-muted d-none d-sm-inline-block btn-link fw-semibold"
                    >
                      <i class="mdi mdi-arrow-left"></i> Continue Shopping
                    </a>
                  </div>
                  <!-- end col -->
                  <div class="col-sm-6">
                    <div class="text-sm-end">
                      <a
                        routerLink="/apps-ecommerce-checkout"
                        class="btn btn-danger"
                      >
                        <i class="mdi mdi-cart-plus me-1"></i> Checkout
                      </a>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row-->
              </div>
              <!-- end col -->

              <div class="col-lg-4">
                <div class="border p-3 mt-4 mt-lg-0 rounded">
                  <h4 class="header-title mb-3">Order Summary</h4>

                  <div class="table-responsive">
                    <table class="table mb-0">
                      <tbody>
                        <tr>
                          <td>Grand Total :</td>
                          <td>$ {{ grandTotal }}</td>
                        </tr>
                        <tr>
                          <td>Discount :</td>
                          <td>- $ {{ discountamount }}</td>
                        </tr>
                        <tr>
                          <td>Shipping Charge :</td>
                          <td>$ {{ shipping }}</td>
                        </tr>
                        <tr>
                          <td>Estimated Tax :</td>
                          <td>$ {{ tax }}</td>
                        </tr>
                        <tr>
                          <th>Total :</th>
                          <th>$ {{ net_total }}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- end table-responsive -->
                </div>

                <div class="alert alert-warning mt-3" role="alert">
                  Use coupon code <strong>HYPBM</strong> and get 10% discount !
                </div>

                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Coupon code"
                    aria-label="Recipient's username"
                  />
                  <button class="input-group-text btn-light" type="button">
                    Apply
                  </button>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class ShoppingCartComponent {
  cartList = cart

  grandTotal: number = 0
  discount: number = 0.1
  discountamount!: number
  shipping: number = 25
  tax: number = 19.22
  net_total!: number

  ngOnInit(): void {
    this.calculatePrice()
  }

  // Calculate price
  calculatePrice() {
    this.grandTotal = 0
    this.cartList.forEach((element) => {
      this.grandTotal += element.total
      this.grandTotal = parseFloat(this.grandTotal.toFixed(2))
      this.discountamount = parseFloat(
        (this.grandTotal * this.discount).toFixed(2)
      )
      this.net_total = parseFloat(
        (
          this.grandTotal -
          this.discountamount +
          this.shipping +
          this.tax
        ).toFixed(1)
      )
    })
  }

  changeQty(event: Event, id: number) {
    const qty = parseInt((event.target as HTMLInputElement).value)
    this.cartList[id].total = parseFloat(
      (this.cartList[id].price * qty).toFixed(2)
    )
    this.cartList[id].qty = qty
    this.calculatePrice()
  }

  // Remove From Quantity
  removeCart(id: number) {
    this.cartList.splice(id, 1)
    this.calculatePrice()
  }
}
