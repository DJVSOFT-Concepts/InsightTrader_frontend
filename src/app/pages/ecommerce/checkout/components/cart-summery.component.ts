import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-cartsummery',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="table-responsive">
      <table class="table table-nowrap table-centered mb-0">
        <tbody>
          <tr>
            <td>
              <img
                src="assets/images/products/product-1.jpg"
                alt="contact-img"
                title="contact-img"
                class="rounded me-2"
                height="48"
              />
              <p class="m-0 d-inline-block align-middle">
                <a
                  routerLink="/apps-ecommerce-products-details"
                  class="text-body fw-semibold"
                >
                  Amazing Modern Chair</a
                >
                <br />
                <small> 5 x $148.66</small>
              </p>
            </td>
            <td class="text-end">$743.30</td>
          </tr>
          <tr>
            <td>
              <img
                src="assets/images/products/product-2.jpg"
                alt="contact-img"
                title="contact-img"
                class="rounded me-2"
                height="48"
              />
              <p class="m-0 d-inline-block align-middle">
                <a
                  routerLink="/apps-ecommerce-products-details"
                  class="text-body fw-semibold"
                  >Designer Awesome Chair</a
                >
                <br />
                <small>2 x $99.00</small>
              </p>
            </td>
            <td class="text-end">$198.00</td>
          </tr>
          <tr>
            <td>
              <img
                src="assets/images/products/product-3.jpg"
                alt="contact-img"
                title="contact-img"
                class="rounded me-2"
                height="48"
              />
              <p class="m-0 d-inline-block align-middle">
                <a
                  routerLink="/apps-ecommerce-products-details"
                  class="text-body fw-semibold"
                  >Biblio Plastic Armchair</a
                >
                <br />
                <small>1 x $129.99</small>
              </p>
            </td>
            <td class="text-end">$129.99</td>
          </tr>
          <tr class="text-end">
            <td>
              <h6 class="m-0">Sub Total:</h6>
            </td>
            <td class="text-end">$1071.29</td>
          </tr>
          <tr class="text-end">
            <td>
              <h6 class="m-0">Shipping:</h6>
            </td>
            <td class="text-end">FREE</td>
          </tr>
          <tr class="text-end">
            <td>
              <h5 class="m-0">Total:</h5>
            </td>
            <td class="text-end fw-semibold">$1071.29</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- end table-responsive -->
  `,
  styles: ``,
})
export class CartsummeryComponent {}
