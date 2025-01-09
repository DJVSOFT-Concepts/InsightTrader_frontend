import { Component } from '@angular/core'
import { projectList } from '@core/data'
import { Project } from '@core/model/crm.model'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-project-widget',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <div class="row">
      @for (data of projectData; track $index) {
        <div class="col-sm-6 col-xl-3 mb-3">
          <div class="card mb-0 h-100">
            <div class="card-body">
              <div ngbDropdown class="dropdown float-end">
                <a
                  ngbDropdownToggle
                  class="dropdown-toggle arrow-none card-drop"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-dots-horizontal"></i>
                </a>
                <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                  <!-- item-->
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item"
                    ><i class="mdi mdi-plus-circle me-1"></i> Add Card</a
                  >
                  <!-- item-->
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item"
                    ><i class="mdi mdi-content-copy me-1"></i> Copy List</a
                  >
                  <!-- item-->
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item"
                    ><i class="mdi mdi-square-edit-outline me-1"></i> Edit</a
                  >
                  <!-- item-->
                  <hr class="dropdown-divider" />
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item text-danger"
                    ><i class="mdi mdi-trash-can-outline me-1"></i> Detele</a
                  >
                </div>
              </div>
              <h4 class="header-title">{{ data.title }}</h4>
              <h5
                class="text-muted fw-normal mt-0 text-truncate"
                title="Campaign Sent"
              >
                {{ data.task }}
              </h5>

              <div class="d-flex align-items-center mt-4">
                <div class="flex-shrink-0">
                  <h5 class="font-13 text-muted my-0">
                    <i class="mdi mdi-clock-outline"></i> {{ data.created_on }}
                  </h5>
                </div>
                <div class="flex-grow-1 ms-2"></div>
                <div class="text-end multi-user">
                  @for (img of data.members; track $index) {
                    <a href="javascript:void(0);" class="d-inline-block">
                      <img
                        src="{{ img }}"
                        class="rounded-circle avatar-xs"
                        alt="friend"
                      />
                    </a>
                  }
                </div>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      }

      <div class="col-sm-6 col-xl-3 mb-3">
        <div class="card mb-0 h-100">
          <div class="card-body">
            <div
              class="border-dashed border-2 border h-100 w-100 rounded d-flex align-items-center justify-content-center"
            >
              <a
                href="javascript:void(0);"
                class="text-center text-muted p-2"
                data-bs-toggle="modal"
                data-bs-target="#CreateProject"
              >
                <i class="mdi mdi-plus h3 my-0"></i>
                <h4 class="font-16 mt-1 mb-0 d-block">Add New Project</h4>
              </a>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
  `,
  styles: ``,
})
export class ProjectWidgetComponent {
  projectData!: Project[]

  ngOnInit(): void {
    this.projectData = projectList
  }
}
