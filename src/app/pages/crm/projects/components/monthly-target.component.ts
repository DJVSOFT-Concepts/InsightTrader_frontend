import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-monthly-target',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title">Monthly Target</h4>

        <div
          id="monthly-target"
          class="apex-charts mb-4 mt-4"
          data-colors="#0acf97,#727cf5"
        >
          <apx-chart
            [chart]="monthlytargetChart.chart!"
            [legend]="monthlytargetChart.legend!"
            [stroke]="monthlytargetChart.stroke!"
            [series]="monthlytargetChart.series!"
            [labels]="monthlytargetChart.labels!"
            [colors]="monthlytargetChart.colors!"
            [responsive]="monthlytargetChart.responsive!"
          ></apx-chart>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="text-center">
              <h5>Pending</h5>
              <p class="fw-semibold text-muted mb-0">
                <i class="mdi mdi-circle text-primary"></i> Projects
              </p>
            </div>
          </div>
          <div class="col-6">
            <div class="text-center">
              <h5>Done</h5>
              <p class="fw-semibold text-muted mb-0">
                <i class="mdi mdi-circle text-success"></i> Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MonthlyTargetComponent {
  ngOnInit(): void {}
  monthlytargetChart: Partial<ChartOptions> = {
    chart: {
      height: 256,
      type: 'donut',
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
      colors: ['transparent'],
    },
    series: [82, 37],
    labels: ['Done Projects', 'Pending Projects'],
    colors: ['#0acf97', '#727cf5'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
}
