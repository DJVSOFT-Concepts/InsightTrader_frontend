import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Project } from '@core/model/project.model'
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { fetchProjectList } from '@store/projects/project-action'
import { getprojects } from '@store/projects/project-selector'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    PagetitleComponent,
    NgbDropdownModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    RouterModule,
  ],
  template: `
    <app-pagetitle
      title="Projects List"
      subtitle="Projects"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row mb-2">
      <div class="col-sm-4">
        <a
          routerLink="/apps-projects-add"
          class="btn btn-danger rounded-pill mb-3"
          ><i class="mdi mdi-plus"></i> Create Project</a
        >
      </div>
      <div class="col-sm-8">
        <div class="text-sm-end">
          <div class="btn-group mb-3">
            <button
              type="button"
              class="btn"
              [ngClass]="stateType == 'All' ? 'btn-primary' : 'btn-light'"
              (click)="stateFilter('All')"
            >
              All
            </button>
          </div>
          <div class="btn-group mb-3 ms-1">
            <button
              type="button"
              class="btn"
              [ngClass]="stateType == 'Ongoing' ? 'btn-primary' : 'btn-light'"
              (click)="stateFilter('Ongoing')"
            >
              Ongoing
            </button>
            <button
              type="button"
              class="btn"
              [ngClass]="stateType == 'Finished' ? 'btn-primary' : 'btn-light'"
              (click)="stateFilter('Finished')"
            >
              Finished
            </button>
          </div>
          <div class="btn-group mb-3 ms-2 d-none d-sm-inline-block">
            <button type="button" class="btn btn-secondary">
              <i class="ri-function-line"></i>
            </button>
          </div>
          <div class="btn-group mb-3 d-none d-sm-inline-block">
            <button type="button" class="btn btn-link text-muted">
              <i class="ri-list-check-2"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      @for (data of projectList; track $index) {
        <div class="col-md-6 col-xxl-3">
          <!-- project card -->
          <div
            class="card d-block"
            [ngClass]="{ 'position-relative': data.image }"
          >
            @if (data.image) {
              <img
                class="card-img-top"
                src="{{ data.image }}"
                alt="project image cap"
              />
              <div class="card-img-overlay">
                <div
                  class="badge p-1"
                  [ngClass]="{
                    'bg-success': data.state == 'Finished',
                    'text-bg-secondary': data.state == 'Ongoing'
                  }"
                >
                  {{ data.state }}
                </div>
              </div>
            }
            <div class="card-body">
              @if (!data.image) {
                <div ngbDropdown class="dropdown card-widgets">
                  <a
                    ngbDropdownToggle
                    class="dropdown-toggle arrow-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="ri-more-fill"></i>
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
                      ><i class="mdi mdi-email-outline me-1"></i>Invite</a
                    >
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item"
                      ><i class="mdi mdi-exit-to-app me-1"></i>Leave</a
                    >
                  </div>
                </div>
              }
              <!-- project title-->
              <h4 class="mt-0">
                <a routerLink="/apps-projects-details" class="text-title">{{
                  data.title
                }}</a>
              </h4>
              @if (!data.image) {
                <div
                  class="badge"
                  [ngClass]="{
                    'bg-success': data.state == 'Finished',
                    'text-bg-secondary': data.state == 'Ongoing'
                  }"
                >
                  {{ data.state }}
                </div>
              }
              @if (data.shortDesc) {
                <p class="text-muted font-13 my-3">
                  {{ data.shortDesc }}...<a
                    href="javascript:void(0);"
                    class="fw-bold text-muted"
                    >view more</a
                  >
                </p>
              }

              <!-- project detail-->
              <p class="mb-1">
                <span class="pe-2 text-nowrap mb-2 d-inline-block">
                  <i class="mdi mdi-format-list-bulleted-type text-muted"></i>
                  <b> {{ data.totalTasks }}</b> Tasks
                </span>
                <span class="text-nowrap mb-2 d-inline-block ms-1">
                  <i class="mdi mdi-comment-multiple-outline text-muted"></i>
                  <b> {{ data.totalComments }}</b> Comments
                </span>
              </p>
              <div id="tooltip-container">
                @for (image of data.memberList; track $index) {
                  <a
                    href="javascript:void(0);"
                    placement="top"
                    ngbTooltip="{{ image.name }}"
                    class="d-inline-block"
                  >
                    <img
                      src="{{ image.img }}"
                      class="rounded-circle avatar-xs me-1"
                      alt="friend"
                    />
                  </a>
                }
                <a
                  href="javascript:void(0);"
                  class="d-inline-block text-muted fw-bold ms-2"
                >
                  @if (data.totalMembers - 3 > 0) {
                    +{{ data.totalMembers - 3 }} more
                  }
                </a>
              </div>
            </div>
            <!-- end card-body-->
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-3">
                <!-- project progress-->
                <p class="mb-2 fw-bold">
                  Progress <span class="float-end">{{ data.progress }}%</span>
                </p>
                <ngb-progressbar
                  [value]="data.progress"
                  [height]="'5px'"
                ></ngb-progressbar>
              </li>
            </ul>
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      }
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class ListComponent {
  projectList!: Project[]
  allProject!: Project[]
  stateType: string = 'All'

  private store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(fetchProjectList())
    this.store.select(getprojects).subscribe((data) => {
      this.projectList = data
      this.allProject = data
    })
  }

  // Status Filter
  stateFilter(type: string) {
    this.stateType = type
    if (type != 'All') {
      this.projectList = this.allProject.filter((item) => item.state == type)
    } else {
      this.projectList = this.allProject
    }
  }
}
