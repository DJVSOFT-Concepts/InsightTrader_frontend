import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CardTitleComponent, SimplebarAngularModule],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Transactions"
        [menuItems]="[{ label: 'Settings' }, { label: 'Action' }]"
      ></card-title>

      <ngx-simplebar
        class="card-body py-0 mb-3"
        data-simplebar
        style="max-height: 315px"
      >
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-up text-danger font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Purchased Hyper Admin Template</a
            >
            <p class="mb-0 text-muted"><small>Today</small></p>
          </div>
          <div class="col-auto">
            <span class="text-danger fw-bold pe-2">-$489.30</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-down text-success font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Payment received Bootstrap Marketplace</a
            >
            <p class="mb-0 text-muted"><small>Yesterday</small></p>
          </div>
          <div class="col-auto">
            <span class="text-success fw-bold pe-2">+$1578.54</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-down text-success font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Freelance work - Shane</a
            >
            <p class="mb-0 text-muted"><small>16 Sep 2018</small></p>
          </div>
          <div class="col-auto">
            <span class="text-success fw-bold pe-2">+$247.5</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-up text-danger font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Hire new developer for work</a
            >
            <p class="mb-0 text-muted"><small>09 Sep 2018</small></p>
          </div>
          <div class="col-auto">
            <span class="text-danger fw-bold pe-2">-$185.14</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-down text-success font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Money received from paypal</a
            >
            <p class="mb-0 text-muted"><small>28 Aug 2018</small></p>
          </div>
          <div class="col-auto">
            <span class="text-success fw-bold pe-2">+$684.45</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-up text-danger font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Zairo landing purchased</a
            >
            <p class="mb-0 text-muted"><small>17 Aug 2018</small></p>
          </div>
          <div class="col-auto">
            <span class="text-danger fw-bold pe-2">-$21.00</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-up text-danger font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Purchased Ubold admin template</a
            >
            <p class="mb-0 text-muted"><small>17 Aug 2018</small></p>
          </div>
          <div class="col-auto">
            <span class="text-danger fw-bold pe-2">-$32.89</span>
          </div>
        </div>
        <div class="row py-1 align-items-center">
          <div class="col-auto">
            <i class="mdi mdi-arrow-collapse-down text-success font-18"></i>
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-body"
              >Interest received</a
            >
            <p class="mb-0 text-muted"><small>09 Sep 2018</small></p>
          </div>
          <div class="col-auto">
            <span class="text-success fw-bold pe-2">+$784.55</span>
          </div>
        </div>
      </ngx-simplebar>
      <!-- end slimscroll -->
    </div>
  `,
  styles: ``,
})
export class TransactionComponent {}
