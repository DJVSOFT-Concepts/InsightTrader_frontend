import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { BaseChartDirective } from 'ng2-charts'
import { down, hexToRGB, skipped } from '../chartjs.model'
import { ChartConfiguration } from 'chart.js'

var datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170]
@Component({
  selector: 'app-line',
  standalone: true,
  imports: [PagetitleComponent, BaseChartDirective],
  template: `
    <app-pagetitle
      title="Chartjs"
      subtitle="Charts"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Interpolation</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="interpolation-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="interpolationChart.type"
                  [data]="interpolationChart.data"
                  [options]="interpolationChart.options"
                ></canvas>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Line</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="line-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="lineChart.type"
                  [data]="lineChart.data"
                  [options]="lineChart.options"
                ></canvas>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Multi-Axes</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="multi-axes-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="multiaxesChart.type"
                  [data]="multiaxesChart.data"
                  [options]="multiaxesChart.options"
                ></canvas>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Point Styling</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="point-styling-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="pointstylingChart.type"
                  [data]="pointstylingChart.data"
                  [options]="pointstylingChart.options"
                ></canvas>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Line Segment</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="line-segment-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="linesegmentChart.type"
                  [data]="linesegmentChart.data"
                  [options]="linesegmentChart.options"
                ></canvas>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Stepped</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="stepped-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="steppedChart.type"
                  [data]="steppedChart.data"
                  [options]="steppedChart.options"
                ></canvas>
              </div>
            </div>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class LineComponent {
  interpolationChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: datapoints,
          borderColor: '#727cf5',
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        },
        {
          label: 'Small Radius',
          data: datapoints,
          borderColor: '#0acf97',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Small Radius',
          data: datapoints,
          borderColor: '#dee2e6',
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,

          position: 'top',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  }

  lineChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [32, 42, 42, 62, 52, 75, 62],
          borderColor: '#727cf5',
          fill: true,
          backgroundColor: hexToRGB('#727cf5', 0.3),
        },
        {
          label: 'Small Radius',
          data: [42, 58, 66, 93, 82, 105, 92],
          fill: true,
          backgroundColor: 'transparent',
          borderColor: '#0acf97',
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,

          position: 'top',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  }

  multiaxesChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [12, -19, 14, -15, 18, -14, -7],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
          borderWidth: 1.5,
          yAxisID: 'y',
        },
        {
          label: 'Small Radius',
          data: [-10, 19, -15, -8, -17, 12, 8],
          backgroundColor: hexToRGB('#0acf97', 0.3),
          borderColor: '#0acf97',
          borderWidth: 1.5,
          yAxisID: 'y1',
        },
      ],
    },
    options: {
      interaction: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,

          position: 'top',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: {
            display: false,
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  }

  pointstylingChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, -19, 14, -15, 14, -8],
          borderColor: '#727cf5',
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          stacked: true,

          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,

          grid: {
            display: false,
          },
        },
      },
    },
  }

  linesegmentChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, NaN, 48, 56, 57, 40],
          borderColor: '#727cf5',
          spanGaps: true,
          segment: {
            borderColor: function (ctx) {
              return (
                skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)')
              )
            },
            borderDash: function (ctx) {
              return skipped(ctx, ['6', '6'])
            },
          },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,

          position: 'top',
        },
      },
      scales: {
        x: {
          stacked: true,

          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,

          grid: {
            display: false,
          },
        },
      },
    },
  }

  steppedChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, -19, 14, -15, 14, -8],
          borderColor: '#727cf5',
          fill: false,
          stepped: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        axis: 'x',
      },
      plugins: {
        legend: {
          display: false,

          position: 'top',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  }
}
