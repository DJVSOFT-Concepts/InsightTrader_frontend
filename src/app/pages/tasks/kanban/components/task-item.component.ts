import { CommonModule } from '@angular/common'
import { Component, Input, TemplateRef, inject } from '@angular/core'
import { KanbanTaskItem } from '@core/model/tasks.model'
import {
  NgbDropdownModule,
  NgbModal,
  NgbModalModule,
  NgbNavModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbNavModule,
  ],
  template: `
    <div class="card mb-0">
      <div class="card-body p-3">
        <small class="float-end text-muted">{{ task.dueDate }}</small>
        <span
          class="badge"
          [ngClass]="{
            'bg-danger': task.priority === 'High',
            'bg-secondary': task.priority === 'Medium',
            'bg-success': task.priority === 'Low'
          }"
          >{{ task.priority }}</span
        >

        <h5 class="mt-2 mb-2">
          <a
            (click)="open(detailcontent)"
            data-bs-toggle="modal"
            data-bs-target="#task-detail-modal"
            class="text-body"
            >{{ task.title }}</a
          >
        </h5>

        <p class="mb-0">
          <span class="pe-2 text-nowrap mb-2 d-inline-block">
            <i class="mdi mdi-briefcase-outline text-muted"></i>
            {{ task.project }}
          </span>
          <span class="text-nowrap mb-2 d-inline-block">
            <i class="mdi mdi-comment-multiple-outline text-muted"></i>
            <b>{{ task.totalComments }}</b> Comments
          </span>
        </p>

        <div ngbDropdown class="dropdown float-end">
          <a
            ngbDropdownToggle
            class="dropdown-toggle text-muted arrow-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="mdi mdi-dots-vertical font-18"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item"
              ><i class="mdi mdi-pencil me-1"></i>Edit</a
            >
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item"
              ><i class="mdi mdi-delete me-1"></i>Delete</a
            >
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item"
              ><i class="mdi mdi-plus-circle-outline me-1"></i>Add People</a
            >
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item"
              ><i class="mdi mdi-exit-to-app me-1"></i>Leave</a
            >
          </div>
        </div>

        <p class="mb-0">
          <img
            src="{{ task.userAvatar }}"
            alt="user-img"
            class="avatar-xs rounded-circle me-1"
          />
          <span class="align-middle">{{ task.user }}</span>
        </p>
      </div>
      <!-- end card-body -->
    </div>

    <!--  Task details modal -->
    <ng-template
      #detailcontent
      let-modal
      class="modal fade task-modal-content"
      id="task-detail-modal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-header">
        <h4 class="modal-title" id="TaskDetailModalLabel">
          {{ task.title }}
          <span
            class="badge ms-2"
            [ngClass]="{
              'bg-danger': task.priority === 'High',
              'bg-secondary': task.priority === 'Medium',
              'bg-success': task.priority === 'Low'
            }"
            >{{ task.priority }}</span
          >
        </h4>
        <button
          type="button"
          class="btn-close"
          (click)="modal.close()"
        ></button>
      </div>
      <div class="modal-body">
        <div class="p-2">
          <h5 class="mt-0">Description:</h5>

          <p class="text-muted mb-4">
            Voluptates, illo, iste itaque voluptas corrupti ratione
            reprehenderit magni similique? Tempore, quos delectus asperiores
            libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem
            ipsum dolor sit amet. With supporting text below as a natural
            lead-in to additional contenposuere erat a ante.
          </p>

          <div class="row">
            <div class="col-md-4">
              <div class="mb-4">
                <h5>Create Date</h5>
                <p>17 March 2018 <small class="text-muted">1:00 PM</small></p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-4">
                <h5>Due Date</h5>
                <p>
                  22 December 2018 <small class="text-muted">1:00 PM</small>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-4" id="tooltip-container">
                <h5>Asignee:</h5>
                <a
                  href="javascript:void(0);"
                  placement="top"
                  ngbTooltip="{{ task.user }}"
                  class="d-inline-block"
                >
                  <img
                    src="{{ task.userAvatar }}"
                    class="rounded-circle avatar-xs"
                    alt="friend"
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- end row-->

          <ul ngbNav #nav="ngbNav" class="nav nav-tabs nav-bordered mb-3">
            <li [ngbNavItem]="1" class="nav-item">
              <a ngbNavLink class="nav-link"> Comments </a>
              <ng-template ngbNavContent>
                <div class="tab-pane show active" id="home-b1">
                  <textarea
                    class="form-control form-control-light mb-2"
                    placeholder="Write message"
                    id="example-textarea"
                    rows="3"
                  ></textarea>
                  <div class="text-end">
                    <div class="btn-group mb-2 d-none d-sm-inline-block">
                      <button
                        type="button"
                        class="btn btn-link btn-sm text-muted font-18"
                      >
                        <i class="ri-attachment-2"></i>
                      </button>
                    </div>
                    <div class="btn-group mb-2 ms-2 d-none d-sm-inline-block">
                      <button type="button" class="btn btn-primary btn-sm">
                        Submit
                      </button>
                    </div>
                  </div>

                  <div class="d-flex mt-2">
                    <img
                      class="me-3 avatar-sm rounded-circle"
                      src="assets/images/users/avatar-3.jpg"
                      alt="Generic placeholder image"
                    />
                    <div class="w-100">
                      <h5 class="mt-0">Jeremy Tomlinson</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.

                      <div class="d-flex mt-3">
                        <a class="pe-3" href="javascript:void(0)">
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            class="avatar-sm rounded-circle"
                            alt="Generic placeholder image"
                          />
                        </a>
                        <div class="w-100">
                          <h5 class="mt-0">Kathleen Thomas</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-center mt-2">
                    <a href="javascript:void(0);" class="text-danger"
                      >Load more
                    </a>
                  </div>
                </div>
              </ng-template>
            </li>
            <li [ngbNavItem]="2" class="nav-item">
              <a ngbNavLink class="nav-link"> Files </a>
              <ng-template ngbNavContent>
                <div class="tab-pane" id="profile-b1">
                  <div class="card mb-1 shadow-none border">
                    <div class="p-2">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <div class="avatar-sm">
                            <span class="avatar-title rounded"> .ZIP </span>
                          </div>
                        </div>
                        <div class="col ps-0">
                          <a
                            href="javascript:void(0);"
                            class="text-muted fw-bold"
                            >Hyper-admin-design.zip</a
                          >
                          <p class="mb-0">2.3 MB</p>
                        </div>
                        <div class="col-auto">
                          <!-- Button -->
                          <a
                            href="javascript:void(0);"
                            class="btn btn-link btn-lg text-muted"
                          >
                            <i class="ri-download-2-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-1 shadow-none border">
                    <div class="p-2">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            src="assets/images/projects/project-1.jpg"
                            class="avatar-sm rounded"
                            alt="file-image"
                          />
                        </div>
                        <div class="col ps-0">
                          <a
                            href="javascript:void(0);"
                            class="text-muted fw-bold"
                            >Dashboard-design.jpg</a
                          >
                          <p class="mb-0">3.25 MB</p>
                        </div>
                        <div class="col-auto">
                          <!-- Button -->
                          <a
                            href="javascript:void(0);"
                            class="btn btn-link btn-lg text-muted"
                          >
                            <i class="ri-download-2-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-0 shadow-none border">
                    <div class="p-2">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <div class="avatar-sm">
                            <span class="avatar-title bg-secondary rounded">
                              .MP4
                            </span>
                          </div>
                        </div>
                        <div class="col ps-0">
                          <a
                            href="javascript:void(0);"
                            class="text-muted fw-bold"
                            >Admin-bug-report.mp4</a
                          >
                          <p class="mb-0">7.05 MB</p>
                        </div>
                        <div class="col-auto">
                          <!-- Button -->
                          <a
                            href="javascript:void(0);"
                            class="btn btn-link btn-lg text-muted"
                          >
                            <i class="ri-download-2-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ng-template>
            </li>
          </ul>

          <div [ngbNavOutlet]="nav" class="tab-content"></div>
        </div>
        <!-- .p-2 -->
      </div>
    </ng-template>
    <!-- /.modal -->
  `,
  styles: ``,
})
export class TaskItemComponent {
  @Input() task!: KanbanTaskItem

  private modalservice = inject(NgbModal)

  open(content: TemplateRef<HTMLElement>) {
    this.modalservice.open(content, { centered: true, size: 'lg' })
  }
}
