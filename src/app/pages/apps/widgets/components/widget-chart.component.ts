import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-widget-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="row">
      <div class="col-xxl-3 col-md-6">
        <div class="card widget-flat">
          <div class="card-body">
            <div class="float-end">
              <button type="button" class="btn btn-sm btn-light">View</button>
            </div>
            <h6 class="text-muted text-uppercase mt-0" title="Revenue">
              Sales Summary
            </h6>
            <h3 class="mb-4 mt-2">259</h3>
            <div id="spark1" class="apex-charts mb-3" data-colors="#734CEA">
              <apx-chart
                [chart]="spark1Chart.chart!"
                [stroke]="spark1Chart.stroke!"
                [markers]="spark1Chart.markers!"
                [series]="spark1Chart.series!"
                [colors]="spark1Chart.colors!"
              ></apx-chart>
            </div>

            <div class="row text-center">
              <div class="col-6">
                <h6 class="text-truncate d-block">Last Month</h6>
                <p class="font-18 mb-0">358</p>
              </div>
              <div class="col-6">
                <h6 class="text-truncate d-block">Current Month</h6>
                <p class="font-18 mb-0">194</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col-->
      <div class="col-xxl-3 col-md-6">
        <div class="card widget-flat">
          <div class="card-body">
            <div class="float-end">
              <button type="button" class="btn btn-sm btn-light">View</button>
            </div>
            <h6 class="text-muted text-uppercase mt-0" title="Revenue">
              Revenue
            </h6>
            <h3 class="mb-4 mt-2">$6,254</h3>
            <div id="spark2" class="apex-charts mb-3" data-colors="#34bfa3">
              <apx-chart
                [chart]="spark2Chart.chart!"
                [stroke]="spark2Chart.stroke!"
                [markers]="spark2Chart.markers!"
                [series]="spark2Chart.series!"
                [colors]="spark2Chart.colors!"
              ></apx-chart>
            </div>

            <div class="row text-center">
              <div class="col-6">
                <h6 class="text-truncate d-block">Last Month</h6>
                <p class="font-18 mb-0">$781.12</p>
              </div>
              <div class="col-6">
                <h6 class="text-truncate d-block">Current Month</h6>
                <p class="font-18 mb-0">$128.2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col-->
      <div class="col-xxl-3 col-md-6">
        <div class="card widget-flat">
          <div class="card-body">
            <div class="float-end">
              <button type="button" class="btn btn-sm btn-light">View</button>
            </div>
            <h6 class="text-muted text-uppercase mt-0" title="Revenue">
              Active Users
            </h6>
            <h3 class="mb-4 mt-2">324</h3>
            <div id="spark3" class="apex-charts mb-3" data-colors="#f4516c">
              <apx-chart
                [chart]="spark3Chart.chart!"
                [stroke]="spark3Chart.stroke!"
                [markers]="spark3Chart.markers!"
                [series]="spark3Chart.series!"
                [colors]="spark3Chart.colors!"
              ></apx-chart>
            </div>

            <div class="row text-center">
              <div class="col-6">
                <h6 class="text-truncate d-block">Last Month</h6>
                <p class="font-18 mb-0 text-success">+15%</p>
              </div>
              <div class="col-6">
                <h6 class="text-truncate d-block">Current Month</h6>
                <p class="font-18 mb-0 text-danger">-6.87%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col-->
      <div class="col-xxl-3 col-md-6">
        <div class="card widget-flat">
          <div class="card-body">
            <div class="float-end">
              <button type="button" class="btn btn-sm btn-light">View</button>
            </div>
            <h6 class="text-muted text-uppercase mt-0" title="Revenue">
              Expense Summary
            </h6>
            <h3 class="mb-4 mt-2">$4,745.2</h3>
            <div id="spark4" class="apex-charts mb-3" data-colors="#00c5dc">
              <apx-chart
                [chart]="spark4Chart.chart!"
                [stroke]="spark4Chart.stroke!"
                [markers]="spark4Chart.markers!"
                [series]="spark4Chart.series!"
                [colors]="spark4Chart.colors!"
              ></apx-chart>
            </div>

            <div class="row text-center">
              <div class="col-6">
                <h6 class="text-truncate d-block">Last Month</h6>
                <p class="font-18 mb-0">$7814</p>
              </div>
              <div class="col-6">
                <h6 class="text-truncate d-block">Current Month</h6>
                <p class="font-18 mb-0">$4782.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class WidgetChartComponent {
  spark1Chart: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
      },
    ],
    stroke: {
      width: 4,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#734CEA'],
  }

  spark2Chart: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
      },
    ],
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#34bfa3'],
  }

  spark3Chart: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19],
      },
    ],
    stroke: {
      width: 4,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#f4516c'],
  }

  spark4Chart: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    series: [
      {
        data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61],
      },
    ],
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    colors: ['#00c5dc'],
  }
}
