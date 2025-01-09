import { Component, inject } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { Store } from '@ngrx/store'
import { fetchCrmClient } from '@store/crm/crm.actions'
import { getCRMClinets } from '@store/crm/crm.selector'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { Client } from '@core/model/crm.model'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    PagetitleComponent,
    NgbDropdownModule,
    NgbTooltipModule,
    RouterModule,
  ],
  template: `
    <app-pagetitle
      title="Clients List"
      subtitle="CRM"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      @for (data of clientList; track $index) {
        <div class="col-md-6 col-xxl-3">
          <div class="card">
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
                    >View Profile</a
                  >
                  <!-- item-->
                  <a
                    ngbDropdownItem
                    href="javascript:void(0);"
                    class="dropdown-item"
                    >Project Info</a
                  >
                </div>
              </div>

              <div class="text-center">
                <img
                  src="{{ data.avatar }}"
                  class="rounded-circle avatar-md img-thumbnail"
                  alt="friend"
                />
                <h4 class="mt-3 my-1">
                  <a routerLink="/pages-profile-2" class="text-reset"
                    >{{ data.name }}
                    @if (data.verifiedClient) {
                      <i class="mdi mdi-check-decagram text-success"></i>
                    }
                  </a>
                </h4>
                <p class="mb-0 text-muted">
                  <i class="mdi mdi-email-outline me-1"></i>{{ data.emailId }}
                </p>
                <hr class="bg-dark-lighten my-3" />
                <h5 class="mt-3 fw-semibold text-muted">
                  Complate Total <b>{{ data.completedProject }}</b> Project
                </h5>

                <div class="row mt-3">
                  <div class="col-4">
                    <a
                      href="javascript:void(0);"
                      class="btn w-100 btn-light"
                      placement="top"
                      ngbTooltip="Message"
                      ><i class="mdi mdi-message-processing-outline"></i
                    ></a>
                  </div>
                  <div class="col-4">
                    <a
                      href="javascript:void(0);"
                      class="btn w-100 btn-light"
                      placement="top"
                      ngbTooltip="Call"
                      ><i class="mdi mdi-phone"></i
                    ></a>
                  </div>
                  <div class="col-4">
                    <a
                      href="javascript:void(0);"
                      class="btn w-100 btn-light"
                      placement="top"
                      ngbTooltip="Email"
                      ><i class="mdi mdi-email-outline"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End col -->
      }
    </div>
    <!-- End row -->

    <div class="row py-4">
      <div class="col-12 text-center">
        <i class="mdi mdi-dots-circle mdi-spin font-24 text-muted"></i>
      </div>
    </div>
  `,
  styles: ``,
})
export class ClientsComponent {
  clientList!: Client[]

  private store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(fetchCrmClient())
    this.store.select(getCRMClinets).subscribe((data) => {
      this.clientList = data
    })
  }
}
