import { Component } from '@angular/core'
import { ChartConfiguration } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'
@Component({
  selector: 'app-task-overview',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4 class="header-title">Tasks Overview</h4>
        <div class="d-flex gap-1">
          <button type="button" class="btn btn-soft-secondary btn-sm">
            ALL
          </button>
          <button type="button" class="btn btn-soft-primary btn-sm">1M</button>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            6M
          </button>
          <button type="button" class="btn btn-soft-secondary btn-sm">
            1Y
          </button>
        </div>
      </div>

      <div class="card-body">
        <div dir="ltr">
          <div class="chartjs-chart" style="height: 320px;">
            <canvas
              baseChart
              [type]="taskareaChart.type"
              [data]="taskareaChart.data"
              [options]="taskareaChart.options"
              id="task-area-chart"
              data-bgColor="#727cf5"
              data-borderColor="#727cf5"
            ></canvas>
          </div>
        </div>
      </div>
      <!-- end card body-->
    </div>
    <!-- end card -->
  `,
  styles: ``,
})
export class TaskOverviewComponent {
  taskareaChart: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: [
        'Sprint 1',
        'Sprint 2',
        'Sprint 3',
        'Sprint 4',
        'Sprint 5',
        'Sprint 6',
        'Sprint 7',
        'Sprint 8',
        'Sprint 9',
        'Sprint 10',
        'Sprint 11',
        'Sprint 12',
        'Sprint 13',
        'Sprint 14',
        'Sprint 15',
        'Sprint 16',
        'Sprint 17',
        'Sprint 18',
        'Sprint 19',
        'Sprint 20',
        'Sprint 21',
        'Sprint 22',
        'Sprint 23',
        'Sprint 24',
      ],
      datasets: [
        {
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          label: 'This year',
          backgroundColor: '#727cf5',
          borderColor: '#727cf5',
          data: [
            16, 44, 32, 48, 72, 60, 84, 64, 78, 50, 68, 34, 26, 44, 32, 48, 72,
            60, 74, 52, 62, 50, 32, 22,
          ],
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
          propagate: false,
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          reverse: false,
          grid: {
            color: 'rgba(0,0,0,0.05)',
          },
        },
        y: {
          ticks: {
            stepSize: 10,
            display: false,
          },
          min: 10,
          max: 100,
          display: true,
          grid: {
            color: 'rgba(0,0,0,0)',
          },
        },
      },
    },
  }
}
