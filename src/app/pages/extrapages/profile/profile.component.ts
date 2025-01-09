import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { UserDetailComponent } from './components/user-detail.component'
import { StatisticsComponent } from './components/statistics.component'
import { SellerInfoComponent } from './components/seller-info.component'
import { ProductsComponent } from './components/products.component'
import { OrderChartComponent } from './components/order-chart.component'
import { MessagesComponent } from '@component/messages/messages.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PagetitleComponent,
    UserDetailComponent,
    StatisticsComponent,
    SellerInfoComponent,
    ProductsComponent,
    OrderChartComponent,
    MessagesComponent,
  ],
  template: `
    <app-pagetitle
      title="Profile"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-sm-12">
        <!-- Profile -->
        <app-user-detail></app-user-detail>
        <!--end profile/ card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4">
        <!-- Personal-Information -->
        <app-seller-info></app-seller-info>
        <!-- Personal-Information -->

        <!-- Toll free number box-->
        <div class="card text-white bg-info overflow-hidden">
          <div class="card-body">
            <div class="toll-free-box text-center">
              <h4 class="text-reset">
                <i class="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
              </h4>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
        <!-- End Toll free number box-->

        <!-- Messages-->
        <app-messages />
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-8">
        <!-- Chart-->
        <app-order-chart></app-order-chart>
        <!-- End Chart-->

        <app-statistics></app-statistics>

        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">My Products</h4>

            <app-products></app-products>
            <!-- end table responsive-->
          </div>
          <!-- end col-->
        </div>
        <!-- end row-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class ProfileComponent {}
