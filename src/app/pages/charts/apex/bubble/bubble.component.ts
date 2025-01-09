import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [PagetitleComponent, NgApexchartsModule],
  templateUrl: './bubble.component.html',
  styles: ``,
})
export class BubbleComponent {
  generateData(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    var i = 0
    var series = []
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

      series.push([x, y, z])
      baseval += 86400000
      i++
    }
    return series
  }

  generateData1(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    var i = 0
    var series = []
    while (i < count) {
      //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

      series.push([baseval, y, z])
      baseval += 86400000
      i++
    }
    return series
  }

  bubbleChart: Partial<ChartOptions> = {
    chart: {
      height: 380,
      type: 'bubble',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Bubble 1',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble 2',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble 3',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    fill: {
      opacity: 0.8,
    },
    colors: ['#727cf5', '#ffbc00', '#fa5c7c'],
    xaxis: {
      tickAmount: 12,
      type: 'category',
    },
    yaxis: {
      max: 70,
    },
    grid: {
      borderColor: '#f1f3fa',
      padding: {
        bottom: 5,
      },
    },
    legend: {
      offsetY: 7,
    },
  }

  secondbubbleChart: Partial<ChartOptions> = {
    chart: {
      height: 380,
      type: 'bubble',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Product 1',
        data: this.generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Product 2',
        data: this.generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Product 3',
        data: this.generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Product 4',
        data: this.generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    fill: {
      type: 'gradient',
    },
    colors: ['#727cf5', '#0acf97', '#fa5c7c', '#39afd1'],
    xaxis: {
      tickAmount: 12,
      type: 'datetime',

      labels: {
        rotate: 0,
      },
    },
    yaxis: {
      max: 70,
    },
    legend: {
      offsetY: 7,
    },
    grid: {
      borderColor: '#f1f3fa',
      padding: {
        bottom: 5,
      },
    },
  }
}
