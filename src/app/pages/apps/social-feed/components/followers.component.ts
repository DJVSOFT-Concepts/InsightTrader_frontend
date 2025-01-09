import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-followers',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <div class="card">
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h4 class="header-title">People you may know</h4>
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
              <a href="javascript:void(0);" class="dropdown-item">View All</a>
            </div>
          </div>
        </div>

        <div class="inbox-widget">
          <div class="inbox-item">
            <div class="inbox-item-img">
              <img
                src="assets/images/users/avatar-2.jpg"
                class="rounded-circle"
                alt=""
              />
            </div>
            <p class="inbox-item-author">Robb Stark</p>
            <p class="inbox-item-text">The first king in the North</p>
            <p class="inbox-item-date">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary px-1 py-0"
              >
                <i class="uil uil-user-plus font-16"></i>
              </button>
            </p>
          </div>
          <div class="inbox-item">
            <div class="inbox-item-img">
              <img
                src="assets/images/users/avatar-3.jpg"
                class="rounded-circle"
                alt=""
              />
            </div>
            <p class="inbox-item-author">Stillnot David</p>
            <p class="inbox-item-text">Lady of winterfall</p>
            <p class="inbox-item-date">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary px-1 py-0"
              >
                <i class="uil uil-user-plus font-16"></i>
              </button>
            </p>
          </div>
          <div class="inbox-item">
            <div class="inbox-item-img">
              <img
                src="assets/images/users/avatar-4.jpg"
                class="rounded-circle"
                alt=""
              />
            </div>
            <p class="inbox-item-author">Cersei Lannister</p>
            <p class="inbox-item-text">Queen of the Seven Kingdoms</p>
            <p class="inbox-item-date">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary px-1 py-0"
              >
                <i class="uil uil-user-plus font-16"></i>
              </button>
            </p>
          </div>

          <div class="inbox-item">
            <div class="inbox-item-img">
              <img
                src="assets/images/users/avatar-5.jpg"
                class="rounded-circle"
                alt=""
              />
            </div>
            <p class="inbox-item-author">Daenerys Targaryen</p>
            <p class="inbox-item-text">Hey! there I'm available...</p>
            <p class="inbox-item-date">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary px-1 py-0"
              >
                <i class="uil uil-user-plus font-16"></i>
              </button>
            </p>
          </div>
          <div class="inbox-item">
            <div class="inbox-item-img">
              <img
                src="assets/images/users/avatar-6.jpg"
                class="rounded-circle"
                alt=""
              />
            </div>
            <p class="inbox-item-author">Adhamd Annaway</p>
            <p class="inbox-item-text">Queen Daenerys</p>
            <p class="inbox-item-date">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary px-1 py-0"
              >
                <i class="uil uil-user-plus font-16"></i>
              </button>
            </p>
          </div>
        </div>
        <!-- end inbox-widget -->

        <div class="mt-2 mb-3 text-center">
          <a href="javascript:void(0);"
            >View More<i class="uil uil-arrow-right ms-1"></i
          ></a>
        </div>
      </div>
      <!-- end card-body -->
    </div>
  `,
  styles: ``,
})
export class FollowersComponent {}
