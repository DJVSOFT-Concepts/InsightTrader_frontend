import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartConfiguration } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'

@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [CardTitleComponent, BaseChartDirective],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Project Status"
        [menuItems]="[
          { label: 'Weekly Report' },
          { label: 'Monthly Report' },
          { label: 'Action' },
          { label: 'Settings' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div class="mt-3 mb-4 chartjs-chart" style="height: 204px;">
          <canvas
            baseChart
            id="project-status-chart"
            [datasets]="projectstatusChart.datasets"
            [labels]="projectstatusChart.labels"
            [options]="projectstatusChart.options"
            [type]="'doughnut'"
            data-colors="#0acf97,#727cf5,#fa5c7c"
          ></canvas>
        </div>

        <div class="row text-center mt-2 py-2">
          <div class="col-sm-4">
            <div class="my-2 my-sm-0">
              <i class="mdi mdi-trending-up text-success mt-3 h3"></i>
              <h3 class="fw-normal">
                <span>64%</span>
              </h3>
              <p class="text-muted mb-0">Completed</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="my-2 my-sm-0">
              <i class="mdi mdi-trending-down text-primary mt-3 h3"></i>
              <h3 class="fw-normal">
                <span>26%</span>
              </h3>
              <p class="text-muted mb-0">In-progress</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="my-2 my-sm-0">
              <i class="mdi mdi-trending-down text-danger mt-3 h3"></i>
              <h3 class="fw-normal">
                <span>10%</span>
              </h3>
              <p class="text-muted mb-0">Behind</p>
            </div>
          </div>
        </div>
        <!-- end row-->
      </div>
      <!-- end card body-->
    </div>
    <!-- end card -->
  `,
  styles: ``,
})
export class ProjectStatusComponent {
  projectstatusChart = {
    type: 'doughnut',
    labels: ['Completed', 'In-progress', 'Behind'],
    datasets: [
      {
        data: [64, 26, 10],
        backgroundColor: ['#0acf97', '#727cf5', '#fa5c7c'],
        borderColor: 'transparent',
        borderWidth: 3,
      },
    ],
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      cutout: '80%',
    },
  }
}
