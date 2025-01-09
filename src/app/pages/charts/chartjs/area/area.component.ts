import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { BaseChartDirective } from 'ng2-charts'
import { hexToRGB } from '../chartjs.model'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-area',
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
            <h4 class="header-title mb-4">Boundaries</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="boundaries-example"
                  data-colors="#727cf5,#0acf97"
                  [data]="boundariesChart.data"
                  [options]="boundariesChart.options"
                  [type]="boundariesChart.type"
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
            <h4 class="header-title mb-4">Different Dataset</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="dataset-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2, #f56f36"
                  [data]="datasetChart.data"
                  [options]="datasetChart.options"
                  [type]="datasetChart.type"
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
            <h4 class="header-title mb-4">Draw Time</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="draw-time-example"
                  data-colors="#727cf5,#0acf97"
                  [data]="drawtimeChart.data"
                  [options]="drawtimeChart.options"
                  [type]="drawtimeChart.type"
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
            <h4 class="header-title mb-4">Stacked</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="stacked-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2, #f56f36"
                  [data]="stackedChart.data"
                  [options]="stackedChart.options"
                  [type]="stackedChart.type"
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
            <h4 class="header-title mb-4">Radar</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="radar-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2, #f56f36"
                  [data]="radarChart.data"
                  [options]="radarChart.options"
                  [type]="radarChart.type"
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
export class AreaComponent {
  boundariesChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [12.5, -19.4, 14.3, -15.0, 10.8, -10.5],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
          fill: false,
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
            color: '#91a6bd40',
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

  datasetChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'D0',
          data: [10, 20, 15, 35, 38, 24],
          borderColor: '#727cf5',
          hidden: true,
          backgroundColor: hexToRGB('#727cf5', 0.3),
        },
        {
          label: 'D1',
          data: [12, 18, 18, 33, 41, 20],
          borderColor: '#fa5c7c',
          fill: '-1',
          backgroundColor: hexToRGB('#fa5c7c', 0.3),
        },
        {
          label: 'D2',
          data: [5, 25, 20, 25, 28, 14],
          borderColor: '#0acf97',
          fill: 1,
          backgroundColor: hexToRGB('#0acf97', 0.3),
        },
        {
          label: 'D3',
          data: [12, 45, 15, 35, 38, 24],
          borderColor: '#ebeff2',
          fill: '-1',
          backgroundColor: hexToRGB('#ebeff2', 0.3),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        filler: {
          propagate: false,
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
            color: 'rgba(0,0,0,1)',
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

  drawtimeChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [10, 20, 15, 35, 38, 24],
          borderColor: '#727cf5',
          backgroundColor: '#727cf5',
          fill: true,
        },
        {
          label: 'Small Radius',
          data: [24, 38, 35, 15, 20, 10],
          backgroundColor: hexToRGB('#0acf97', 0.3),
          borderColor: '#0acf97',
          borderWidth: 1,
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
        filler: {
          propagate: false,
        },
      },
      interaction: {
        intersect: false,
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

  stackedChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'D0',
          data: [10, 20, 15, 35, 38, 24],
          borderColor: '#727cf5',
          fill: true,
          backgroundColor: '#727cf5',
        },
        {
          label: 'D1',
          data: [12, 18, 18, 33, 41, 20],
          borderColor: '#fa5c7c',
          fill: true,
          backgroundColor: '#fa5c7c',
        },
        {
          label: 'D2',
          data: [5, 25, 20, 25, 28, 14],
          borderColor: '#0acf97',
          fill: true,
          backgroundColor: '#0acf97',
        },
        {
          label: 'D3',
          data: [12, 45, 15, 35, 38, 24],
          borderColor: '#ebeff2',
          fill: true,
          backgroundColor: '#ebeff2',
        },
        {
          label: 'D4',
          data: [24, 38, 35, 15, 20, 10],
          borderColor: '#f56f36',
          fill: true,
          backgroundColor: '#f56f36',
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
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
          },

          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Value',
          },
          grid: {
            display: false,
          },
        },
      },
    },
  }

  radarChart: ChartConfiguration = {
    type: 'radar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'D0',
          data: [10, 20, 15, 35, 38, 24],
          borderColor: '#727cf5',
          fill: '-1',
          backgroundColor: hexToRGB('#727cf5', 0.3),
        },
        {
          label: 'D1',
          data: [12, 18, 18, 33, 41, 20],
          borderColor: '#fa5c7c',
          fill: false,
          backgroundColor: hexToRGB('#fa5c7c', 0.3),
        },
        {
          label: 'D2',
          data: [5, 25, 20, 25, 28, 14],
          borderColor: '#0acf97',
          fill: '-1',
          backgroundColor: hexToRGB('#0acf97', 0.3),
        },
        {
          label: 'D3',
          data: [12, 45, 15, 35, 38, 24],
          borderColor: '#ebeff2',
          fill: '-1',
          backgroundColor: hexToRGB('#ebeff2', 0.3),
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
        filler: {
          propagate: false,
        },
      },
    },
  }
}
