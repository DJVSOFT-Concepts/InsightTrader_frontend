import { Component } from '@angular/core'
import { StatisticsWidgetComponent } from '@component/stats-widgets/statistics-widget.component'
import { interval } from 'rxjs'

@Component({
  selector: 'statistics',
  standalone: true,
  imports: [StatisticsWidgetComponent],
  template: `
    @for (data of stateData; track $index) {
      <div class="card tilebox-one">
        <div class="card-body">
          <i class="uil {{ data.icon }} float-end"></i>
          <h6 class="text-uppercase mt-0">{{ data.label }}</h6>
          <h2 class="my-2" id="active-users-count">{{ data.amount }}</h2>
          <p class="mb-0 text-muted">
            <span class="text-{{ data.badgecolor }} me-2"
              ><span class="mdi {{ data.arricon }}"></span>
              {{ data.percentage }}%</span
            >
            <span class="text-nowrap">{{ data.sinceText }}</span>
          </p>
        </div>
        <!-- end card-body-->
      </div>
      <!--end card-->
    }
    <div class="card cta-box overflow-hidden">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div>
            <h3 class="m-0 fw-normal cta-box-title">
              Enhance your <b>Campaign</b> for better outreach
              <i class="mdi mdi-arrow-right"></i>
            </h3>
          </div>
          <img
            class="ms-3"
            src="assets/images/svg/email-campaign.svg"
            width="92"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <!-- end card-body -->
    </div>
  `,
  styles: ``,
})
export class StatisticsComponent {
  stateData = [
    {
      label: 'Active Users',
      amount: 121,
      icon: 'uil-users-alt',
      arricon: 'mdi-arrow-up-bold',
      percentage: '5.27',
      badgecolor: 'success',
      sinceText: 'Since last month',
    },
    {
      label: 'Views per minute',
      amount: 560,
      icon: 'uil-window-restore',
      arricon: 'mdi-arrow-down-bold',
      percentage: '1.08',
      badgecolor: 'danger',
      sinceText: 'Since previous week',
    },
  ]

  ngOnInit(): void {
    interval(2000).subscribe(() => {
      for (var i = 0; i < this.stateData.length; i++) {
        // Get a random number
        const amount: number = this.stateData[i].amount
        var number = Math.floor(Math.random() * amount + 200)
        this.stateData[i].amount = parseFloat(number.toFixed(0))
      }
    })
  }
}
