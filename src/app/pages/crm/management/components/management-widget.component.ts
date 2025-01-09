import { Component } from '@angular/core'
import { projectsData } from '@core/data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-management-widget',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <div class="row">
      @for (data of stateData; track $index) {
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div ngbDropdown class="dropdown float-end">
                <a
                  ngbDropdownToggle
                  class="dropdown-toggle arrow-none card-drop"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-dots-vertical"></i>
                </a>
                <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                  <!-- item-->
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item"
                    ><i class=""></i><i class="uil uil-pen me-1"></i> Edit</a
                  >
                  <!-- item-->
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item text-danger"
                    ><i class="uil uil-trash me-1"></i> Remove</a
                  >
                </div>
              </div>

              <div class="d-flex align-items-center mb-3">
                <div class="flex-shrink-0">
                  <div class="avatar-sm">
                    <span
                      class="avatar-title bg-{{ data.variant }}-lighten text-{{
                        data.variant
                      }} rounded"
                    >
                      <i class="{{ data.icon }} font-24"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <a
                    href="javascript:void(0);"
                    class="font-16 fw-bold text-reset"
                    >{{ data.title }}
                    <i
                      class="mdi mdi-checkbox-marked-circle-outline text-success"
                    ></i
                  ></a>
                  <p class="text-muted mb-0">{{ data.subTitle }}</p>
                </div>
              </div>

              <span class="badge badge-lg bg-light text-reset rounded-pill me-1"
                >Work in Progress
              </span>
              <span class="font-12 fw-semibold text-muted"
                ><i class="mdi mdi-clock-time-four me-1"></i>
                {{ data.hours }} Hours</span
              >

              <div class="row mt-2">
                <div class="col-6">
                  <p class="text-muted fw-semibold mb-1">Tasks</p>
                  <h3 class="my-0 text-muted fw-normal">{{ data.task }}</h3>
                </div>
                <div class="col-6 text-end">
                  <p class="text-muted fw-semibold mb-1">Assign to</p>

                  <div class="multi-user">
                    @for (img of data.assignTo; track $index) {
                      @if ($index < 3 && data.assignTo.length < 4) {
                        <a href="javascript:void(0);" class="d-inline-block">
                          <img
                            src="{{ data.assignTo[$index].avatar }}"
                            class="rounded-circle avatar-xs"
                            alt="friend"
                          />
                        </a>
                      } @else {
                        @if ($index < 2) {
                          <a href="javascript:void(0);" class="d-inline-block">
                            <img
                              src="{{ data.assignTo[$index].avatar }}"
                              class="rounded-circle avatar-xs"
                              alt="friend"
                            />
                          </a>
                        } @else if ($index < data.assignTo.length - 1) {
                          <a
                            href="javascript:void(0);"
                            class="d-inline-block ms-n2"
                          >
                            <div class="avatar-xs">
                              <span
                                class="avatar-title bg-primary rounded-circle"
                              >
                                +{{ data.assignTo.length - 2 }}
                              </span>
                            </div>
                          </a>
                        }
                      }
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      }
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class ManagementWidgetComponent {
  stateData = projectsData
}
