import { Component } from '@angular/core'
import { ChartConfiguration } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-3">Progress</h5>
        <div dir="ltr">
          <div class="mt-3 chartjs-chart" style="height: 320px">
            <canvas
              baseChart
              type="line"
              [type]="progressChart.type"
              [data]="progressChart.data"
              [options]="progressChart.options"
              id="line-chart-example"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class ProgressComponent {
  progressChart: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Completed Tasks',
          backgroundColor: 'rgba(10, 207, 151, 0.3)',
          borderColor: '#0acf97',
          tension: 0.4,
          data: [32, 42, 42, 62, 52, 75, 62],
          fill: {
            target: 'origin',
            above: 'rgba(10, 207, 151, 0.3)',
          },
          capBezierPoints: true,
        },
        {
          label: 'Plan Tasks',
          fill: true,
          backgroundColor: 'transparent',
          borderColor: '#727cf5',
          borderDash: [5, 5],
          tension: 0.4,
          data: [42, 58, 66, 93, 82, 105, 92],
          capBezierPoints: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      hover: {
        intersect: true,
      },
      plugins: {
        filler: {
          propagate: true,
        },
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(0,0,0,0.05)',
          },
        },
        y: {
          ticks: {
            stepSize: 20,
          },
          display: true,
          grid: {
            color: 'rgba(0,0,0,0)',
          },
        },
      },
    },
  }
}
