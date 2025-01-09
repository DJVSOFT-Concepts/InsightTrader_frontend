import { Component } from '@angular/core'
import { ChartOptions } from '@core/model/apexchart.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [PagetitleComponent, NgApexchartsModule],
  templateUrl: './pie.component.html',
  styles: ``,
})
export class PieComponent {
  pieChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'pie',
    },
    series: [44, 55, 41, 17, 15],
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#e3eaef'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  donutChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'donut',
    },
    series: [44, 55, 41, 17, 15],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#39afd1', '#ffbc00', '#313a46', '#fa5c7c', '#0acf97'],
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  monochromeChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'pie',
    },
    series: [25, 15, 44, 55, 41, 17],
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  gradientChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'donut',
    },
    series: [44, 55, 41, 17, 15],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#e3eaef'],
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    fill: {
      type: 'gradient',
    },
  }

  patternedChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'donut',
      dropShadow: {
        enabled: true,
        color: '#111',
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      show: true,
      width: 2,
    },
    series: [44, 55, 41, 17, 15],
    colors: ['#39afd1', '#ffbc00', '#313a46', '#fa5c7c', '#0acf97'],
    labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
    },
    fill: {
      type: 'pattern',
      opacity: 1,
      pattern: {
        style: [
          'verticalLines',
          'squares',
          'horizontalLines',
          'circles',
          'slantedLines',
        ],
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  imagePieChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'pie',
    },
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
    colors: ['#39afd1', '#ffbc00', '#727cf5', '#0acf97'],
    series: [44, 33, 54, 45],
    fill: {
      type: 'image',
      opacity: 0.85,
      image: {
        src: [
          'assets/images/small/small-1.jpg',
          'assets/images/small/small-2.jpg',
          'assets/images/small/small-3.jpg',
          'assets/images/small/small-4.jpg',
        ],
        width: 25,
      },
    },
    stroke: {
      width: 4,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  updatedonutChart: Partial<ChartOptions> = {
    chart: {
      height: 320,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    series: [44, 55, 13, 33],
    colors: ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: 7,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }
}
