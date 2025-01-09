import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CardTitleComponent, SimplebarAngularModule],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="My Watchlist"
        [menuItems]="[
          { label: 'Refresh' },
          { label: 'Edit' },
          { label: 'Remove' }
        ]"
      ></card-title>

      <ngx-simplebar
        class="card-body pt-0 mb-2"
        data-simplebar
        style="max-height: 319px"
      >
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div class="avatar-sm rounded">
              <span
                class="avatar-title bg-warning-lighten text-warning border border-warning rounded-circle h3 my-0"
              >
                <i class="mdi mdi-currency-btc"></i>
              </span>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="mt-0 mb-1 font-16 fw-semibold">Bitcoin (BTC)</h4>
            <p class="mb-0 text-muted">$48,665.80</p>
          </div>
          <p class="mb-0 text-success">
            <i class="mdi mdi-trending-up me-1"></i>10%
          </p>
        </div>

        <hr />

        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div class="avatar-sm rounded">
              <span
                class="avatar-title bg-success-lighten text-success border border-success rounded-circle h3 my-0"
              >
                <i class="mdi mdi-currency-ngn"></i>
              </span>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="mt-0 mb-1 font-16 fw-semibold">Nigerian naira (NGN)</h4>
            <p class="mb-0 text-muted">$0.0024</p>
          </div>
          <p class="mb-0 text-danger">
            <i class="mdi mdi-trending-down me-1"></i>12%
          </p>
        </div>

        <hr />

        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div class="avatar-sm rounded">
              <span
                class="avatar-title bg-danger-lighten text-danger border border-danger rounded-circle h3 my-0"
              >
                <i class="mdi mdi-currency-gbp"></i>
              </span>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="mt-0 mb-1 font-16 fw-semibold">Pound sterling (GBP)</h4>
            <p class="mb-0 text-muted">$1.33</p>
          </div>
          <p class="mb-0 text-success">
            <i class="mdi mdi-trending-up me-1"></i>15%
          </p>
        </div>

        <hr />

        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div class="avatar-sm rounded">
              <span
                class="avatar-title bg-primary-lighten text-primary border border-primary rounded-circle h3 my-0"
              >
                <i class="mdi mdi-currency-ils"></i>
              </span>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="mt-0 mb-1 font-16 fw-semibold">Israeli shekels (ILS)</h4>
            <p class="mb-0 text-muted">$0.32</p>
          </div>
          <p class="mb-0 text-success">
            <i class="mdi mdi-trending-up me-1"></i>11%
          </p>
        </div>

        <hr />

        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div class="avatar-sm rounded">
              <span
                class="avatar-title bg-info-lighten text-info border border-info rounded-circle h3 my-0"
              >
                <i class="mdi mdi-currency-kzt"></i>
              </span>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="mt-0 mb-1 font-16 fw-semibold">
              Kazakhstani tenge (KZT)
            </h4>
            <p class="mb-0 text-muted">$0.0023</p>
          </div>
          <p class="mb-0 text-danger">
            <i class="mdi mdi-trending-down me-1"></i>10%
          </p>
        </div>

        <hr />

        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div class="avatar-sm rounded">
              <span
                class="avatar-title bg-secondary-lighten text-secondary border border-secondary rounded-circle h3 my-0"
              >
                <i class="mdi mdi-currency-rub"></i>
              </span>
            </div>
          </div>
          <div class="flex-grow-1 ms-2">
            <h4 class="mt-0 mb-1 font-16 fw-semibold">Russian ruble (RUB)</h4>
            <p class="mb-0 text-muted">$0.014</p>
          </div>
          <p class="mb-0 text-success">
            <i class="mdi mdi-trending-up me-1"></i>18%
          </p>
        </div>
      </ngx-simplebar>
    </div>
  `,
  styles: ``,
})
export class WatchlistComponent {}
