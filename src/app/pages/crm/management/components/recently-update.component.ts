import { Component } from '@angular/core'
import { managementclients } from '@core/data'
import { ManagementClient } from '@core/model/crm.model'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-recently-update',
  standalone: true,
  imports: [NgbDropdownModule, NgbTooltipModule],
  template: `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5">
      @for (data of clientList; track $index) {
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="rounded-circle avatar-sm"
                    src="{{ data.avatar }}"
                    alt="Avtar image"
                  />
                </div>
                <div class="flex-grow-1 ms-2">
                  <a href="javascript:void(0);" class="text-secondary"
                    ><h5 class="my-1">{{ data.name }}</h5></a
                  >
                  <p class="text-muted mb-0">{{ data.companyName }}</p>
                </div>

                <div ngbDropdown class="dropdown">
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
                      ><i class="mdi mdi-account me-1"></i>Visite Profilo</a
                    >
                    <!-- item-->
                    <a
                      ngbDropdownItem
                      href="javascript:void(0);"
                      class="dropdown-item"
                      ><i class="mdi mdi-block-helper me-1"></i>Block</a
                    >
                    <!-- item-->
                    <div class="dropdown-divider my-1"></div>
                    <a
                      ngbDropdownItem
                      href="javascript:void(0);"
                      class="dropdown-item text-danger"
                      ><i class="mdi mdi-trash-can-outline me-1"></i>Remove</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-between align-items-center card-body py-2 border-top border-light"
            >
              <h5 class="my-0 font-13 fw-semibold text-muted">
                <i class="mdi mdi-calendar me-1"></i> {{ data.date }}
              </h5>
              <a
                href="javascript:void(0);"
                class="text-muted"
                data-bs-toggle="modal"
                data-bs-target="#client-chat"
                ><i
                  class="uil uil-comment-alt-lines font-18"
                  data-bs-toggle="tooltip"
                  placement="top"
                  ngbTooltip="Chat"
                ></i
              ></a>
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
export class RecentlyUpdateComponent {
  clientList!: ManagementClient[]

  ngOnInit(): void {
    this.clientList = managementclients
  }
}
