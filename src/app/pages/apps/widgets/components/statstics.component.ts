import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

var sparklineData = [
  47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
  27, 54, 43, 19, 46,
]

var randomizeArray = function (arg: number[]) {
  var array = arg.slice()
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

var labelsSales: string[] = []
for (var i = 1; i <= 24; i++) {
  labelsSales.push('2018-09-' + i)
}

@Component({
  selector: 'app-statstics',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="row">
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-body">
            <span class="float-start m-2 me-4">
              <img
                src="assets/images/users/avatar-2.jpg"
                style="height: 100px"
                alt="avatar-2"
                class="rounded-circle img-thumbnail"
              />
            </span>
            <div class="">
              <h4 class="mt-1 mb-1">Michael Franklin</h4>
              <p class="font-13">Authorised Brand Seller</p>

              <ul class="mb-0 list-inline">
                <li class="list-inline-item me-3">
                  <h5 class="mb-1">$ 25,184</h5>
                  <p class="mb-0 font-13">Total Revenue</p>
                </li>
                <li class="list-inline-item">
                  <h5 class="mb-1">5482</h5>
                  <p class="mb-0 font-13">Number of Orders</p>
                </li>
              </ul>
            </div>
            <!-- end div-->
          </div>
          <!-- end card-body-->
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body p-0" dir="ltr">
            <div id="sales-spark" class="apex-charts" data-colors="#3688fc">
              <apx-chart
                [chart]="salessparkChart.chart!"
                [stroke]="salessparkChart.stroke!"
                [fill]="salessparkChart.fill!"
                [series]="salessparkChart.series!"
                [labels]="salessparkChart.labels!"
                [colors]="salessparkChart.colors!"
                [xaxis]="salessparkChart.xaxis!"
                [yaxis]="salessparkChart.yaxis!"
                [title]="salessparkChart.title!"
                [subtitle]="salessparkChart.subtitle!"
              ></apx-chart>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body p-0" dir="ltr">
            <div id="profit-spark" class="apex-charts" data-colors="#0acf97">
              <apx-chart
                [chart]="profitsparkChart.chart!"
                [stroke]="profitsparkChart.stroke!"
                [fill]="profitsparkChart.fill!"
                [series]="profitsparkChart.series!"
                [colors]="profitsparkChart.colors!"
                [xaxis]="profitsparkChart.xaxis!"
                [yaxis]="profitsparkChart.yaxis!"
                [title]="profitsparkChart.title!"
                [subtitle]="profitsparkChart.subtitle!"
              ></apx-chart>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class StatsticsComponent {
  salessparkChart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 172,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
      curve: 'straight',
    },
    fill: {
      opacity: 0.2,
    },
    series: [
      {
        name: 'Hyper Sales',
        data: randomizeArray(sparklineData),
      },
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
    },
    colors: ['#3688fc'],
    labels: labelsSales,
    title: {
      text: '$424,652',
      offsetX: 20,
      offsetY: 20,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Sales',
      offsetX: 20,
      offsetY: 55,
      style: {
        fontSize: '14px',
      },
    },
  }

  profitsparkChart: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      height: 172,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 0,
      curve: 'straight',
    },
    fill: {
      opacity: 0.5,
    },
    series: [
      {
        name: 'Net Profits ',
        data: randomizeArray(sparklineData),
      },
    ],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    colors: ['#0acf97'],
    title: {
      text: '$135,965',
      offsetX: 20,
      offsetY: 20,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Profits',
      offsetX: 20,
      offsetY: 55,
      style: {
        fontSize: '14px',
      },
    },
  }
}
