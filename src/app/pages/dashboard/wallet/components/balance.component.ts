import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [NgApexchartsModule, NgbNavModule],
  template: `
    <div class="card">
      <div
        class="card-header align-items-center d-sm-flex justify-content-sm-between"
      >
        <h4 class="header-title mb-0">Balance Status</h4>

        <ul
          ngbNav
          #nav="ngbNav"
          class="nav nav-pills"
          id="pills-tab"
          role="tablist"
          (navChange)="changeTab($event)"
        >
          <li [ngbNavItem]="1" class="nav-item" role="presentation">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link py-1"
            >
              <span class="">Day</span>
            </a>
            <ng-template ngbNavContent>
              <div
                class="tab-pane fade show active"
                id="day-status"
                role="tabpanel"
                aria-labelledby="day-status-tab"
              >
                <div dir="ltr">
                  <div
                    id="day-balance-chart"
                    class="apex-charts"
                    data-colors="#0acf97"
                  >
                    <apx-chart
                      [chart]="daybalanceChart.chart!"
                      [colors]="daybalanceChart.colors!"
                      [dataLabels]="daybalanceChart.dataLabels!"
                      [stroke]="daybalanceChart.stroke!"
                      [series]="daybalanceChart.series!"
                      [markers]="daybalanceChart.markers!"
                      [xaxis]="daybalanceChart.xaxis!"
                      [yaxis]="daybalanceChart.yaxis!"
                      [fill]="daybalanceChart.fill!"
                    ></apx-chart>
                  </div>
                </div>
              </div>
            </ng-template>
          </li>
          <li [ngbNavItem]="2" class="nav-item" role="presentation">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link py-1"
            >
              <span class="">Week</span>
            </a>
            <ng-template ngbNavContent>
              <div
                class="tab-pane fade show active"
                id="week-status"
                role="tabpanel"
                aria-labelledby="week-status-tab"
              >
                <div dir="ltr">
                  <div
                    id="week-balance-chart"
                    class="apex-charts"
                    data-colors="#0acf97"
                  >
                    <apx-chart
                      [chart]="weekbalanceChart.chart!"
                      [colors]="weekbalanceChart.colors!"
                      [dataLabels]="weekbalanceChart.dataLabels!"
                      [stroke]="weekbalanceChart.stroke!"
                      [series]="weekbalanceChart.series!"
                      [markers]="weekbalanceChart.markers!"
                      [xaxis]="weekbalanceChart.xaxis!"
                      [yaxis]="weekbalanceChart.yaxis!"
                      [fill]="weekbalanceChart.fill!"
                    ></apx-chart>
                  </div>
                </div>
              </div>
            </ng-template>
          </li>
          <li [ngbNavItem]="3" class="nav-item" role="presentation">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link py-1"
            >
              <span class="">Month</span>
            </a>
            <ng-template ngbNavContent>
              <div
                class="tab-pane fade show active"
                id="month-status"
                role="tabpanel"
                aria-labelledby="month-status-tab"
              >
                <div dir="ltr">
                  <div
                    id="month-balance-chart"
                    class="apex-charts"
                    data-colors="#0acf97"
                  >
                    <apx-chart
                      [chart]="monthbalanceChart.chart!"
                      [colors]="monthbalanceChart.colors!"
                      [dataLabels]="monthbalanceChart.dataLabels!"
                      [stroke]="monthbalanceChart.stroke!"
                      [series]="monthbalanceChart.series!"
                      [markers]="monthbalanceChart.markers!"
                      [xaxis]="monthbalanceChart.xaxis!"
                      [yaxis]="monthbalanceChart.yaxis!"
                      [fill]="monthbalanceChart.fill!"
                    ></apx-chart>
                  </div>
                </div>
              </div>
            </ng-template>
          </li>
          <li [ngbNavItem]="4" class="nav-item" role="presentation">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link py-1"
            >
              <span class="">Year</span>
            </a>
            <ng-template ngbNavContent>
              <div
                class="tab-pane fade show active"
                id="year-status"
                role="tabpanel"
                aria-labelledby="year-status-tab"
              >
                <div dir="ltr">
                  <div
                    id="year-balance-chart"
                    class="apex-charts"
                    data-colors="#0acf97"
                  >
                    <apx-chart
                      [chart]="yearbalanceChart.chart!"
                      [colors]="yearbalanceChart.colors!"
                      [dataLabels]="yearbalanceChart.dataLabels!"
                      [stroke]="yearbalanceChart.stroke!"
                      [series]="yearbalanceChart.series!"
                      [markers]="yearbalanceChart.markers!"
                      [xaxis]="yearbalanceChart.xaxis!"
                      [yaxis]="yearbalanceChart.yaxis!"
                      [fill]="yearbalanceChart.fill!"
                    ></apx-chart>
                  </div>
                </div>
              </div>
            </ng-template>
          </li>
        </ul>
      </div>
      <div [ngbNavOutlet]="nav" class="card-body pt-0">
        <div class="tab-content" id="pills-tabContent"></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class BalanceComponent {
  dayBalanceData: number[][] = []
  weekBalanceData: number[][] = []
  monthBalanceData: number[][] = []
  yearBalanceData: number[][] = []
  dayDummyData!: number[]
  monthDummyData!: number[]
  weekDummyData!: number[]
  yearDummyData!: number[]

  ngOnInit() {
    this.dayDummyData = this.generateData()
    this.monthDummyData = this.generateData()
    this.weekDummyData = this.generateData()
    this.yearDummyData = this.generateData()

    for (var i = 0; i < 100; i++) {
      var start = new Date()
      this.dayBalanceData.push([
        start.setDate(start.getDate() + i - 100),
        this.dayDummyData[i],
      ])

      this.weekBalanceData.push([
        start.setDate(start.getDate() + i * 7 - 100 * 7),
        this.weekDummyData[i],
      ])

      this.monthBalanceData.push([
        start.setDate(start.getDate() + i * 30 - 100 * 30),
        this.monthDummyData[i],
      ])

      this.yearBalanceData.push([
        start.setDate(start.getDate() + i * 365 - 100 * 365),
        this.yearDummyData[i],
      ])
    }
  }

  generateData() {
    var balanceData = []
    for (var i = 0; i < 100; i++) {
      balanceData.push(5000 + Math.random() * 100000 + 0.8 * i * i * i)
    }
    return balanceData
  }

  daybalanceChart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#0acf97'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    series: [
      {
        data: this.dayBalanceData,
      },
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
      // min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
  }

  weekbalanceChart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#0acf97'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    series: [
      {
        data: this.weekBalanceData,
      },
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
      // min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
  }

  monthbalanceChart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#0acf97'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    series: [
      {
        data: this.monthBalanceData,
      },
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
      // min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
  }

  yearbalanceChart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#0acf97'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    series: [
      {
        data: this.yearBalanceData,
      },
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
      // min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
  }

  // Change Tab
  changeTab(event: NgbNavChangeEvent) {
    if (event.nextId == '1') {
      this.daybalanceChart
    }
  }
}
