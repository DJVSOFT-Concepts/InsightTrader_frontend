import { Component } from '@angular/core'

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  template: `
    <div class="row">
      <div class="col-sm-4">
        <div class="card tilebox-one">
          <div class="card-body">
            <i class="ri-shopping-basket-2-line float-end text-muted"></i>
            <h6 class="text-muted text-uppercase mt-0">Orders</h6>
            <h2 class="m-b-20">1,587</h2>
            <span class="badge bg-primary"> +11% </span>
            <span class="text-muted"> From previous period</span>
          </div>
          <!-- end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->

      <div class="col-sm-4">
        <div class="card tilebox-one">
          <div class="card-body">
            <i class="ri-archive-line float-end text-muted"></i>
            <h6 class="text-muted text-uppercase mt-0">Revenue</h6>
            <h2 class="m-b-20">$<span>46,782</span></h2>
            <span class="badge bg-danger"> -29% </span>
            <span class="text-muted"> From previous period</span>
          </div>
          <!-- end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->

      <div class="col-sm-4">
        <div class="card tilebox-one">
          <div class="card-body">
            <i class="ri-vip-diamond-line float-end text-muted"></i>
            <h6 class="text-muted text-uppercase mt-0">Product Sold</h6>
            <h2 class="m-b-20">1,890</h2>
            <span class="badge bg-primary"> +89% </span>
            <span class="text-muted"> Last year</span>
          </div>
          <!-- end card-body-->
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class StatisticsComponent {}
