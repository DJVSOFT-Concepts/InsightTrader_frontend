import { Component } from '@angular/core'
import { tasksData } from '@core/data'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-daily-task',
  standalone: true,
  imports: [SimplebarAngularModule],
  template: `
    <div class="card card-h-100">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4 class="header-title mb-0">Daily Task</h4>
        <div>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Today</option>
            <option value="1">Yesterday</option>
            <option value="2">Tomorrow</option>
          </select>
        </div>
      </div>

      <ngx-simplebar
        class="card-body py-0 mb-3"
        data-simplebar
        style="max-height: 304px"
      >
        @for (data of taskList; track $index) {
          <div class="border rounded p-2 mb-2">
            <ul class="list-inline mb-2">
              <li class="list-inline-item font-16 fw-semibold">
                <a href="javascript:void(0);" class="text-reset">{{
                  data.title
                }}</a>
              </li>
              <li class="list-inline-item text-muted">
                <i class="mdi mdi-circle-small"></i>
              </li>
              <li class="list-inline-item font-13 fw-semibold text-muted">
                {{ data.time }}
              </li>
            </ul>
            <p class="text-muted mb-0">
              {{ data.shortDesc }}
            </p>
            <p class="text-muted mb-0">
              <i class="mdi mdi-account-group me-1"></i>
              <b>{{ data.teamSize }}</b> People
            </p>
          </div>
        }
        <div class="text-center">
          <i class="mdi mdi-dots-circle mdi-spin font-20 text-muted"></i>
        </div>
      </ngx-simplebar>
    </div>
  `,
  styles: ``,
})
export class DailyTaskComponent {
  taskList = tasksData

  ngOnInit(): void {}
}
