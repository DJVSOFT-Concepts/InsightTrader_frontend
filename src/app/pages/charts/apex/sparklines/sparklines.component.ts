import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgApexchartsModule } from 'ng-apexcharts'

const sparklineData = [
  47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
  27, 54, 43, 19, 46,
]
@Component({
  selector: 'app-sparklines',
  standalone: true,
  imports: [PagetitleComponent, NgApexchartsModule],
  templateUrl: './sparklines.component.html',
  styles: ``,
})
export class SparklinesComponent {
  spark1Chart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 160,
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
        name: 'Hyper Sales ',
        data: this.randomizeArray(sparklineData),
      },
    ],
    yaxis: {
      min: 0,
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$424,652',
      offsetX: 20,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Sales',
      offsetX: 20,
      style: {
        fontSize: '14px',
      },
    },
  }

  spark2Chart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 160,
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
        name: 'Hyper Expenses ',
        data: this.randomizeArray(sparklineData),
      },
    ],
    yaxis: {
      min: 0,
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$235,312',
      offsetX: 20,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Expenses',
      offsetX: 20,
      style: {
        fontSize: '14px',
      },
    },
  }

  spark3Chart: Partial<ChartOptions> = {
    chart: {
      type: 'area',
      height: 160,
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
        name: 'Net Profits ',
        data: this.randomizeArray(sparklineData),
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
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Profits',
      offsetX: 20,
      style: {
        fontSize: '14px',
      },
    },
  }

  randomizeArray(arg: number[]) {
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

  chart1: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      width: 140,
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

  chart2: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      width: 140,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#0acf97'],
    series: [
      {
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
      },
    ],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
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

  chart3: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      width: 140,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#ffbc00'],
    series: [
      {
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82],
      },
    ],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
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

  chart4: Partial<ChartOptions> = {
    chart: {
      type: 'line',
      width: 140,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#fa5c7c'],
    series: [
      {
        data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15],
      },
    ],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
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

  chart5: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      width: 100,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
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

  chart6: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      width: 100,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    colors: ['#0acf97'],
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

  chart7: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      width: 100,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    colors: ['#ffbc00'],
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

  chart8: Partial<ChartOptions> = {
    chart: {
      type: 'bar',
      width: 100,
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    colors: ['#fa5c7c'],
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
}