import { Component } from '@angular/core'

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  template: `
    <div class="card widget-inline">
      <div class="card-body p-0">
        <div class="row g-0">
          <div class="col-sm-6 col-lg-3">
            <div class="card rounded-0 shadow-none m-0">
              <div class="card-body text-center">
                <i class="ri-briefcase-line text-muted font-24"></i>
                <h3><span>29</span></h3>
                <p class="text-muted font-15 mb-0">Total Projects</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div
              class="card rounded-0 shadow-none m-0 border-start border-light"
            >
              <div class="card-body text-center">
                <i class="ri-list-check-2 text-muted font-24"></i>
                <h3><span>715</span></h3>
                <p class="text-muted font-15 mb-0">Total Tasks</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div
              class="card rounded-0 shadow-none m-0 border-start border-light"
            >
              <div class="card-body text-center">
                <i class="ri-group-line text-muted font-24"></i>
                <h3><span>31</span></h3>
                <p class="text-muted font-15 mb-0">Members</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div
              class="card rounded-0 shadow-none m-0 border-start border-light"
            >
              <div class="card-body text-center">
                <i class="ri-line-chart-line text-muted font-24"></i>
                <h3>
                  <span>93% </span>
                  <i class="mdi mdi-arrow-up text-success"></i>
                </h3>
                <p class="text-muted font-15 mb-0">Productivity</p>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end card-box-->
  `,
  styles: ``,
})
export class StatisticsComponent {}
