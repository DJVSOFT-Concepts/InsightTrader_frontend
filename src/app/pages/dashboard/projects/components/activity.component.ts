import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CardTitleComponent, NgbDropdownModule],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Recent Activities"
        [menuItems]="[
          { label: 'Weekly Report' },
          { label: 'Monthly Report' },
          { label: 'Action' },
          { label: 'Settings' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap table-hover mb-0">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-start">
                    <img
                      class="me-2 rounded-circle"
                      src="assets/images/users/avatar-2.jpg"
                      width="40"
                      alt="Generic placeholder image"
                    />
                    <div>
                      <h5 class="mt-0 mb-1">
                        Soren Drouin<small class="fw-normal ms-3"
                          >18 Jan 2019 11:28 pm</small
                        >
                      </h5>
                      <span class="font-13"
                        >Completed "Design new idea"...</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-muted font-13">Project</span> <br />
                  <p class="mb-0">Hyper Mockup</p>
                </td>
                <td class="table-action" style="width: 50px;">
                  <div ngbDropdown class="dropdown">
                    <a
                      ngbDropdownToggle
                      class="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dots-horizontal"></i>
                    </a>
                    <div
                      ngbDropdownMenu
                      class="dropdown-menu dropdown-menu-end"
                    >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Settings</a
                      >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Action</a
                      >
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="d-flex align-items-start">
                    <img
                      class="me-2 rounded-circle"
                      src="assets/images/users/avatar-6.jpg"
                      width="40"
                      alt="Generic placeholder image"
                    />
                    <div>
                      <h5 class="mt-0 mb-1">
                        Anne Simard<small class="fw-normal ms-3"
                          >18 Jan 2019 11:09 pm</small
                        >
                      </h5>
                      <span class="font-13"
                        >Assigned task "Poster illustation design"...</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-muted font-13">Project</span> <br />
                  <p class="mb-0">Hyper Mockup</p>
                </td>
                <td class="table-action" style="width: 50px;">
                  <div ngbDropdown class="dropdown">
                    <a
                      ngbDropdownToggle
                      href="javascript:void(0)"
                      class="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dots-horizontal"></i>
                    </a>
                    <div
                      ngbDropdownMenu
                      class="dropdown-menu dropdown-menu-end"
                    >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Settings</a
                      >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Action</a
                      >
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="d-flex align-items-start">
                    <img
                      class="me-2 rounded-circle"
                      src="assets/images/users/avatar-3.jpg"
                      width="40"
                      alt="Generic placeholder image"
                    />
                    <div>
                      <h5 class="mt-0 mb-1">
                        Nicolas Chartier<small class="fw-normal ms-3"
                          >15 Jan 2019 09:29 pm</small
                        >
                      </h5>
                      <span class="font-13"
                        >Completed "Drinking bottle graphics"...</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-muted font-13">Project</span> <br />
                  <p class="mb-0">Web UI Design</p>
                </td>
                <td class="table-action" style="width: 50px;">
                  <div ngbDropdown class="dropdown">
                    <a
                      ngbDropdownToggle
                      href="javascript:void(0)"
                      class="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dots-horizontal"></i>
                    </a>
                    <div
                      ngbDropdownMenu
                      class="dropdown-menu dropdown-menu-end"
                    >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Settings</a
                      >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Action</a
                      >
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="d-flex align-items-start">
                    <img
                      class="me-2 rounded-circle"
                      src="assets/images/users/avatar-4.jpg"
                      width="40"
                      alt="Generic placeholder image"
                    />
                    <div>
                      <h5 class="mt-0 mb-1">
                        Gano Cloutier<small class="fw-normal ms-3"
                          >10 Jan 2019 08:36 pm</small
                        >
                      </h5>
                      <span class="font-13"
                        >Completed "Design new idea"...</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-muted font-13">Project</span> <br />
                  <p class="mb-0">UBold Admin</p>
                </td>
                <td class="table-action" style="width: 50px;">
                  <div ngbDropdown class="dropdown">
                    <a
                      ngbDropdownToggle
                      href="javascript:void(0)"
                      class="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dots-horizontal"></i>
                    </a>
                    <div
                      ngbDropdownMenu
                      class="dropdown-menu dropdown-menu-end"
                    >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Settings</a
                      >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Action</a
                      >
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="d-flex align-items-start">
                    <img
                      class="me-2 rounded-circle"
                      src="assets/images/users/avatar-5.jpg"
                      width="40"
                      alt="Generic placeholder image"
                    />
                    <div>
                      <h5 class="mt-0 mb-1">
                        Francis Achin<small class="fw-normal ms-3"
                          >08 Jan 2019 12:28 pm</small
                        >
                      </h5>
                      <span class="font-13"
                        >Assigned task "Hyper app design"...</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-muted font-13">Project</span> <br />
                  <p class="mb-0">Website Mockup</p>
                </td>
                <td class="table-action" style="width: 50px;">
                  <div ngbDropdown class="dropdown">
                    <a
                      ngbDropdownToggle
                      href="javascript:void(0)"
                      class="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dots-horizontal"></i>
                    </a>
                    <div
                      ngbDropdownMenu
                      class="dropdown-menu dropdown-menu-end"
                    >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Settings</a
                      >
                      <!-- item-->
                      <a
                        ngbDropdownItem
                        href="javascript:void(0);"
                        class="dropdown-item"
                        >Action</a
                      >
                    </div>
                  </div>
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
export class ActivityComponent {}
