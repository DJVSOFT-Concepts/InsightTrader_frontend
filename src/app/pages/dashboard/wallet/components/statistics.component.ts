import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgbDropdownModule, NgApexchartsModule],
  template: `
    <div class="row">
      @for (data of stateData; track $index) {
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div ngbDropdown class="dropdown float-end">
                <a
                  ngbDropdownToggle
                  class="dropdown-toggle arrow-none card-drop"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><i class="mdi mdi-cached me-1"></i>Refresh</a
                  >
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><i class="mdi mdi-circle-edit-outline me-1"></i>Edit</a
                  >
                  <!-- item-->
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item text-danger"
                    ><i class="mdi mdi-delete-outline me-1"></i>Remove</a
                  >
                </div>
              </div>
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div class="avatar-sm rounded">
                    <span
                      class="avatar-title bg-primary-lighten h3 my-0 text-primary rounded"
                    >
                      <i class="mdi {{ data.icon }}"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4 class="mt-0 mb-1 font-20">$ {{ data.amount }}</h4>
                  <p class="mb-0 text-muted">
                    <i class="mdi mdi-arrow-up-bold text-success"></i>
                    {{ data.percentage }}% This Week
                  </p>
                </div>
              </div>

              <div class="row align-items-end justify-content-between mt-3">
                <div class="col-sm-6">
                  <h4 class="mt-0 text-muted fw-semibold mb-1">Rate</h4>
                  <p class="text-muted mb-0">
                    1.00 {{ data.ratecurrency }} = $ {{ data.rate }}
                  </p>
                </div>
                <!-- end col -->

                <div class="col-sm-5">
                  <div class="text-end">
                    <div id="currency-btc-chart" data-colors="#727cf5">
                      <apx-chart
                        [chart]="data.chart.chart!"
                        [plotOptions]="data.chart.plotOptions!"
                        [series]="data.chart.series!"
                        [stroke]="data.chart.stroke!"
                        [markers]="data.chart.markers!"
                        [colors]="data.chart.colors!"
                        [tooltip]="data.chart.tooltip!"
                        [labels]="data.chart.labels!"
                        [xaxis]="data.chart.xaxis!"
                      ></apx-chart>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      }
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class StatisticsComponent {
  btcChart: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [25, 33, 28, 35, 30, 40],
      },
    ],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#727cf5'],
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
  cnyChart: Partial<ChartOptions> = {
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
        data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63],
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

  ethChart: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [25, 33, 28, 35, 30, 40],
      },
    ],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#727cf5'],
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
      icon: 'mdi-currency-btc',
      amount: '12,500',
      percentage: '45',
      ratecurrency: 'BTC',
      rate: '48,781.20',
      chart: this.btcChart,
    },
    {
      icon: 'mdi-currency-cny',
      amount: '9,250',
      percentage: '32',
      ratecurrency: 'CNY',
      rate: '0.6',
      chart: this.cnyChart,
    },
    {
      icon: 'mdi-currency-eth',
      amount: '12,500',
      percentage: '60',
      ratecurrency: 'ETH',
      rate: '3,783.68',
      chart: this.ethChart,
    },
  ]
}
