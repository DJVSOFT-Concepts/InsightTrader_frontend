import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { BaseChartDirective } from 'ng2-charts'
import { hexToRGB } from '../chartjs.model'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-other',
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
            <h4 class="header-title mb-4">Bubble</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="bubble-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="bubbleChart.type"
                  [data]="bubbleChart.data"
                  [options]="bubbleChart.options"
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
            <h4 class="header-title mb-4">DONUT</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="donut-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2"
                  [type]="donutChart.type"
                  [data]="donutChart.data"
                  [options]="donutChart.options"
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
            <h4 class="header-title mb-4">Pie</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="pie-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2, #f56f36"
                  [type]="pieChart.type"
                  [data]="pieChart.data"
                  [options]="pieChart.options"
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
            <h4 class="header-title mb-4">Polar Area</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="polar-area-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2, #f56f36"
                  [type]="polarareaChart.type"
                  [data]="polarareaChart.data"
                  [options]="polarareaChart.options"
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
                  data-colors="#727cf5,#0acf97"
                  [type]="radarChart.type"
                  [data]="radarChart.data"
                  [options]="radarChart.options"
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
            <h4 class="header-title mb-4">Scatter</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="scatter-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="scatterChart.type"
                  [data]="scatterChart.data"
                  [options]="scatterChart.options"
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
            <h4 class="header-title mb-4">Stacked Bar/Line</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="bar-line-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="barlineChart.type"
                  [data]="barlineChart.data"
                  [options]="barlineChart.options"
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
export class OtherComponent {
  bubbleChart: ChartConfiguration = {
    type: 'bubble',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [
            { x: 10, y: 20, r: 5 },
            { x: 20, y: 10, r: 5 },
            { x: 15, y: 15, r: 5 },
          ],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
          borderWidth: 2,
          borderSkipped: false,
        },
        {
          label: 'Small Radius',
          data: [
            { x: 12, y: 22 },
            { x: 22, y: 20 },
            { x: 5, y: 15 },
          ],
          backgroundColor: hexToRGB('#0acf97', 0.3),
          borderColor: '#0acf97',
          borderWidth: 2,
          borderSkipped: false,
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

  donutChart: ChartConfiguration = {
    type: 'doughnut',
    data: {
      labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
      datasets: [
        {
          data: [300, 135, 48, 154],
          backgroundColor: ['#727cf5', '#fa5c7c', '#0acf97', '#ebeff2'],
          borderColor: 'transparent',
          borderWidth: 3,
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
    },
  }

  pieChart: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [12, 19, 14, 15, 40],
          backgroundColor: [
            '#727cf5',
            '#fa5c7c',
            '#0acf97',
            '#ebeff2',
            '#f56f36',
          ],
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  }

  polarareaChart: ChartConfiguration = {
    type: 'polarArea',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, 19, 14, 15, 20],
          backgroundColor: [
            '#727cf5',
            '#fa5c7c',
            '#0acf97',
            '#ebeff2',
            '#f56f36',
          ],
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
        r: {
          display: false,
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
          label: 'Dataset 1',
          data: [12, 29, 39, 22, 28, 34],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
        },
        {
          label: 'Dataset 2',
          data: [10, 19, 15, 28, 34, 39],
          borderColor: '#0acf97',
          backgroundColor: hexToRGB('#0acf97', 0.3),
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
    },
  }

  scatterChart: ChartConfiguration = {
    type: 'scatter',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [
            { x: 10, y: 50 },
            { x: 50, y: 10 },
            { x: 15, y: 15 },
            { x: 20, y: 45 },
            { x: 25, y: 18 },
            { x: 34, y: 38 },
          ],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
        },
        {
          label: 'Dataset 2',
          data: [
            { x: 15, y: 45 },
            { x: 40, y: 20 },
            { x: 30, y: 5 },
            { x: 35, y: 25 },
            { x: 18, y: 25 },
            { x: 40, y: 8 },
          ],
          borderColor: '#0acf97',
          backgroundColor: hexToRGB('#0acf97', 0.3),
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

  barlineChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 35, 18, 15, 25, 22],
          backgroundColor: '#727cf5',
          stack: 'combined',
          type: 'bar',
        },
        {
          label: 'Dataset 2',
          data: [13, 23, 38, 22, 25, 30, 28],

          borderColor: '#0acf97',
          stack: 'combined',
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
}
