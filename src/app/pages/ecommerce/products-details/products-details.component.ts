import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { StocksComponent } from './components/stocks.component'

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [PagetitleComponent, StocksComponent],
  template: `
    <app-pagetitle
      title="Product Details"
      subtitle="Ecommerce"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-5">
                <!-- Product image -->
                <a href="javascript: void(0);" class="text-center d-block mb-4">
                  <img
                    src="{{ displayImage }}"
                    class="img-fluid"
                    style="max-width: 280px"
                    alt="Product-img"
                  />
                </a>

                <div class="d-lg-flex d-none justify-content-center">
                  @for (img of images; track $index) {
                    <a
                      href="javascript: void(0);"
                      class="ms-2"
                      (click)="changeImage($index)"
                      (mouseover)="changeImage($index)"
                    >
                      <img
                        src="{{ img }}"
                        class="img-fluid img-thumbnail p-2"
                        style="max-width: 75px"
                        alt="Product-img"
                      />
                    </a>
                  }
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-7">
                <form class="ps-lg-4">
                  <!-- Product title -->
                  <h3 class="mt-0">
                    Amazing Modern Chair (Orange)
                    <a href="javascript: void(0);" class="text-muted"
                      ><i class="mdi mdi-square-edit-outline ms-2"></i
                    ></a>
                  </h3>
                  <p class="mb-1">Added Date: 09/12/2018</p>
                  <p class="font-16">
                    <span class="text-warning mdi mdi-star"></span>
                    <span class="text-warning mdi mdi-star"></span>
                    <span class="text-warning mdi mdi-star"></span>
                    <span class="text-warning mdi mdi-star"></span>
                    <span class="text-warning mdi mdi-star"></span>
                  </p>

                  <!-- Product stock -->
                  <div class="mt-3">
                    <h4>
                      <span class="badge badge-success-lighten">Instock</span>
                    </h4>
                  </div>

                  <!-- Product description -->
                  <div class="mt-4">
                    <h6 class="font-14">Retail Price:</h6>
                    <h3>$139.58</h3>
                  </div>

                  <!-- Quantity -->
                  <div class="mt-4">
                    <h6 class="font-14">Quantity</h6>
                    <div class="d-flex">
                      <input
                        type="number"
                        min="1"
                        value="1"
                        class="form-control"
                        placeholder="Qty"
                        style="width: 90px"
                      />
                      <button type="button" class="btn btn-danger ms-2">
                        <i class="mdi mdi-cart me-1"></i> Add to cart
                      </button>
                    </div>
                  </div>

                  <!-- Product description -->
                  <div class="mt-4">
                    <h6 class="font-14">Description:</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>

                  <!-- Product information -->
                  <div class="mt-4">
                    <div class="row">
                      <div class="col-md-4">
                        <h6 class="font-14">Available Stock:</h6>
                        <p class="text-sm lh-150">1784</p>
                      </div>
                      <div class="col-md-4">
                        <h6 class="font-14">Number of Orders:</h6>
                        <p class="text-sm lh-150">5,458</p>
                      </div>
                      <div class="col-md-4">
                        <h6 class="font-14">Revenue:</h6>
                        <p class="text-sm lh-150">$8,57,014</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- end col -->
            </div>
            <!-- end row-->

            <app-stocks></app-stocks>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class ProductsDetailsComponent {
  displayImage = 'assets/images/products/product-5.jpg'
  images = [
    'assets/images/products/product-5.jpg',
    'assets/images/products/product-1.jpg',
    'assets/images/products/product-6.jpg',
    'assets/images/products/product-3.jpg',
  ]

  changeImage(id: number) {
    this.displayImage = this.images[id]
  }
}
