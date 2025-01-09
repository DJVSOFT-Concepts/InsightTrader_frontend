import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [PagetitleComponent, RouterModule, NgbDropdownModule],
  template: `
    <app-pagetitle
      title="Buttons"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default Buttons</h4>
            <p class="text-muted font-14">
              Use the button classes on an <code>&lt;a&gt;</code>,
              <code>&lt;button&gt;</code>, or
              <code>&lt;input&gt;</code> element.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
              <button type="button" class="btn btn-link">Link</button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Button Outline</h4>
            <p class="text-muted font-14">
              Use a classes <code>.btn-outline-**</code> to quickly create a
              bordered buttons.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-outline-success">
                <i class="uil-cloud-computing"></i> Success
              </button>
              <button type="button" class="btn btn-outline-danger">
                Danger
              </button>
              <button type="button" class="btn btn-outline-warning">
                Warning
              </button>
              <button type="button" class="btn btn-outline-info">
                <i class="uil-circuit"></i> Info
              </button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Button-Rounded</h4>
            <p class="text-muted font-14">
              Add <code>.rounded-pill</code> to default button to get rounded
              corners.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary rounded-pill">
                Primary
              </button>
              <button type="button" class="btn btn-secondary rounded-pill">
                Secondary
              </button>
              <button type="button" class="btn btn-success rounded-pill">
                Success
              </button>
              <button type="button" class="btn btn-danger rounded-pill">
                Danger
              </button>
              <button type="button" class="btn btn-warning rounded-pill">
                Warning
              </button>
              <button type="button" class="btn btn-info rounded-pill">
                Info
              </button>
              <button type="button" class="btn btn-light rounded-pill">
                Light
              </button>
              <button type="button" class="btn btn-dark rounded-pill">
                Dark
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Button Outline Rounded</h4>
            <p class="text-muted font-14">
              Use a classes <code>.btn-outline-**</code> to quickly create a
              bordered buttons.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn btn-outline-primary rounded-pill"
              >
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary rounded-pill"
              >
                Secondary
              </button>
              <button
                type="button"
                class="btn btn-outline-success rounded-pill"
              >
                <i class="uil-cloud-computing"></i> Success
              </button>
              <button type="button" class="btn btn-outline-danger rounded-pill">
                Danger
              </button>
              <button
                type="button"
                class="btn btn-outline-warning rounded-pill"
              >
                Warning
              </button>
              <button type="button" class="btn btn-outline-info rounded-pill">
                <i class="uil-circuit"></i> Info
              </button>
              <button type="button" class="btn btn-outline-light rounded-pill">
                Light
              </button>
              <button type="button" class="btn btn-outline-dark rounded-pill">
                Dark
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Soft Buttons</h4>
            <p class="text-muted font-14">
              Use a classes <code>.btn-soft-**</code> to quickly create a soft
              background color buttons.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-soft-primary">
                Primary
              </button>
              <button type="button" class="btn btn-soft-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-soft-success">
                Success
              </button>
              <button type="button" class="btn btn-soft-danger">Danger</button>
              <button type="button" class="btn btn-soft-warning">
                Warning
              </button>
              <button type="button" class="btn btn-soft-info">Info</button>
              <button type="button" class="btn btn-soft-dark">Dark</button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Soft Rounded Buttons</h4>
            <p class="text-muted font-14">
              Use a classes <code>.btn-soft-**</code>
              <code>.rounded-pill</code> to quickly create a soft background
              color buttons with rounded.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-soft-primary rounded-pill">
                Primary
              </button>
              <button type="button" class="btn btn-soft-secondary rounded-pill">
                Secondary
              </button>
              <button type="button" class="btn btn-soft-success rounded-pill">
                Success
              </button>
              <button type="button" class="btn btn-soft-danger rounded-pill">
                Danger
              </button>
              <button type="button" class="btn btn-soft-warning rounded-pill">
                Warning
              </button>
              <button type="button" class="btn btn-soft-info rounded-pill">
                Info
              </button>
              <button type="button" class="btn btn-soft-dark rounded-pill">
                Dark
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Button-Sizes</h4>
            <p class="text-muted font-14">
              Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional
              sizes.
            </p>

            <div class="d-flex flex-wrap align-items-center gap-2">
              <button type="button" class="btn btn-primary btn-lg">
                Large
              </button>
              <button type="button" class="btn btn-info">Normal</button>
              <button type="button" class="btn btn-success btn-sm">
                Small
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Button-Disabled</h4>
            <p class="text-muted font-14">
              Add the <code>disabled</code> attribute to
              <code>&lt;button&gt;</code> buttons.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-info" disabled>Info</button>
              <button type="button" class="btn btn-success" disabled>
                Success
              </button>
              <button type="button" class="btn btn-danger" disabled>
                Danger
              </button>
              <button type="button" class="btn btn-dark" disabled>Dark</button>
            </div>

            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Icon Buttons</h4>
              <p class="text-muted font-14">Icon only button.</p>

              <div class="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-light">
                  <i class="mdi mdi-heart-outline"></i>
                </button>
                <button type="button" class="btn btn-danger">
                  <i class="mdi mdi-window-close"></i>
                </button>
                <button type="button" class="btn btn-dark">
                  <i class="mdi mdi-music"></i>
                </button>
                <button type="button" class="btn btn-primary">
                  <i class="mdi mdi-star"></i>
                </button>
                <button type="button" class="btn btn-success">
                  <i class="mdi mdi-thumb-up-outline"></i>
                </button>
                <button type="button" class="btn btn-info">
                  <i class="mdi mdi-keyboard"></i>
                </button>
                <button type="button" class="btn btn-warning">
                  <i class="mdi mdi-wrench"></i>
                </button>

                <button type="button" class="btn btn-light">
                  <i class="mdi mdi-heart me-1"></i> <span>Like</span>
                </button>
                <button type="button" class="btn btn-warning">
                  <i class="mdi mdi-rocket me-1"></i> <span>Launch</span>
                </button>
                <button type="button" class="btn btn-info">
                  <i class="mdi mdi-cloud me-1"></i> <span>Cloud Hosting</span>
                </button>

                <button type="button" class="btn btn-outline-success">
                  <i class="uil-money-withdrawal"></i> Money
                </button>
                <button type="button" class="btn btn-outline-primary">
                  <i class="uil-paypal"></i> PayPal
                </button>
                <button type="button" class="btn btn-outline-danger">
                  <i class="uil-cog"></i> Settings
                </button>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Block Button</h4>

              <p class="text-muted font-14">
                Create block level buttons by adding class
                <code>.d-grid</code> to parent div.
              </p>

              <div class="d-grid gap-2">
                <button type="button" class="btn btn-sm btn-primary">
                  Block Button
                </button>
                <button type="button" class="btn btn-lg btn-success">
                  Block Button
                </button>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Button Group</h4>

              <p class="text-muted font-14">
                Wrap a series of buttons with <code>.btn</code> in
                <code>.btn-group</code>.
              </p>

              <div class="btn-group mb-2">
                <button type="button" class="btn btn-light">Left</button>
                <button type="button" class="btn btn-light">Middle</button>
                <button type="button" class="btn btn-light">Right</button>
              </div>

              <br />

              <div class="btn-group mb-2">
                <button type="button" class="btn btn-light">1</button>
                <button type="button" class="btn btn-light">2</button>
                <button type="button" class="btn btn-light">3</button>
                <button type="button" class="btn btn-light">4</button>
              </div>

              <div class="btn-group mb-2">
                <button type="button" class="btn btn-light">5</button>
                <button type="button" class="btn btn-light">6</button>
                <button type="button" class="btn btn-light">7</button>
              </div>

              <div class="btn-group mb-2">
                <button type="button" class="btn btn-light">8</button>
              </div>

              <br />

              <div class="btn-group mb-2">
                <button type="button" class="btn btn-light">1</button>
                <button type="button" class="btn btn-primary">2</button>
                <button type="button" class="btn btn-light">3</button>
                <div ngbDropdown class="btn-group">
                  <button
                    ngbDropdownToggle
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown <span class="caret"></span>
                  </button>
                  <div ngbDropdownMenu class="dropdown-menu">
                    <a
                      ngbDropdownItem
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >Dropdown link</a
                    >
                    <a
                      ngbDropdownItem
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >Dropdown link</a
                    >
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3">
                  <div class="btn-group-vertical mb-2">
                    <button type="button" class="btn btn-light">Top</button>
                    <button type="button" class="btn btn-light">Middle</button>
                    <button type="button" class="btn btn-light">Bottom</button>
                  </div>
                </div>
                <div class="col-md-3">
                  <div ngbDropdown class="btn-group-vertical mb-2">
                    <button type="button" class="btn btn-light">
                      Button 1
                    </button>
                    <button type="button" class="btn btn-light">
                      Button 2
                    </button>
                    <button
                      ngbDropdownToggle
                      type="button"
                      class="btn btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Button 3 <span class="caret"></span>
                    </button>
                    <div ngbDropdownMenu class="dropdown-menu">
                      <a
                        ngbDropdownItem
                        class="dropdown-item"
                        href="javascript:void(0)"
                        >Dropdown link</a
                      >
                      <a
                        ngbDropdownItem
                        class="dropdown-item"
                        href="javascript:void(0)"
                        >Dropdown link</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Toggle Button</h4>

                  <p class="text-muted font-14">
                    Add <code>data-bs-toggle="button"</code> to toggle a
                    button’s <code>active</code> state. If you’re pre-toggling a
                    button, you must manually add the <code>.active</code> class
                    <strong>and</strong> <code>aria-pressed="true"</code> to
                    ensure that it is conveyed appropriately to assistive
                    technologies.
                  </p>

                  <button
                    type="button"
                    class="btn btn-primary me-1"
                    data-bs-toggle="button"
                  >
                    Toggle button
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary active me-1"
                    data-bs-toggle="button"
                    aria-pressed="true"
                  >
                    Active toggle button
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    disabled
                    data-bs-toggle="button"
                  >
                    Disabled toggle button
                  </button>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card-->
            </div>
            <!--end col-->
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Button tags</h4>

                  <p class="text-muted font-14">
                    The <code>.btn</code> classes are designed to be used with
                    the <code>&lt;button&gt;</code> element. However, you can
                    also use these classes on <code>&lt;a&gt;</code> or
                    <code>&lt;input&gt;</code> elements (though some browsers
                    may apply a slightly different rendering).
                  </p>

                  <a
                    class="btn btn-primary me-1"
                    href="javascript:void(0)"
                    role="button"
                    >Link</a
                  >
                  <button class="btn btn-primary me-1" type="submit">
                    Button
                  </button>
                  <input
                    class="btn btn-primary me-1"
                    type="button"
                    value="Input"
                  />
                  <input
                    class="btn btn-primary me-1"
                    type="submit"
                    value="Submit"
                  />
                  <input class="btn btn-primary" type="reset" value="Reset" />
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card-->
            </div>
          </div>
          <!--end row-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Basic Button</h4>

              <p class="text-muted font-14">
                Bootstrap has a base <code>.btn</code> class that sets up basic
                styles such as padding and content alignment. By default,
                <code>.btn</code> controls have a transparent border and
                background color, and lack any explicit focus and hover styles.
              </p>

              <button type="button" class="btn">Base class</button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Focus Ring Custom</h4>
              <p class="text-muted font-14">
                Click directly on the link below to see the focus ring in
                action, or into the example below and then press <kbd>Tab</kbd>.
              </p>

              <a
                href="javascript:void(0)"
                class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 me-1"
              >
                Custom focus ring
              </a>

              <a
                href="javascript:void(0)"
                class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 me-1"
                style="--ct-focus-ring-color: rgba(var(--ct-success-rgb), 0.25)"
              >
                Green focus ring
              </a>

              <a
                href="javascript:void(0)"
                class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                style="
              --ct-focus-ring-x: 10px;
              --ct-focus-ring-y: 10px;
              --ct-focus-ring-blur: 4px;
            "
              >
                Blurry offset focus ring
              </a>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!--end row-->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Focus Ring Utilities</h4>
              <p class="text-muted font-14">
                In addition to <code>.focus-ring</code>, we have several
                <code>.focus-ring-*</code> utilities to modify the helper class
                defaults. Modify the color with any of our
                <a routerLink="/ui-utilities">theme colors</a>. Note that the
                light and dark variants may not be visible on all background
                colors given current color mode support.
              </p>

              <div class="d-flex gap-2">
                <button
                  class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2"
                >
                  Primary focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2"
                >
                  Secondary focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2"
                >
                  Success focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
                >
                  Danger focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"
                >
                  Warning focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2"
                >
                  Info focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2"
                >
                  Light focus
                </button>
                <button
                  class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2"
                >
                  Dark focus
                </button>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card-->
          </div>
          <!-- end col -->
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ButtonsComponent {}
