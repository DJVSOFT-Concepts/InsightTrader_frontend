import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-user-profile',
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
            <a href="javascript:void(0);" class="dropdown-item">Edit Profile</a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Settings</a>
          </div>
        </div>

        <div class="d-flex align-self-start">
          <img
            class="d-flex align-self-start rounded me-2"
            src="assets/images/users/avatar-5.jpg"
            alt="Dominic Keller"
            height="48"
          />
          <div class="w-100 overflow-hidden">
            <h5 class="mt-1 mb-0">Dominic Keller</h5>
            <p class="mb-1 mt-1 text-muted">California, USA</p>
          </div>
        </div>

        <div class="list-group list-group-flush mt-2">
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action text-primary border-0"
            ><i class="uil uil-images me-1"></i> News Feed</a
          >
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-comment-alt-message me-1"></i> Messages</a
          >
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-calendar-alt me-1"></i> Events</a
          >
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-users-alt me-1"></i> Groups</a
          >
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-copy me-1"></i> Pages</a
          >
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class UserProfileComponent {}
