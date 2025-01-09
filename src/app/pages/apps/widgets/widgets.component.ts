import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { StatsticsComponent } from './components/statstics.component'
import { StatisticsWidgetComponent } from '@component/stats-widgets/statistics-widget.component'
import { StatisticsComponent } from '@pages/dashboard/crm/components/statistics.component'
import { ChatlistComponent } from './components/chatlist.component'
import { MessagesComponent } from '@component/messages/messages.component'
import { ActivityComponent } from '@pages/dashboard/index/components/activity.component'
import { SimplebarAngularModule } from 'simplebar-angular'
import { TransactionComponent } from './components/transaction.component'
import { TodoComponent } from './components/todo.component'
import { WidgetChartComponent } from './components/widget-chart.component'

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [
    PagetitleComponent,
    StatsticsComponent,
    StatisticsWidgetComponent,
    StatisticsComponent,
    ChatlistComponent,
    MessagesComponent,
    ActivityComponent,
    SimplebarAngularModule,
    TransactionComponent,
    TodoComponent,
    WidgetChartComponent,
  ],
  template: `
    <app-pagetitle
      title="Widgets"
      subtitle="Components"
      pagetitle="Hyper"
    ></app-pagetitle>

    <app-statstics></app-statstics>

    <div class="row">
      @for (data of stateData; track $index) {
        <div class="col-xxl-3 col-sm-6">
          <app-statistics-widget [stateData]="data"></app-statistics-widget>
        </div>
      }
    </div>
    <!-- end row-->

    <crm-statistics [leadColor]="'#727cf5'"></crm-statistics>

    <div class="row">
      <div class="col-xl-4">
        <!-- Chat-->
        <app-chatlist></app-chatlist>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-4">
        <div class="card cta-box text-bg-danger">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="w-100 overflow-hidden">
                <h2 class="mt-0 text-reset">
                  <i class="mdi mdi-bullhorn-outline"></i>
                </h2>
                <h3 class="m-0 fw-normal cta-box-title text-reset">
                  Enhance your <b>Campaign</b> for better outreach
                  <i class="mdi mdi-arrow-right-bold-outline"></i>
                </h3>
              </div>
              <img
                class="ms-3"
                src="assets/images/svg/email-campaign.svg"
                width="120"
                alt="Generic placeholder image"
              />
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card cta-box text-bg-primary">
          <div class="card-body">
            <div class="text-center">
              <h3 class="m-0 fw-normal cta-box-title text-reset">
                Enhance your <b>Campaign</b> for better outreach
              </h3>

              <img
                class="my-3"
                src="assets/images/svg/report.svg"
                width="180"
                alt="Generic placeholder image"
              />

              <br />

              <a
                href="javascript:void(0);"
                class="btn btn-sm btn-light rounded-pill"
                >Know More <i class="mdi mdi-arrow-right"></i
              ></a>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-4">
        <!-- Todo-->
        <app-todo></app-todo>
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-4">
        <!-- Messages-->
        <app-messages></app-messages>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-4">
        <app-activity [height]="315"></app-activity>
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <app-transaction></app-transaction>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->

    <app-widget-chart></app-widget-chart>

    <div class="row">
      <div class="col-lg-4">
        <div class="card text-bg-info overflow-hidden">
          <div class="card-body">
            <div class="toll-free-box text-center">
              <h4 class="text-reset">
                <i class="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
              </h4>
            </div>
          </div>
          <!-- end card-body-->
        </div>
      </div>
      <!-- end col-->

      <div class="col-lg-4">
        <div class="card text-bg-danger overflow-hidden">
          <div class="card-body">
            <div class="toll-free-box text-center">
              <h4 class="text-reset">
                <i class="mdi mdi-headset"></i> Need help ? Just contact us
              </h4>
            </div>
          </div>
          <!-- end card-body-->
        </div>
      </div>
      <!-- end col-->

      <div class="col-lg-4">
        <div class="card text-bg-success">
          <div class="card-body">
            <div class="text-center">
              <h4 class="text-reset">
                <i class="mdi mdi-deskphone"></i> Toll Free : 1-234-567-8901
              </h4>
            </div>
          </div>
          <!-- end card-body-->
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class WidgetsComponent {
  stateData = [
    {
      label: 'Revenue',
      amount: '6,254',
      prefix: '$',
      icon: 'mdi mdi-currency-btc widget-icon text-bg-danger rounded-circle',
      arricon: 'mdi-arrow-down-bold',
      percentage: '7.00',
      badgecolor: 'info',
      iconClass: 'text-bg-danger rounded-circle',
      badgeClass: 'badge bg-info me-1',
    },
    {
      label: 'Growth',
      amount: '30.56',
      icon: 'mdi mdi-pulse widget-icon',
      prefix: '+',
      arricon: 'mdi-arrow-up-bold',
      suffix: '%',
      percentage: '4.87',
      badgecolor: 'text-success',
    },
    {
      label: 'CUSTOMERS',
      amount: '36,254',
      icon: 'mdi mdi-account-multiple widget-icon bg-white text-success',
      arricon: 'mdi-arrow-up-bold',
      percentage: '5.27',
      badgecolor: '',
      badgeClass: 'badge bg-white bg-opacity-10 me-1',
      cardColor: 'text-bg-success',
      textClass: 'text-white',
    },
    {
      label: 'Revenue',
      amount: '10,245',
      prefix: '$',
      icon: 'mdi mdi-currency-usd widget-icon bg-white rounded-circle text-primary',
      arricon: 'mdi-arrow-up-bold',
      percentage: '17.26',
      badgeClass: 'badge bg-info me-1',
      cardColor: 'text-bg-primary',
      textClass: 'text-white',
    },
  ]
}
