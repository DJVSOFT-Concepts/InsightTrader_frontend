import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CheckListItem, ListTaskItem } from '@core/model/tasks.model'
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'task-section',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, NgbCollapseModule],
  template: `
    <h5 class="m-0 pb-2">
      <a
        class="text-dark"
        data-bs-toggle="collapse"
        role="button"
        aria-expanded="false"
        aria-controls="todayTasks"
        (click)="collapse.toggle()"
      >
        <i
          class="uil font-18"
          [ngClass]="isCollapsed ? 'uil-angle-right' : 'uil-angle-down'"
        ></i
        >{{ title }}
        <span class="text-muted">({{ tasks.length }})</span>
      </a>
    </h5>

    <div
      #collapse="ngbCollapse"
      [(ngbCollapse)]="isCollapsed"
      class="collapse"
      id="todayTasks"
    >
      <div class="card mb-0">
        <div class="card-body pb-1 pt-2">
          <!-- task -->
          @for (data of tasks; track $index) {
            <div class="row justify-content-sm-between mt-2">
              <div class="col-sm-6 mb-2 mb-sm-0">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="task1"
                    (change)="markCompleted(data)"
                  />
                  <label class="form-check-label" for="task1">
                    {{ data.title }}
                  </label>
                </div>
                <!-- end checkbox -->
              </div>
              <!-- end col -->

              <div class="col-sm-6">
                <div class="d-flex justify-content-between">
                  <div id="tooltip-container">
                    <img
                      src="{{ data.assignee_avatar }}"
                      alt="image"
                      class="avatar-xs rounded-circle me-1"
                      placement="bottom"
                      ngbTooltip="Assigned to {{ data.assigned_to }}"
                    />
                  </div>
                  <div>
                    <ul class="list-inline font-13 text-end">
                      <li class="list-inline-item">
                        <i class="uil uil-schedule font-16 me-1"></i>
                        {{ data.due_date }}
                      </li>
                      <li class="list-inline-item ms-1">
                        <i class="uil uil-align-alt font-16 me-1"></i>
                        {{ getCompletedChecklistItemsCount(data.checklists) }} /
                        {{ data.checklists.length }}
                      </li>
                      <li class="list-inline-item ms-1">
                        <i class="uil uil-comment-message font-16 me-1"></i>
                        {{ data.comments.length }}
                      </li>
                      <li class="list-inline-item ms-2">
                        <span
                          class="badge p-1"
                          [ngClass]="{
                            'badge-danger-lighten': data.priority === 'High',
                            'badge-info-lighten': data.priority === 'Medium',
                            'badge-success-lighten': data.priority === 'Low'
                          }"
                          >{{ data.priority }}</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- end .d-flex-->
              </div>
              <!-- end col -->
            </div>
            <!-- end task -->
          }
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card -->
    </div>
    <!-- end .collapse-->
  `,
  styles: ``,
})
export class TaskSectionComponent {
  @Input() title: string = ''
  @Input() tasks: ListTaskItem[] = []
  @Output() selectTask: EventEmitter<ListTaskItem> =
    new EventEmitter<ListTaskItem>()

  isCollapsed = false

  getCompletedChecklistItemsCount(checklists: CheckListItem[]): number {
    return checklists.filter((t) => t.completed).length
  }

  markCompleted(task: ListTaskItem) {
    this.selectTask.emit(task)
  }
}
