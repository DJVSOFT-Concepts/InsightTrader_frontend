import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { TaskSectionComponent } from './components/task-section.component'
import { TaskDetailComponent } from './components/task-detail.component'
import { otherTasks, todayTasks, upcomingTasks } from '@core/data'
import { ListTaskItem } from '@core/model/tasks.model'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [PagetitleComponent, TaskSectionComponent, TaskDetailComponent],
  template: `
    <div class="row">
      <div class="col-xxl-8">
        <!-- start page title -->
        <div class="page-title-box">
          <div class="page-title-right">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <button
                  class="input-group-text btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="uil uil-sort-amount-down"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Due Date</a
                  >
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Added Date</a
                  >
                  <a class="dropdown-item" href="javascript:void(0)"
                    >Assignee</a
                  >
                </div>
              </div>
            </form>
          </div>
          <h4 class="page-title">
            Tasks
            <a href="javascript:void(0)" class="btn btn-success btn-sm ms-3"
              >Add New</a
            >
          </h4>
        </div>
        <!-- end page title -->

        <!-- tasks panel -->
        <div class="mt-2">
          <task-section
            [title]="'Today'"
            [tasks]="todayTask"
            (selectTask)="onSelectTask($event)"
          ></task-section>
        </div>
        <!-- end .mt-2-->

        <!-- upcoming tasks -->
        <div class="mt-4">
          <task-section
            [title]="'Upcoming'"
            [tasks]="upcomingTask"
            (selectTask)="onSelectTask($event)"
          ></task-section>
        </div>
        <!-- end upcoming tasks -->

        <!-- start other tasks -->
        <div class="mt-4 mb-4">
          <task-section
            [title]="'Other'"
            [tasks]="otherTask"
            (selectTask)="onSelectTask($event)"
          ></task-section>
        </div>
      </div>
      <!-- end col -->

      <!-- task details -->
      <div class="col-xxl-4">
        <app-task-detail [task]="selectedTask"></app-task-detail>
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class TasksComponent {
  todayTask = todayTasks
  upcomingTask = upcomingTasks
  otherTask = otherTasks
  selectedTask: ListTaskItem = todayTasks[0]

  onSelectTask(task: ListTaskItem): void {
    this.selectedTask = task
  }
}
