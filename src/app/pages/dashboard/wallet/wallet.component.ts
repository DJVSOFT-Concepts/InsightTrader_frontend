import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { StatisticsComponent } from './components/statistics.component'
import { BalanceComponent } from './components/balance.component'
import { WatchlistComponent } from './components/watchlist.component'
import { MoneyHistoryComponent } from './components/money-history.component'
import { MerchantComponent } from './components/merchant.component'
import { TransactionComponent } from './components/transaction.component'

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [
    PagetitleComponent,
    StatisticsComponent,
    BalanceComponent,
    WatchlistComponent,
    MoneyHistoryComponent,
    MerchantComponent,
    TransactionComponent,
  ],
  template: `
    <app-pagetitle
      title="E-Wallet"
      subtitle="Dashboard"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xxl-9">
        <app-statistics></app-statistics>

        <div class="row">
          <div class="col-12">
            <app-balance></app-balance>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xxl-3">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <div
              class="card bg-primary card-bg-img"
              style="background-image: url(assets/images/bg-pattern.png)"
            >
              <div class="card-body">
                <span class="float-end text-white-50 display-5 mt-n1"
                  ><i class="mdi mdi-contactless-payment"></i
                ></span>
                <h4 class="text-white">Dominic Keller</h4>

                <div class="row align-items-center mt-4">
                  <div class="col-3 text-white font-12">
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                  </div>
                  <div class="col-3 text-white font-12">
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                  </div>
                  <div class="col-3 text-white font-12">
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                    <i class="mdi mdi-circle"></i>
                  </div>
                  <div class="col-3 text-white font-16 fw-bold">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-4">
                    <p class="text-white-50 font-16 mb-1">Expiry Date</p>
                    <h4 class="text-white my-0">10/26</h4>
                  </div>

                  <div class="col-4">
                    <p class="text-white-50 font-16 mb-1">CCV</p>
                    <h4 class="text-white my-0">000</h4>
                  </div>
                  <div class="col-4">
                    <div class="text-end">
                      <span
                        class="avatar-sm bg-white opacity-25 rounded-circle d-inline-block"
                      ></span>
                      <span
                        class="avatar-sm bg-white opacity-25 rounded-circle d-inline-block ms-n3"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xxl-12">
            <app-watchlist></app-watchlist>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-md-6 col-xxl-3">
        <app-money-history></app-money-history>
      </div>

      <div class="col-md-6 col-xxl-3">
        <app-merchant></app-merchant>
      </div>
      <!-- end col -->

      <div class="col-xxl-6">
        <app-transaction></app-transaction>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class WalletComponent {}
