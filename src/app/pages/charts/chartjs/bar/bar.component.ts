import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { BaseChartDirective } from 'ng2-charts'
import { hexToRGB } from '../chartjs.model'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-bar',
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
            <h4 class="header-title mb-4">Border Radius</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="border-radius-example"
                  data-colors="#727cf5,#0acf97"
                  [data]="borderRadiusChart.data"
                  [type]="borderRadiusChart.type"
                  [options]="borderRadiusChart.options"
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
            <h4 class="header-title mb-4">Floating</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="floating-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="floatingChart.type"
                  [data]="floatingChart.data"
                  [options]="floatingChart.options"
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
            <h4 class="header-title mb-4">Horizontal</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="horizontal-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="horizontalChart.type"
                  [data]="horizontalChart.data"
                  [options]="horizontalChart.options"
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
                  data-colors="#727cf5,#0acf97"
                  [type]="stackedChart.type"
                  [data]="stackedChart.data"
                  [options]="stackedChart.options"
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
            <h4 class="header-title mb-4">Stacked with Groups</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="group-stack-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="groupstackChart.type"
                  [data]="groupstackChart.data"
                  [options]="groupstackChart.options"
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
            <h4 class="header-title mb-4">Vertical</h4>

            <div dir="ltr">
              <div class="mt-3 chartjs-chart" style="height: 320px">
                <canvas
                  baseChart
                  id="vertical-example"
                  data-colors="#727cf5,#0acf97"
                  [type]="verticalChart.type"
                  [data]="verticalChart.data"
                  [options]="verticalChart.options"
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
export class BarComponent {
  borderRadiusChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [12, -19, 14, -15, 12, -14],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
        {
          label: 'Small Radius',
          data: [-10, 19, -15, -8, 12, -7],
          backgroundColor: hexToRGB('#0acf97', 0.3),
          borderColor: '#0acf97',
          borderWidth: 2,
          borderRadius: 5,
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

  floatingChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [12, -19, 14, -15, 12, -14],
          backgroundColor: '#727cf5',
        },
        {
          label: 'Small Radius',
          data: [-10, 19, -15, -8, 12, -7],
          backgroundColor: '#0acf97',
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

  horizontalChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April'],
      datasets: [
        {
          label: 'Fully Rounded',
          data: [12, -19, 14, -15],
          borderColor: '#727cf5',
          backgroundColor: hexToRGB('#727cf5', 0.3),
          borderWidth: 1,
        },
        {
          label: 'Small Radius',
          data: [-10, 19, -15, -8],
          backgroundColor: hexToRGB('#0acf97', 0.3),
          borderColor: '#0acf97',
          borderWidth: 1,
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

  stackedChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, -19, 14, -15],
          backgroundColor: '#727cf5',
        },
        {
          label: 'Dataset 2',
          data: [-10, 19, -15, -8],
          backgroundColor: '#0acf97',
        },
        {
          label: 'Dataset 3',
          data: [-10, 19, -15, -8],
          backgroundColor: '#dee2e6',
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

  groupstackChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, -19, 14, -15],
          backgroundColor: '#727cf5',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: [-10, 19, -15, -8],
          backgroundColor: '#0acf97',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 3',
          data: [-10, 19, -15, -8],
          backgroundColor: '#dee2e6',
          stack: 'Stack 1',
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

  verticalChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, -19, 14, -15],
          backgroundColor: '#727cf5',
        },
        {
          label: 'Dataset 2',
          data: [-10, 19, -15, -8],
          backgroundColor: '#0acf97',
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
}
