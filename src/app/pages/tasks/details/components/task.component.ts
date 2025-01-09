import { Component, Input } from '@angular/core'
import { ListTaskItem } from '@core/model/tasks.model'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <!-- project card -->
    <div class="card d-block">
      <div class="card-body">
        <div ngbDropdown class="dropdown card-widgets">
          <a
            ngbDropdownToggle
            class="dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="uil uil-ellipsis-h"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="uil uil-file-upload me-1"></i>Attachment
            </a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="uil uil-edit me-1"></i>Edit
            </a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="uil uil-file-copy-alt me-1"></i>Mark as Duplicate
            </a>
            <div class="dropdown-divider"></div>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item text-danger">
              <i class="uil uil-trash-alt me-1"></i>Delete
            </a>
          </div>
          <!-- end dropdown menu-->
        </div>
        <!-- end dropdown-->

        <div class="form-check float-start">
          <input type="checkbox" class="form-check-input" id="completedCheck" />
          <label class="form-check-label" for="completedCheck">
            Mark as completed
          </label>
        </div>
        <!-- end form-check-->

        <div class="clearfix"></div>

        <h3 class="mt-3">{{ task.title }}</h3>

        <div class="row">
          <div class="col-6">
            <!-- assignee -->
            <p class="mt-2 mb-1 text-muted fw-bold font-12 text-uppercase">
              Assigned To
            </p>
            <div class="d-flex">
              <img
                src="{{ task.assignee_avatar }}"
                alt="Arya S"
                class="rounded-circle me-2"
                height="24"
              />
              <div>
                <h5 class="mt-1 font-14">{{ task.assigned_to }}</h5>
              </div>
            </div>
            <!-- end assignee -->
          </div>
          <!-- end col -->

          <div class="col-6">
            <!-- start due date -->
            <p class="mt-2 mb-1 text-muted fw-bold font-12 text-uppercase">
              Due Date
            </p>
            <div class="d-flex">
              <i class="uil uil-schedule font-18 text-success me-1"></i>
              <div>
                <h5 class="mt-1 font-14">{{ task.due_date }}</h5>
              </div>
            </div>
            <!-- end due date -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <h5 class="mt-3">Overview:</h5>

        <p class="text-muted mb-4">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. Some quick
          example text to build on the card title and make up the bulk of the
          card's content. Some quick example text to build on the card title and
          make up.
        </p>

        <!-- start sub tasks/checklists -->
        <h5 class="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>
        @for (checkdata of task.checklists; track $index) {
          <div class="form-check mt-1">
            <input type="checkbox" class="form-check-input" id="checklist1" />
            <label class="form-check-label strikethrough" for="checklist1">
              {{ checkdata.title }}
            </label>
          </div>
        }
        <!-- end sub tasks/checklists -->
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class TaskComponent {
  @Input() task!: ListTaskItem
}
