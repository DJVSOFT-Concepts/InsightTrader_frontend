import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4 class="header-title">Project Statistics</h4>
        <div class="d-flex gap-1">
          <button type="button" class="btn btn-soft-primary btn-sm">All</button>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            6M
          </button>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            1Y
          </button>
        </div>
      </div>

      <div class="card-body pt-0">
        <div dir="ltr" class="mt-2">
          <div
            id="crm-project-statistics"
            class="apex-charts"
            data-colors="#ced1ff,#727cf5"
          >
            <apx-chart
              [chart]="crmprojectstatistics.chart!"
              [plotOptions]="crmprojectstatistics.plotOptions!"
              [dataLabels]="crmprojectstatistics.dataLabels!"
              [stroke]="crmprojectstatistics.stroke!"
              [colors]="crmprojectstatistics.colors!"
              [series]="crmprojectstatistics.series!"
              [xaxis]="crmprojectstatistics.xaxis!"
              [legend]="crmprojectstatistics.legend!"
              [fill]="crmprojectstatistics.fill!"
              [grid]="crmprojectstatistics.grid!"
            ></apx-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatisticsComponent {
  crmprojectstatistics!: Partial<ChartOptions>

  ngOnInit(): void {
    this.crmprojectstatistics = {
      chart: {
        height: 326,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 0,
        colors: ['transparent'],
      },
      colors: ['#ced1ff', '#727cf5'],
      series: [
        {
          name: 'Projects',
          data: [56, 38, 85, 72, 28, 69, 55, 52, 69],
        },
        {
          name: 'Working Hours',
          data: [176, 185, 256, 240, 187, 205, 191, 114, 194],
        },
      ],
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      legend: {
        offsetY: 7,
      },
      fill: {
        opacity: 1,
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.2,
        },
        borderColor: '#f1f3fa',
        padding: {
          bottom: 5,
        },
      },
    }
  }
}
