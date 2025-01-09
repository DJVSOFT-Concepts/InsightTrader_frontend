import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Badges"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default</h4>
            <p class="text-muted font-14 mb-3">
              A simple labeling component. Badges scale to match the size of the
              immediate parent element by using relative font sizing and
              <code>em</code> units.
            </p>

            <h1>
              h1.Example heading
              <span class="badge text-bg-secondary">New</span>
            </h1>
            <h2>
              h2.Example heading
              <span class="badge badge-success-lighten">New</span>
            </h2>
            <h3>
              h2.Example heading <span class="badge bg-primary">New</span>
            </h3>
            <h4>
              h4.Example heading
              <a href="javascript:void(0)" class="badge badge-info-lighten"
                >Info Link</a
              >
            </h4>
            <h5>
              h5.Example heading
              <span class="badge badge-outline-warning">New</span>
            </h5>
            <h6>h6.Example heading <span class="badge bg-danger">New</span></h6>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Pill Badges</h4>
            <p class="text-muted font-14 mb-3">
              Use the <code>.rounded-pill</code> modifier class to make badges
              more rounded.
            </p>

            <span class="badge bg-primary rounded-pill me-1">Primary</span>
            <span class="badge text-bg-secondary rounded-pill me-1"
              >Secondary</span
            >
            <span class="badge bg-success rounded-pill me-1">Success</span>
            <span class="badge bg-danger rounded-pill me-1">Danger</span>
            <span class="badge bg-warning rounded-pill me-1">Warning</span>
            <span class="badge bg-info rounded-pill me-1">Info</span>
            <span class="badge bg-light text-dark rounded-pill me-1"
              >Light</span
            >
            <span class="badge bg-dark text-light rounded-pill">Dark</span>

            <h5 class="mt-4">Lighten Badges</h5>
            <p class="text-muted font-14 mb-3">
              Use the <code>.badge-*-lighten</code> modifier class to make
              badges lighten.
            </p>

            <span class="badge badge-primary-lighten rounded-pill me-1"
              >Primary</span
            >
            <span class="badge badge-secondary-lighten rounded-pill me-1"
              >Secondary</span
            >
            <span class="badge badge-success-lighten rounded-pill me-1"
              >Success</span
            >
            <span class="badge badge-danger-lighten rounded-pill me-1"
              >Danger</span
            >
            <span class="badge badge-warning-lighten rounded-pill me-1"
              >Warning</span
            >
            <span class="badge badge-info-lighten rounded-pill me-1">Info</span>
            <span class="badge badge-dark-lighten rounded-pill">Dark</span>

            <h5 class="mt-4">Outline Badges</h5>
            <p class="text-muted font-14 mb-3">
              Using the <code>.badge-outline-*</code> to quickly create a
              bordered badges.
            </p>

            <span class="badge badge-outline-primary rounded-pill me-1"
              >Primary</span
            >
            <span class="badge badge-outline-secondary rounded-pill me-1"
              >Secondary</span
            >
            <span class="badge badge-outline-success rounded-pill me-1"
              >Success</span
            >
            <span class="badge badge-outline-danger rounded-pill me-1"
              >Danger</span
            >
            <span class="badge badge-outline-warning rounded-pill me-1"
              >Warning</span
            >
            <span class="badge badge-outline-info rounded-pill me-1">Info</span>
            <span class="badge badge-outline-dark rounded-pill">Dark</span>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Contextual variations</h4>
            <p class="text-muted font-14 mb-3">
              Add any of the below mentioned modifier classes to change the
              appearance of a badge. Badge can be more contextual as well. Just
              use regular convention e.g. <code>badge-*color</code>,
              <code>bg-primary</code>
              to have badge with different background.
            </p>

            <span class="badge bg-primary me-1">Primary</span>
            <span class="badge text-bg-secondary me-1">Secondary</span>
            <span class="badge bg-success me-1">Success</span>
            <span class="badge bg-danger me-1">Danger</span>
            <span class="badge bg-warning me-1">Warning</span>
            <span class="badge bg-info me-1">Info</span>
            <span class="badge bg-light text-dark me-1">Light</span>
            <span class="badge bg-dark text-light">Dark</span>

            <h5 class="mt-4">Lighten Badges</h5>
            <p class="text-muted font-14 mb-3">
              Using the <code>.badge-*-lighten</code> modifier class, you can
              have more soften variation.
            </p>

            <span class="badge badge-primary-lighten me-1">Primary</span>
            <span class="badge badge-secondary-lighten me-1">Secondary</span>
            <span class="badge badge-success-lighten me-1">Success</span>
            <span class="badge badge-danger-lighten me-1">Danger</span>
            <span class="badge badge-warning-lighten me-1">Warning</span>
            <span class="badge badge-info-lighten me-1">Info</span>
            <span class="badge badge-dark-lighten">Dark</span>

            <h5 class="mt-4">Outline Badges</h5>
            <p class="text-muted font-14 mb-3">
              Using the <code>.badge-outline-*</code> to quickly create a
              bordered badges.
            </p>

            <span class="badge badge-outline-primary me-1">Primary</span>
            <span class="badge badge-outline-secondary me-1">Secondary</span>
            <span class="badge badge-outline-success me-1">Success</span>
            <span class="badge badge-outline-danger me-1">Danger</span>
            <span class="badge badge-outline-warning me-1">Warning</span>
            <span class="badge badge-outline-info me-1">Info</span>
            <span class="badge badge-outline-dark">Dark</span>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Badge Positioned</h4>
            <p class="text-muted font-14 mb-3">
              Use utilities to modify a <code>.badge</code> and position it in
              the corner of a link or button.
            </p>

            <div class="row">
              <div class="col-6">
                <button type="button" class="btn btn-primary position-relative">
                  Inbox
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-primary position-relative">
                  Profile
                  <span
                    class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
                  >
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-success mt-4">
                  Notifications
                  <span class="badge bg-light text-dark ms-1">4</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class BadgesComponent {}
