import { Component, TemplateRef, inject } from '@angular/core'
import { KanbanTaskItem } from '@core/model/tasks.model'
import { Store } from '@ngrx/store'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import {
  addKanban,
  addKanbanSuccess,
  fetchKanbanList,
} from '@store/tasks/task-action'
import { getkanbanData } from '@store/tasks/task-selector'
import { TaskItemComponent } from './components/task-item.component'
import { DndDropEvent, DndModule } from 'ngx-drag-drop'
import {
  NgbDatepickerModule,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [
    PagetitleComponent,
    TaskItemComponent,
    DndModule,
    NgbModalModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <app-pagetitle
      title="Kanban Board"
      subtitle="Tasks"
      pagetitle="Hyper"
      button="Add New"
      (btnClick)="open(content)"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="board">
          <div
            class="tasks"
            [dndDropzone]
            dndEffectAllowed="move"
            (dndDrop)="onDrop($event, todoTasks)"
          >
            <h5 class="mt-0 task-header">TODO ({{ todoTasks.length }})</h5>

            <div id="task-list-one" class="task-list-items">
              @for (task of todoTasks; track $index) {
                <!-- Task Item -->
                <app-task-item
                  [task]="task"
                  [dndDraggable]="task"
                  dndEffectAllowed="move"
                  (dndMoved)="onDragged(task, todoTasks)"
                ></app-task-item>
                <!-- Task Item End -->
              }
            </div>
            <!-- end company-list-1-->
          </div>

          <div
            class="tasks"
            [dndDropzone]
            dndEffectAllowed="move"
            (dndDrop)="onDrop($event, inprogressTasks)"
          >
            <h5 class="mt-0 task-header text-uppercase">
              In Progress ({{ inprogressTasks.length }})
            </h5>

            <div id="task-list-two" class="task-list-items">
              @for (task of inprogressTasks; track $index) {
                <!-- Task Item -->
                <app-task-item
                  [task]="task"
                  [dndDraggable]="task"
                  dndEffectAllowed="move"
                  (dndMoved)="onDragged(task, inprogressTasks)"
                ></app-task-item>
                <!-- Task Item End -->
              }
            </div>
            <!-- end company-list-2-->
          </div>

          <div
            class="tasks"
            [dndDropzone]
            dndEffectAllowed="move"
            (dndDrop)="onDrop($event, reviewTasks)"
          >
            <h5 class="mt-0 task-header text-uppercase">
              Review ({{ reviewTasks.length }})
            </h5>
            <div id="task-list-three" class="task-list-items">
              @for (task of reviewTasks; track $index) {
                <!-- Task Item -->
                <app-task-item
                  [task]="task"
                  [dndDraggable]="task"
                  dndEffectAllowed="move"
                  (dndMoved)="onDragged(task, reviewTasks)"
                ></app-task-item>
                <!-- Task Item End -->
              }
            </div>
            <!-- end company-list-3-->
          </div>

          <div
            class="tasks"
            [dndDropzone]
            dndEffectAllowed="move"
            (dndDrop)="onDrop($event, doneTasks)"
          >
            <h5 class="mt-0 task-header text-uppercase">
              Done ({{ doneTasks.length }})
            </h5>
            <div id="task-list-four" class="task-list-items">
              @for (task of doneTasks; track $index) {
                <!-- Task Item -->
                <app-task-item
                  [task]="task"
                  [dndDraggable]="task"
                  dndEffectAllowed="move"
                  (dndMoved)="onDragged(task, doneTasks)"
                ></app-task-item>
                <!-- Task Item End -->
              }
            </div>
            <!-- end company-list-4-->
          </div>
        </div>
        <!-- end .board-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->

    <!--  Add new task modal -->
    <ng-template
      #content
      let-modal
      class="task-modal-content"
      id="add-new-task-modal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-header">
        <h4 class="modal-title" id="NewTaskModalLabel">Create New Task</h4>
        <button
          type="button"
          class="btn-close"
          (click)="modal.close()"
        ></button>
      </div>
      <div class="modal-body">
        <form (ngSubmit)="addTask()" [formGroup]="taskForm" class="p-2">
          <div class="mb-3">
            <label class="form-label">Project</label>
            <select
              class="form-select form-control-light"
              formControlName="project"
            >
              <option>Select</option>
              <option>Hyper - Admin Dashboard</option>
              <option>CRM - Design & Development</option>
              <option>iOS - App Design</option>
            </select>
          </div>

          <div class="row">
            <div class="col-md-8">
              <div class="mb-3">
                <label for="task-title" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control form-control-light"
                  id="task-title"
                  placeholder="Enter title"
                  formControlName="title"
                />
              </div>
            </div>

            <div class="col-md-4">
              <div class="mb-3">
                <label for="task-priority2" class="form-label">Priority</label>
                <select
                  class="form-select form-control-light"
                  id="task-priority2"
                  formControlName="priority"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="task-description" class="form-label">Description</label>
            <textarea
              class="form-control form-control-light"
              id="task-description"
              rows="3"
              formControlName="description"
            ></textarea>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="task-title" class="form-label">Assign To</label>
                <select
                  class="form-select form-control-light"
                  id="task-priority"
                  formControlName="user"
                >
                  <option>Coderthemes</option>
                  <option>Robert Carlile</option>
                  <option>Louis Allen</option>
                  <option>Sean White</option>
                  <option>Riley Steele</option>
                  <option>Zak Turnbull</option>
                </select>
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                <label for="task-priority" class="form-label">Due Date</label>
                <input
                  type="text"
                  class="form-control form-control-light"
                  id="birthdatepicker"
                  (click)="d.toggle()"
                  #d="ngbDatepicker"
                  ngbDatepicker
                  formControlName="dueDate"
                />
              </div>
            </div>
          </div>

          <div class="text-end">
            <button type="button" class="btn btn-light" (click)="modal.close()">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </ng-template>
    <!-- /.modal -->
  `,
  styles: ``,
})
export class KanbanComponent {
  kanbanTasks!: KanbanTaskItem[]
  inprogressTasks!: KanbanTaskItem[]
  todoTasks!: KanbanTaskItem[]
  reviewTasks!: KanbanTaskItem[]
  doneTasks!: KanbanTaskItem[]

  taskForm!: UntypedFormGroup

  private store = inject(Store)
  private modalService = inject(NgbModal)

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    // Fetch Data
    this.store.dispatch(fetchKanbanList())
    this.store.select(getkanbanData).subscribe((data) => {
      this.kanbanTasks = data
      this.todoTasks = data.filter((t) => t.status === 'TODO')
      this.inprogressTasks = data.filter((t) => t.status === 'Inprogress')
      this.reviewTasks = data.filter((t) => t.status === 'Review')
      this.doneTasks = data.filter((t) => t.status === 'Done')
    })

    // Form
    this.taskForm = this.formBuilder.group({
      project: ['', [Validators.required]],
      title: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      description: ['', [Validators.required]],
      user: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
    })
  }

  onDragged(item: KanbanTaskItem, list: KanbanTaskItem[]) {
    const index = list.indexOf(item)
    list.splice(index, 1)
  }

  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: KanbanTaskItem[]) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index
      if (typeof index === 'undefined') {
        index = filteredList.length
      }
      filteredList.splice(index, 0, event.data)
    }
  }

  open(content: TemplateRef<HTMLElement>) {
    this.modalService.open(content, { size: 'lg', centered: true })
  }

  // Addtask
  addTask() {
    const date = this.taskForm.get('dueDate')?.value
    const dueDate = date.day + '-' + date.month + '-' + date.year
    this.taskForm.controls['dueDate'].setValue(dueDate)
    const newData = {
      id: 123,
      status: 'TODO',
      userAvatar: 'assets/images/users/avatar-8.jpg',
      ...this.taskForm.value,
    }
    this.store.dispatch(addKanban({ newData }))
    this.modalService.dismissAll()
  }
}
