import { Component, Input } from '@angular/core'
import { ChatUser } from '@core/model/chat.model'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
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
            <a ngbDropdownItem href="javascript:void(0);" class="dropdown-item"
              >View full</a
            >
            <!-- item-->
            <a ngbDropdownItem href="javascript:void(0);" class="dropdown-item"
              >Edit Contact Info</a
            >
            <!-- item-->
            <a ngbDropdownItem href="javascript:void(0);" class="dropdown-item"
              >Remove</a
            >
          </div>
        </div>

        @if (profileDetail) {
          <div class="mt-3 text-center">
            <img
              src="{{ profileDetail.avatar }}"
              alt="shreyu"
              class="img-thumbnail avatar-lg rounded-circle"
            />
            <h4>{{ profileDetail.name }}</h4>
            <button class="btn btn-primary btn-sm mt-1">
              <i class="uil uil-envelope-add me-1"></i>Send Email
            </button>
            <p class="text-muted mt-2 font-14">
              Last Interacted: <strong>Few hours back</strong>
            </p>
          </div>

          <div class="mt-3">
            <hr class="" />

            <p class="mt-4 mb-1">
              <strong><i class="uil uil-at"></i> Email:</strong>
            </p>
            <p>{{ profileDetail.email }}</p>

            <p class="mt-3 mb-1">
              <strong><i class="uil uil-phone"></i> Phone Number:</strong>
            </p>
            <p>{{ profileDetail.phone }}</p>

            <p class="mt-3 mb-1">
              <strong><i class="uil uil-location"></i> Location:</strong>
            </p>
            <p>{{ profileDetail.location }}</p>

            <p class="mt-3 mb-1">
              <strong><i class="uil uil-globe"></i> Languages:</strong>
            </p>
            <p>{{ profileDetail.languages }}</p>

            <p class="mt-3 mb-2">
              <strong><i class="uil uil-users-alt"></i> Groups:</strong>
            </p>
            <p class="mb-0">
              @if (profileDetail.groups) {
                @for (grp of profileDetail.groups.split(','); track $index) {
                  <span class="badge badge-success-lighten p-1 font-14 ms-1">{{
                    grp
                  }}</span>
                }
              }
            </p>
          </div>
        }
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class UserDetailComponent {
  @Input() profileDetail!: ChatUser

  ngOnInit(): void {}
}
