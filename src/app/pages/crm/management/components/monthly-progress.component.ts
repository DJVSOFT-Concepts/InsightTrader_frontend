import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { progressDetails } from '@core/data'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-monthly-progress',
  standalone: true,
  imports: [CommonModule, CardTitleComponent, NgbTooltipModule],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Monthly Progress"
        [menuItems]="[
          { label: 'Today' },
          { label: 'Yesterday' },
          { label: 'Last Week' },
          { label: 'Last Month' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div class="table-responsive mt-n2">
          <table class="table table-centered table-hover table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Employees Name</th>
                <th scope="col">Eamil Address</th>
                <th scope="col">Project Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              @for (data of progressList; track $index) {
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="rounded-circle"
                          src="{{ data.avatar }}"
                          alt="Avtar image"
                          width="31"
                        />
                      </div>
                      <div class="flex-grow-1 ms-2">{{ data.name }}</div>
                    </div>
                  </td>
                  <td>{{ data.emailId }}</td>
                  <td>{{ data.projectName }}</td>
                  <td>
                    <span
                      class="badge"
                      [ngClass]="{
                        'bg-primary-lighten text-primary':
                          data.status == 'In Progress',
                        'bg-success-lighten text-success':
                          data.status == 'Completed',
                        'bg-warning-lighten text-warning':
                          data.status == 'Pending'
                      }"
                      >{{ data.status }}</span
                    >
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      class="font-18 text-info me-2"
                      data-bs-toggle="tooltip"
                      placement="top"
                      ngbTooltip="Edit"
                      ><i class="uil uil-pen"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="font-18 text-danger"
                      data-bs-toggle="tooltip"
                      placement="top"
                      ngbTooltip="Delete"
                      ><i class="uil uil-trash"></i
                    ></a>
                  </td>
                </tr>
                <!-- end tr -->
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MonthlyProgressComponent {
  progressList = progressDetails

  ngOnInit(): void {}
}
