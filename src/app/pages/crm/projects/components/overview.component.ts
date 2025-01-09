import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { ChartOptions } from '@core/model/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CardTitleComponent, NgApexchartsModule],
  template: `
    <div class="card card-h-100">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Project Overview"
        [menuItems]="[
          { label: 'Today' },
          { label: 'Yesterday' },
          { label: 'Last Week' },
          { label: 'Last Month' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div class="row align-items-center">
          <div class="col-md-6 order-2 order-md-1">
            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0">
                <i
                  class="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-primary-lighten text-primary"
                ></i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="fw-semibold mt-0 mb-1">Product Design</h5>
                <ul class="list-inline mb-0 text-muted">
                  <li class="list-inline-item"><b>26</b> Total Projects</li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-circle-small"></i>
                  </li>
                  <li class="list-inline-item"><b>4</b> Employees</li>
                </ul>
              </div>
            </div>

            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0">
                <i
                  class="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-danger-lighten text-danger"
                ></i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="fw-semibold mt-0 mb-1">Web Development</h5>
                <ul class="list-inline mb-0 text-muted">
                  <li class="list-inline-item"><b>30</b> Total Projects</li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-circle-small"></i>
                  </li>
                  <li class="list-inline-item"><b>5</b> Employees</li>
                </ul>
              </div>
            </div>

            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0">
                <i
                  class="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-success-lighten text-success"
                ></i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="fw-semibold mt-0 mb-1">Illustration Design</h5>
                <ul class="list-inline mb-0 text-muted">
                  <li class="list-inline-item"><b>12</b> Total Projects</li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-circle-small"></i>
                  </li>
                  <li class="list-inline-item"><b>3</b> Employees</li>
                </ul>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i
                  class="mdi mdi-checkbox-blank-circle widget-icon rounded-circle bg-warning-lighten text-warning"
                ></i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="fw-semibold mt-0 mb-1">UI/UX Design</h5>
                <ul class="list-inline mb-0 text-muted">
                  <li class="list-inline-item"><b>8</b> Total Projects</li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-circle-small"></i>
                  </li>
                  <li class="list-inline-item"><b>4</b> Employees</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-6 order-1 order-md-2">
            <div class="mb-3 mb-md-0">
              <div
                id="project-overview-chart"
                class="apex-charts"
                data-colors="#727cf5,#ff679b,#0acf97,#ffbc00"
              >
                <apx-chart
                  [chart]="projectoverviewChart.chart!"
                  [colors]="projectoverviewChart.colors!"
                  [series]="projectoverviewChart.series!"
                  [labels]="projectoverviewChart.labels!"
                  [plotOptions]="projectoverviewChart.plotOptions!"
                ></apx-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class OverviewComponent {
  projectoverviewChart!: Partial<ChartOptions>

  ngOnInit(): void {
    this.projectoverviewChart = {
      chart: {
        height: 326,
        type: 'radialBar',
      },
      colors: ['#727cf5', '#ff679b', '#0acf97', '#ffbc00'],
      series: [85, 70, 80, 65],
      labels: [
        'Product Design',
        'Web Development',
        'Illustration Design',
        'UI/UX Design',
      ],
      plotOptions: {
        radialBar: {
          track: {
            margin: 5,
          },
        },
      },
    }
  }
}
