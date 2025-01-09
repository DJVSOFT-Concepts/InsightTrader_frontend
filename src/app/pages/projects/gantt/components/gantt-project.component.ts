import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ganttprojects } from '@core/data'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-gantt-project',
  standalone: true,
  imports: [CommonModule, SimplebarAngularModule],
  template: `
    <ngx-simplebar class="pe-xl-3" data-simplebar style="max-height: 535px">
      @for (data of projectData; track $index) {
        <a href="javascript:void(0);" class="text-body">
          <div
            class="d-flex p-2"
            [ngClass]="{
              'mt-2': $index == 0,
              'bg-light-subtle': data.name == 'Dark Moon'
            }"
          >
            <div class="avatar-sm d-table">
              <span
                class="avatar-title rounded-circle"
                [ngClass]="{
                  'bg-success-lighten text-success': data.status == 'On-Track',
                  'bg-warning-lighten text-warning ': data.status == 'Locked',
                  'bg-danger-lighten text-danger': data.status == 'Delayed'
                }"
              >
                <i class="{{ data.icon }} font-24"></i>
              </span>
            </div>
            <div class="ms-2">
              <h5 class="mt-0 mb-0">
                {{ data.name }}
                <span
                  class="badge ms-1"
                  [ngClass]="{
                    'badge-success-lighten': data.status == 'On-Track',
                    'badge-warning-lighten': data.status == 'Locked',
                    'badge-danger-lighten': data.status == 'Delayed'
                  }"
                  >{{ data.status }}</span
                >
              </h5>
              <p class="mt-1 mb-0 text-muted">ID: {{ data.id }}</p>
            </div>
          </div>
        </a>
      }
    </ngx-simplebar>
  `,
  styles: ``,
})
export class GanttProjectComponent {
  projectData = ganttprojects
}
