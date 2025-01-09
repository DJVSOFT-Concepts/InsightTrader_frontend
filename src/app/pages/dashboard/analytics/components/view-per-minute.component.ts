import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartOptions } from '@core/model/apexchart.model'
import { ChartType, NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'viewperminute',
  standalone: true,
  imports: [CardTitleComponent, NgApexchartsModule],
  template: ` <div class="card">
      <card-title
        classname="d-flex card-header justify-content-between align-items-center"
        title="Views Per Minute"
        [menuItems]="[{ label: 'Refresh Report' }, { label: 'Export Report' }]"
      ></card-title>

      <div class="card-body pt-0">
        <div id="views-min" class="apex-charts" data-colors="#0acf97">
          <apx-chart
            [chart]="viewsminChart.chart!"
            [plotOptions]="viewsminChart.plotOptions!"
            [dataLabels]="viewsminChart.dataLabels!"
            [series]="viewsminChart.series!"
            [legend]="viewsminChart.legend!"
            [colors]="viewsminChart.colors!"
            [xaxis]="viewsminChart.xaxis!"
            [yaxis]="viewsminChart.yaxis!"
            [fill]="viewsminChart.fill!"
            [tooltip]="viewsminChart.tooltip!"
          ></apx-chart>
        </div>

        <div class="table-responsive mt-3">
          <table class="table table-sm mb-0 font-13">
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="javascript:void(0);" class="text-muted"
                    >/hyper/dashboard-analytics</a
                  >
                </td>
                <td>25</td>
                <td>87.5%</td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:void(0);" class="text-muted"
                    >/hyper/dashboard-crm</a
                  >
                </td>
                <td>15</td>
                <td>21.48%</td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:void(0);" class="text-muted"
                    >/ubold/dashboard</a
                  >
                </td>
                <td>10</td>
                <td>63.59%</td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:void(0);" class="text-muted"
                    >/minton/home</a
                  >
                </td>
                <td>7</td>
                <td>56.12%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->`,
})
export class ViewPerMinuteComponent {
  viewsminChart!: Partial<ChartOptions>

  ngOnInit(): void {
    const categories = []
    for (var i = 10; i >= 1; i--) {
      categories.push(i + ' min ago')
    }

    this.viewsminChart = {
      chart: {
        height: 150,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '22%',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -24,
        style: {
          fontSize: '12px',
          colors: ['#8a969c'],
        },
      },
      series: [
        {
          name: 'Views',
          data: this.getRandomData(10),
        },
      ],
      legend: {
        show: false,
      },
      colors: ['#0acf97'],
      xaxis: {
        categories: categories,
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: !0,
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: void 0,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
    }
  }

  getRandomData(length: number) {
    var d = []
    for (var idx = 0; idx < length; idx++) {
      d.push(Math.floor(Math.random() * 90) + 10)
    }
    return d
  }
}
