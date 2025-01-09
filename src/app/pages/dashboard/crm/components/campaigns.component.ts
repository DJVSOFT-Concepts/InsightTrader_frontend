import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CardTitleComponent, NgApexchartsModule],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Campaigns"
        [menuItems]="[
          { label: 'Today' },
          { label: 'Yesterday' },
          { label: 'Last Week' },
          { label: 'Last Month' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div
          id="dash-campaigns-chart"
          class="apex-charts"
          data-colors="#ffbc00,#727cf5,#0acf97"
        >
          <apx-chart
            [chart]="campaignsChart.chart!"
            [colors]="campaignsChart.colors!"
            [series]="campaignsChart.series!"
            [labels]="campaignsChart.labels!"
            [plotOptions]="campaignsChart.plotOptions!"
          ></apx-chart>
        </div>

        <div class="row text-center mt-3">
          <div class="col-sm-4">
            <i
              class="mdi mdi-send widget-icon rounded-circle bg-warning-lighten text-warning"
            ></i>
            <h3 class="fw-normal mt-3">
              <span>6,510</span>
            </h3>
            <p class="text-muted mb-0 mb-2">
              <i class="mdi mdi-checkbox-blank-circle text-warning"></i> Total
              Sent
            </p>
          </div>
          <div class="col-sm-4">
            <i
              class="mdi mdi-flag-variant widget-icon rounded-circle bg-primary-lighten text-primary"
            ></i>
            <h3 class="fw-normal mt-3">
              <span>3,487</span>
            </h3>
            <p class="text-muted mb-0 mb-2">
              <i class="mdi mdi-checkbox-blank-circle text-primary"></i> Reached
            </p>
          </div>
          <div class="col-sm-4">
            <i
              class="mdi mdi-email-open widget-icon rounded-circle bg-success-lighten text-success"
            ></i>
            <h3 class="fw-normal mt-3">
              <span>1,568</span>
            </h3>
            <p class="text-muted mb-0 mb-2">
              <i class="mdi mdi-checkbox-blank-circle text-success"></i> Opened
            </p>
          </div>
        </div>
      </div>
      <!-- end card body-->
    </div>
    <!-- end card -->
  `,
  styles: ``,
})
export class CampaignsComponent {
  campaignsChart!: Partial<ChartOptions>

  ngOnInit(): void {
    this.campaignsChart = {
      chart: {
        height: 314,
        type: 'radialBar',
      },
      colors: ['#ffbc00', '#727cf5', '#0acf97'],
      series: [86, 36, 50],
      labels: ['Total Sent', 'Reached', 'Opened'],
      plotOptions: {
        radialBar: {
          track: {
            margin: 8,
          },
        },
      },
    }
  }
}
