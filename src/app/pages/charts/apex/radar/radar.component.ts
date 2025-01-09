import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [PagetitleComponent, NgApexchartsModule],
  templateUrl: './radar.component.html',
  styles: ``,
})
export class RadarComponent {
  radarChart: Partial<ChartOptions> = {
    chart: {
      height: 350,
      type: 'radar',
    },
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    colors: ['#727cf5'],
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  }

  polygonradarChart: Partial<ChartOptions> = {
    chart: {
      height: 350,
      type: 'radar',
    },
    series: [
      {
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ],
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    plotOptions: {
      radar: {
        size: 140,
      },
    },
    colors: ['#FF4560'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeWidth: 2,
    },
    yaxis: {
      tickAmount: 7,
      //   labels: {
      //     formatter: function (val, i) {
      //       if (i % 2 === 0) {
      //         return val;
      //       } else {
      //         return '';
      //       }
      //     },
      //   },
    },
  }

  multipleradarChart: Partial<ChartOptions> = {
    chart: {
      height: 350,
      type: 'radar',
    },
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    stroke: {
      width: 0,
    },
    fill: {
      opacity: 0.4,
    },
    markers: {
      size: 0,
    },
    legend: {
      offsetY: -10,
    },
    colors: ['#727cf5', '#02a8b5', '#fd7e14'],
    labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
  }
}
