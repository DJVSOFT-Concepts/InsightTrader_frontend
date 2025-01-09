import { Component, Input } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'crm-statistics',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="row">
      @for (data of stateData; track $index) {
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-6">
                  <h5
                    class="text-muted fw-normal mt-0 text-truncate"
                    title="Campaign Sent"
                  >
                    {{ data.label }}
                  </h5>
                  <h3 class="my-2 py-1">
                    @if (data.prefix) {
                      {{ data.prefix }}
                    }
                    {{ data.amount }}
                    @if (data.suffix) {
                      {{ data.suffix }}
                    }
                  </h3>
                  <p class="mb-0 text-muted">
                    <span class="text-{{ data.badgecolor }} me-2"
                      ><i class="mdi {{ data.arricon }}"></i>
                      {{ data.percentage }}%</span
                    >
                  </p>
                </div>
                <div class="col-6">
                  <div class="text-end">
                    <div id="campaign-sent-chart">
                      <apx-chart
                        [chart]="data.chart.chart!"
                        [plotOptions]="data.chart.plotOptions!"
                        [colors]="data.chart.colors!"
                        [labels]="data.chart.labels!"
                        [series]="data.chart.series!"
                        [stroke]="data.chart.stroke!"
                        [xaxis]="data.chart.xaxis!"
                        [markers]="data.chart.markers!"
                        [tooltip]="data.chart.tooltip!"
                      ></apx-chart>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end row-->
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
      }
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class StatisticsComponent {
  @Input() leadColor!: string

  ngOnInit(): void {
    if (this.leadColor) {
      this.leadChart.colors = ['#727cf5']
      this.revenueChart.colors = ['#727cf5']
    }
  }

  sentChart: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    colors: ['#727cf5'],
    series: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
      },
    ],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          },
        },
      },
      marker: {
        show: false,
      },
    },
  }

  leadChart: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
      },
    ],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#0acf97'],
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          },
        },
      },
      marker: {
        show: false,
      },
    },
  }

  dealChart: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    colors: ['#727cf5'],
    series: [
      {
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
      },
    ],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          },
        },
      },
      marker: {
        show: false,
      },
    },
  }

  revenueChart: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    colors: ['#0acf97'],
    series: [
      {
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82],
      },
    ],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          },
        },
      },
      marker: {
        show: false,
      },
    },
  }

  stateData = [
    {
      label: 'Campaign Sent',
      amount: '9,184',
      arricon: 'mdi-arrow-up-bold',
      percentage: '3.27',
      badgecolor: 'success',
      chart: this.sentChart,
    },
    {
      label: 'New Leads',
      amount: '3,254',
      arricon: 'mdi-arrow-down-bold',
      percentage: '5.38',
      badgecolor: 'danger',
      chart: this.leadChart,
    },
    {
      label: 'Deals',
      amount: '861',
      arricon: 'mdi-arrow-up-bold',
      percentage: '4.87',
      badgecolor: 'success',
      chart: this.dealChart,
    },
    {
      label: 'Booked Revenue',
      amount: '253',
      prefix: '$',
      suffix: 'k',
      arricon: 'mdi-arrow-up-bold',
      percentage: '11.7',
      badgecolor: 'success',
      chart: this.revenueChart,
    },
  ]
}
