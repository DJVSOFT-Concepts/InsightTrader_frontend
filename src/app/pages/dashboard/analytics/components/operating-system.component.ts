import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'oprating-system',
  standalone: true,
  imports: [CardTitleComponent, NgApexchartsModule],
  template: ` <div class="card">
      <card-title
        classname="d-flex card-header justify-content-between align-items-center"
        title="Sessions by Operating System"
        [menuItems]="[{ label: 'Refresh Report' }, { label: 'Export Report' }]"
      ></card-title>

      <div class="card-body pt-0">
        <div
          id="sessions-os"
          class="apex-charts mt-2"
          data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"
        >
          <apx-chart
            [chart]="sessionsos.chart!"
            [plotOptions]="sessionsos.plotOptions!"
            [colors]="sessionsos.colors!"
            [series]="sessionsos.series!"
            [labels]="sessionsos.labels!"
          ></apx-chart>
        </div>

        <div class="row text-center mt-2">
          <div class="col-6">
            <h4 class="fw-normal">
              <span>6,510</span>
            </h4>
            <p class="text-muted mb-0">Online System</p>
          </div>
          <div class="col-6">
            <h4 class="fw-normal">
              <span>2,031</span>
            </h4>
            <p class="text-muted mb-0">Offline System</p>
          </div>
        </div>
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->`,
})
export class OperatingSystemComponent {
  sessionsos!: Partial<ChartOptions>

  ngOnInit(): void {
    this.sessionsos = {
      chart: {
        height: 290,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'OS',
              formatter: function () {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return String(8541)
              },
            },
          },
        },
      },
      colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
      series: [44, 55, 67, 83],
      labels: ['Windows', 'Macintosh', 'Linux', 'Android'],
    }
  }
}
