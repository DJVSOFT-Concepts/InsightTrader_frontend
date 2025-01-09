import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Tasks"
        [menuItems]="[
          { label: 'Weekly Report' },
          { label: 'Monthly Report' },
          { label: 'Action' },
          { label: 'Settings' }
        ]"
      ></card-title>

      <div
        class="card-header bg-light-lighten border-top border-bottom border-light py-1 text-center"
      >
        <p class="m-0"><b>107</b> Tasks completed out of 195</p>
      </div>
      <div class="card-body pt-2">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap table-hover mb-0">
            <tbody>
              <tr>
                <td>
                  <h5 class="font-14 my-1">
                    <a href="javascript:void(0);" class="text-body"
                      >Coffee detail page - Main Page</a
                    >
                  </h5>
                  <span class="text-muted font-13">Due in 3 days</span>
                </td>
                <td>
                  <span class="text-muted font-13">Status</span> <br />
                  <span class="badge badge-warning-lighten">In-progress</span>
                </td>
                <td>
                  <span class="text-muted font-13">Assigned to</span>
                  <h5 class="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                </td>
                <td>
                  <span class="text-muted font-13">Total time spend</span>
                  <h5 class="font-14 mt-1 fw-normal">3h 20min</h5>
                </td>
                <td class="table-action" style="width: 90px;">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-pencil"></i
                  ></a>
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-delete"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-14 my-1">
                    <a href="javascript:void(0);" class="text-body"
                      >Drinking bottle graphics</a
                    >
                  </h5>
                  <span class="text-muted font-13">Due in 27 days</span>
                </td>
                <td>
                  <span class="text-muted font-13">Status</span> <br />
                  <span class="badge badge-danger-lighten">Outdated</span>
                </td>
                <td>
                  <span class="text-muted font-13">Assigned to</span>
                  <h5 class="font-14 mt-1 fw-normal">Jerry F. Powell</h5>
                </td>
                <td>
                  <span class="text-muted font-13">Total time spend</span>
                  <h5 class="font-14 mt-1 fw-normal">12h 21min</h5>
                </td>
                <td class="table-action" style="width: 90px;">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-pencil"></i
                  ></a>
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-delete"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-14 my-1">
                    <a href="javascript:void(0);" class="text-body"
                      >App design and development</a
                    >
                  </h5>
                  <span class="text-muted font-13">Due in 7 days</span>
                </td>
                <td>
                  <span class="text-muted font-13">Status</span> <br />
                  <span class="badge badge-success-lighten">Completed</span>
                </td>
                <td>
                  <span class="text-muted font-13">Assigned to</span>
                  <h5 class="font-14 mt-1 fw-normal">Scot M. Smith</h5>
                </td>
                <td>
                  <span class="text-muted font-13">Total time spend</span>
                  <h5 class="font-14 mt-1 fw-normal">78h 05min</h5>
                </td>
                <td class="table-action" style="width: 90px;">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-pencil"></i
                  ></a>
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-delete"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-14 my-1">
                    <a href="javascript:void(0);" class="text-body"
                      >Poster illustation design</a
                    >
                  </h5>
                  <span class="text-muted font-13">Due in 5 days</span>
                </td>
                <td>
                  <span class="text-muted font-13">Status</span> <br />
                  <span class="badge badge-warning-lighten">In-progress</span>
                </td>
                <td>
                  <span class="text-muted font-13">Assigned to</span>
                  <h5 class="font-14 mt-1 fw-normal">John P. Ritter</h5>
                </td>
                <td>
                  <span class="text-muted font-13">Total time spend</span>
                  <h5 class="font-14 mt-1 fw-normal">26h 58min</h5>
                </td>
                <td class="table-action" style="width: 90px;">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-pencil"></i
                  ></a>
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-delete"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive-->
      </div>
      <!-- end card body-->
    </div>
    <!-- end card -->
  `,
  styles: ``,
})
export class TasksComponent {}
