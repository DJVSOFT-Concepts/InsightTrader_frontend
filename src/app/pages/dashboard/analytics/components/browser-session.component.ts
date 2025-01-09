import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'browser-session',
  standalone: true,
  imports: [CardTitleComponent, NgApexchartsModule],
  template: ` <div class="card">
      <card-title
        classname="d-flex card-header justify-content-between align-items-center"
        title="Sessions by Browser"
        [menuItems]="[{ label: 'Refresh Report' }, { label: 'Export Report' }]"
      ></card-title>

      <div class="card-body pt-0">
        <div
          id="sessions-browser"
          class="apex-charts mt-2"
          data-colors="#727cf5"
        ></div>
        <apx-chart
          [chart]="sessionsbrowser.chart!"
          [series]="sessionsbrowser.series!"
          [labels]="sessionsbrowser.labels!"
          [plotOptions]="sessionsbrowser.plotOptions!"
          [colors]="sessionsbrowser.colors!"
          [yaxis]="sessionsbrowser.yaxis!"
          [dataLabels]="sessionsbrowser.dataLabels!"
          [markers]="sessionsbrowser.markers!"
        ></apx-chart>
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->`,
})
export class BrowserSessionComponent {
  sessionsbrowser!: Partial<ChartOptions>

  ngOnInit(): void {
    this.sessionsbrowser = {
      chart: {
        height: 320,
        type: 'radar',
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: 'Usage',
          data: [80, 50, 30, 40, 60, 20],
        },
      ],
      labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
      plotOptions: {
        radar: {
          size: 130,
          polygons: {
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      colors: ['#727cf5'],
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + '%'
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeWidth: 2,
      },
    }
  }
}
