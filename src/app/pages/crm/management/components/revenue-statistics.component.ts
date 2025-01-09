import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-revenue-statistics',
  standalone: true,
  imports: [NgApexchartsModule, CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Revenue Statistics"
        [menuItems]="[
          { label: 'Today' },
          { label: 'Yesterday' },
          { label: 'Last Week' },
          { label: 'Last Month' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div dir="ltr">
          <div
            id="revenue-statistics-chart"
            class="apex-charts"
            data-colors="#727cf5,#0acf97"
          >
            <apx-chart
              [chart]="revenuestatisticsChart.chart!"
              [dataLabels]="revenuestatisticsChart.dataLabels!"
              [stroke]="revenuestatisticsChart.stroke!"
              [series]="revenuestatisticsChart.series!"
              [colors]="revenuestatisticsChart.colors!"
              [xaxis]="revenuestatisticsChart.xaxis!"
              [yaxis]="revenuestatisticsChart.yaxis!"
            ></apx-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class RevenueStatisticsComponent {
  revenuestatisticsChart!: Partial<ChartOptions>

  ngOnInit(): void {
    this.revenuestatisticsChart = {
      chart: {
        height: 361,
        type: 'line',
        dropShadow: {
          enabled: true,
          opacity: 0.2,
          blur: 7,
          left: -7,
          top: 7,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 4,
      },
      series: [
        {
          name: 'Budget',
          data: [10, 20, 15, 28, 22, 34],
        },
        {
          name: 'Revenue',
          data: [2, 26, 10, 38, 30, 48],
        },
      ],
      colors: ['#727cf5', '#0acf97'],

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + 'k'
          },
          offsetX: -15,
        },
      },
    }
  }
}
