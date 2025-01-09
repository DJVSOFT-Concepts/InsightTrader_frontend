import { Component } from '@angular/core'
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-featured-video',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="header-title">Featured Video For You</h4>
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
              <a href="javascript:void(0);" class="dropdown-item">Today</a>
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">Yesterday</a>
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">Last Week</a>
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">Last Month</a>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/9_eqq0HlN9g?autohide=0&showinfo=0&controls=0"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- end card-body -->
    </div>
  `,
  styles: ``,
})
export class FeaturedVideoComponent {}
