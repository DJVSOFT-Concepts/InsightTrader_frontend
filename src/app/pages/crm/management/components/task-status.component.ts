import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Task Status"
        [menuItems]="[
          { label: 'Today' },
          { label: 'Yesterday' },
          { label: 'Last Week' },
          { label: 'Last Month' }
        ]"
      ></card-title>

      <div class="card-body pt-2">
        <div class="mb-4">
          <div class="d-flex align-items-center mb-2">
            <div class="flex-shrink-0">
              <i
                class="mdi mdi-file-edit widget-icon bg-primary-lighten text-primary"
              ></i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="my-0 fw-semibold">Running Project</h5>
            </div>
            <h5 class="my-0">145/160</h5>
          </div>
          <div class="progress" style="height: 6px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 91%"
              aria-valuenow="91"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="mb-4">
          <div class="d-flex align-items-center mb-2">
            <div class="flex-shrink-0">
              <i
                class="mdi mdi-account-multiple widget-icon bg-success-lighten text-success"
              ></i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="my-0 fw-semibold">Active Clients</h5>
            </div>
            <h5 class="my-0">40/85</h5>
          </div>
          <div class="progress" style="height: 6px">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 47%"
              aria-valuenow="47"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="mb-4">
          <div class="d-flex align-items-center mb-2">
            <div class="flex-shrink-0">
              <i
                class="mdi mdi-account-multiple-plus widget-icon bg-danger-lighten text-danger"
              ></i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="my-0 fw-semibold">New Request</h5>
            </div>
            <h5 class="my-0">68%</h5>
          </div>
          <div class="progress" style="height: 6px">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 68%"
              aria-valuenow="68"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="">
          <div class="d-flex align-items-center mb-2">
            <div class="flex-shrink-0">
              <i
                class="mdi mdi-emoticon-happy widget-icon bg-info-lighten text-info"
              ></i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="my-0 fw-semibold">Happy Clients</h5>
            </div>
            <h5 class="my-0">48/50</h5>
          </div>
          <div class="progress" style="height: 6px">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class TaskStatusComponent {}
