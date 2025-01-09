import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { CommentsComponent } from './components/comments.component'
import { FilesComponent } from './components/files.component'
import { ProgressComponent } from './components/progress.component'
import { projects } from '@core/data/project'
import { CommonModule } from '@angular/common'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    PagetitleComponent,
    CommentsComponent,
    FilesComponent,
    ProgressComponent,
    CommonModule,
    NgbTooltipModule,
  ],
  template: `
    <app-pagetitle
      title="Project Details"
      subtitle="Projects"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xxl-8 col-lg-6">
        <!-- project card -->
        <div class="card d-block">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h3 class="mt-0">{{ projectDetail.title }}</h3>
              <div class="dropdown">
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle arrow-none card-drop"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ri-more-fill"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
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
                    ><i class="mdi mdi-email-outline me-1"></i>Invite</a
                  >
                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><i class="mdi mdi-exit-to-app me-1"></i>Leave</a
                  >
                </div>
              </div>
              <!-- project title-->
            </div>
            <div
              class="badge mb-3"
              [ngClass]="{
                'bg-success': projectDetail.state == 'Finished',
                'text-bg-secondary': projectDetail.state == 'Ongoing'
              }"
            >
              {{ projectDetail.state }}
            </div>

            <h5>Project Overview:</h5>

            <p class="text-muted mb-2">
              With supporting text below as a natural lead-in to additional
              contenposuere erat a ante. Voluptates, illo, iste itaque voluptas
              corrupti ratione reprehenderit magni similique? Tempore, quos
              delectus asperiores libero voluptas quod perferendis! Voluptate,
              quod illo rerum? Lorem ipsum dolor sit amet.
            </p>

            <p class="text-muted mb-4">
              Voluptates, illo, iste itaque voluptas corrupti ratione
              reprehenderit magni similique? Tempore, quos delectus asperiores
              libero voluptas quod perferendis! Voluptate, quod illo rerum?
              Lorem ipsum dolor sit amet. With supporting text below as a
              natural lead-in to additional contenposuere erat a ante.
            </p>

            <div class="row">
              <div class="col-md-4">
                <div class="mb-4">
                  <h5>Start Date</h5>
                  <p>17 March 2018 <small class="text-muted">1:00 PM</small></p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-4">
                  <h5>End Date</h5>
                  <p>
                    22 December 2018 <small class="text-muted">1:00 PM</small>
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-4">
                  <h5>Budget</h5>
                  <p>$15,800</p>
                </div>
              </div>
            </div>

            <div id="tooltip-container">
              <h5>Team Members:</h5>
              @for (image of projectDetail.memberList; track $index) {
                <a
                  href="javascript:void(0);"
                  placement="top"
                  ngbTooltip="{{ image.name }}"
                  class="d-inline-block me-1"
                >
                  <img
                    src="{{ image.img }}"
                    class="rounded-circle img-thumbnail avatar-sm"
                    alt="friend"
                  />
                </a>
              }
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
        <app-comments></app-comments>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xxl-4">
        <app-progress></app-progress>

        <app-files></app-files>
      </div>
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class DetailsComponent {
  projectDetail = projects[0]
}
