import { CommonModule } from '@angular/common'
import { Component, TemplateRef, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, PagetitleComponent, FormsModule, RouterModule],
  template: `
    <app-pagetitle
      title="Modals"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Bootstrap Modals</h4>

            <p class="text-muted font-14">
              A rendered modal with header, body, and set of actions in the
              footer.
            </p>

            <!-- Standard modal content -->
            <ng-template
              #standardModal
              let-modal
              id="standard-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="standard-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="standard-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                ></button>
              </div>
              <div class="modal-body">
                <h6 class="mt-0">Text in a modal</h6>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
                <hr />
                <h6>Overflowing text to show scroll behavior</h6>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p class="mb-0">
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!--  Modal content for the Large example -->
            <ng-template
              #largeModal
              let-modal
              class="modal fade"
              id="bs-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                ></button>
              </div>
              <div class="modal-body">...</div>
            </ng-template>
            <!-- /.modal -->

            <ng-template
              #smallModal
              let-modal
              class="modal fade"
              id="bs-example-modal-sm"
              tabindex="-1"
              role="dialog"
              aria-labelledby="mySmallModalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                ></button>
              </div>
              <div class="modal-body">...</div>
            </ng-template>
            <!-- /.modal -->

            <!-- Full width modal content -->
            <ng-template
              #fullwidthModal
              let-modal
              id="full-width-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fullWidthModalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="fullWidthModalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                ></button>
              </div>
              <div class="modal-body">
                <h6 class="mt-0">Text in a modal</h6>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
                <hr />
                <h6>Overflowing text to show scroll behavior</h6>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p class="mb-0">
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Long Content Scroll Modal -->
            <ng-template
              #scrollableModal
              let-modal
              class="modal fade"
              id="scrollable-modal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="scrollableModalTitle"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="scrollableModalTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p class="mb-0">
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Standard  modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#standard-modal"
                (click)="openModal(standardModal, {})"
              >
                Standard Modal
              </button>
              <!-- Large modal -->
              <button
                type="button"
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#bs-example-modal-lg"
                (click)="openModal(largeModal, { size: 'lg' })"
              >
                Large Modal
              </button>
              <!-- Small modal -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#bs-example-modal-sm"
                (click)="openModal(smallModal, { size: 'sm' })"
              >
                Small Modal
              </button>
              <!-- Full width modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#full-width-modal"
                (click)="openModal(fullwidthModal, { size: 'xl' })"
              >
                Full Width Modal
              </button>
              <!-- Scrollable modal -->
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#scrollable-modal"
                (click)="openModal(scrollableModal, { scrollable: true })"
              >
                Scrollable Modal
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
            <h4 class="header-title">Modal with Pages</h4>
            <p class="text-muted font-14">Examples of custom modals.</p>

            <!-- Signup modal content -->
            <ng-template
              #signupModal
              let-modal
              id="signup-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-body">
                <div
                  class="auth-brand text-center mt-2 mb-4 position-relative top-0"
                >
                  <a routerLink="/" class="logo-dark">
                    <span
                      ><img
                        src="assets/images/logo-dark.png"
                        alt="dark logo"
                        height="22"
                    /></span>
                  </a>
                  <a routerLink="/" class="logo-light">
                    <span
                      ><img src="assets/images/logo.png" alt="logo" height="22"
                    /></span>
                  </a>
                </div>

                <form class="ps-3 pe-3" action="#">
                  <div class="mb-3">
                    <label for="username" class="form-label">Name</label>
                    <input
                      class="form-control"
                      type="email"
                      id="username"
                      required=""
                      placeholder="Michael Zenaty"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="emailaddress" class="form-label"
                      >Email address</label
                    >
                    <input
                      class="form-control"
                      type="email"
                      id="emailaddress"
                      required=""
                      placeholder="john@deo.com"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      required=""
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck1"
                      />
                      <label class="form-check-label" for="customCheck1"
                        >I accept
                        <a href="javascript:void(0)"
                          >Terms and Conditions</a
                        ></label
                      >
                    </div>
                  </div>

                  <div class="mb-3 text-center">
                    <button class="btn btn-primary" type="submit">
                      Sign Up Free
                    </button>
                  </div>
                </form>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- SignIn modal content -->
            <ng-template
              #loginModal
              let-modal
              id="login-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-body">
                <div
                  class="auth-brand text-center mt-2 mb-4 position-relative top-0"
                >
                  <a routerLink="/" class="logo-dark">
                    <span
                      ><img
                        src="assets/images/logo-dark.png"
                        alt="dark logo"
                        height="22"
                    /></span>
                  </a>
                  <a routerLink="/" class="logo-light">
                    <span
                      ><img src="assets/images/logo.png" alt="logo" height="22"
                    /></span>
                  </a>
                </div>

                <form action="#" class="ps-3 pe-3">
                  <div class="mb-3">
                    <label for="emailaddress1" class="form-label"
                      >Email address</label
                    >
                    <input
                      class="form-control"
                      type="email"
                      id="emailaddress1"
                      required=""
                      placeholder="john@deo.com"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="password1" class="form-label">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      required=""
                      id="password1"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck2"
                      />
                      <label class="form-check-label" for="customCheck2"
                        >Remember me</label
                      >
                    </div>
                  </div>

                  <div class="mb-3 text-center">
                    <button class="btn rounded-pill btn-primary" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Sign Up modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#signup-modal"
                (click)="openModal(signupModal, {})"
              >
                Sign Up Modal
              </button>
              <!-- Log In modal -->
              <button
                type="button"
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#login-modal"
                (click)="openModal(loginModal, {})"
              >
                Log In Modal
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
            <h4 class="header-title">Modal based Alerts</h4>
            <p class="text-muted font-14">
              Show different contexual alert messages using modal component
            </p>

            <!-- Success Alert Modal -->
            <ng-template
              #successModal
              let-modal
              id="success-alert-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-success">
                <div class="modal-body p-4">
                  <div class="text-center">
                    <i class="ri-check-line h1"></i>
                    <h4 class="mt-2">Well Done!</h4>
                    <p class="mt-3">
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <button
                      type="button"
                      class="btn btn-light my-2"
                      (click)="modal.close('Ok click')"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Info Alert Modal -->
            <ng-template
              #infoModal
              let-modal
              id="info-alert-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-body p-4">
                <div class="text-center">
                  <i class="ri-information-line h1 text-info"></i>
                  <h4 class="mt-2">Heads up!</h4>
                  <p class="mt-3">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam.
                  </p>
                  <button
                    type="button"
                    class="btn btn-info my-2"
                    (click)="modal.close('Ok click')"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Warning Alert Modal -->
            <ng-template
              #warningModal
              let-modal
              id="warning-alert-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-body p-4">
                <div class="text-center">
                  <i class="ri-alert-line h1 text-warning"></i>
                  <h4 class="mt-2">Incorrect Information</h4>
                  <p class="mt-3">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam.
                  </p>
                  <button
                    type="button"
                    class="btn btn-warning my-2"
                    (click)="modal.close('Ok click')"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Danger Alert Modal -->
            <ng-template
              #dangerModal
              let-modal
              id="danger-alert-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-danger">
                <div class="modal-body p-4">
                  <div class="text-center">
                    <i class="ri-close-circle-line h1"></i>
                    <h4 class="mt-2">Oh snap!</h4>
                    <p class="mt-3">
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <button
                      type="button"
                      class="btn btn-light my-2"
                      (click)="modal.close('Ok click')"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Success Alert modal -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#success-alert-modal"
                (click)="openModal(successModal, { size: 'sm' })"
              >
                Success Alert
              </button>
              <!-- Info Alert modal -->
              <button
                type="button"
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#info-alert-modal"
                (click)="openModal(infoModal, { size: 'sm' })"
              >
                Info Alert
              </button>
              <!-- Warning Alert modal -->
              <button
                type="button"
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#warning-alert-modal"
                (click)="openModal(warningModal, { size: 'sm' })"
              >
                Warning Alert
              </button>
              <!-- Danger Alert modal -->
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#danger-alert-modal"
                (click)="openModal(dangerModal, { size: 'sm' })"
              >
                Danger Alert
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
            <h4 class="header-title">Modal Position</h4>
            <p class="text-muted font-14">
              Specify the position for the modal. You can display modal at top,
              bottom, center or right of page by specifying classes
              <code>modal-top</code>, <code>modal-bottom</code>,
              <code>modal-dialog-centered</code> and
              <code>modal-right</code> respectively.
            </p>

            <!-- Top modal content -->
            <ng-template
              #topModal
              let-modal
              id="top-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="topModalLabel">Modal Heading</h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Text in a modal</h5>
                <p class="mb-0">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Center modal content -->
            <ng-template
              #centerModal
              let-modal
              class="modal fade"
              id="centermodal"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="myCenterModalLabel">
                  Center modal
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Overflowing text to show scroll behavior</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Top modal -->
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#top-modal"
                (click)="openModal(topModal, {})"
              >
                Top Modal
              </button>

              <!-- Center modal -->
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#centermodal"
                (click)="openModal(centerModal, { centered: true })"
              >
                Center modal
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
            <h4 class="header-title">Colored Header Modals</h4>
            <p class="text-muted font-14">
              A rendered modal with header having contexual background color.
            </p>

            <!-- Primary Header Modal -->
            <ng-template
              #primaryModal
              let-modal
              id="primary-header-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="primary-header-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header text-bg-primary border-0">
                <h4 class="modal-title" id="primary-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Primary Background</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Success Header Modal -->
            <ng-template
              #seccesshederModal
              let-modal
              id="success-header-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="success-header-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header text-bg-success border-0">
                <h4 class="modal-title" id="success-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Success Background</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Info Header Modal -->
            <ng-template
              #infohederModal
              let-modal
              id="info-header-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="info-header-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header text-bg-info border-0">
                <h4 class="modal-title" id="info-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Info Background</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-info">Save changes</button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Warning Header Modal -->
            <ng-template
              #warninghederModal
              let-modal
              id="warning-header-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="warning-header-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header text-bg-warning border-0">
                <h4 class="modal-title" id="warning-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Warning Background</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-warning">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Danger Header Modal -->
            <ng-template
              #dangerhederModal
              let-modal
              id="danger-header-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="danger-header-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header text-bg-danger border-0">
                <h4 class="modal-title" id="danger-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Danger Background</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-danger">
                  Save changes
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Dark Header Modal -->
            <ng-template
              #darkhederModal
              let-modal
              id="dark-header-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="dark-header-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-header text-bg-dark border-0">
                <h4 class="modal-title" id="dark-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Dark Background</h5>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p class="mb-0">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-dark">Save changes</button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Primary header modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#primary-header-modal"
                (click)="openModal(primaryModal, {})"
              >
                Primary Header
              </button>
              <!-- Success header modal -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#success-header-modal"
                (click)="openModal(seccesshederModal, {})"
              >
                Success Header
              </button>
              <!-- Info header modal -->
              <button
                type="button"
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#info-header-modal"
                (click)="openModal(infohederModal, {})"
              >
                Info Header
              </button>
              <!-- Warning header modal -->
              <button
                type="button"
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#warning-header-modal"
                (click)="openModal(warninghederModal, {})"
              >
                Warning Header
              </button>
              <!-- Danger header modal -->
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#danger-header-modal"
                (click)="openModal(dangerhederModal, {})"
              >
                Danger Header
              </button>
              <!-- Dark header modal -->
              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#dark-header-modal"
                (click)="openModal(darkhederModal, {})"
              >
                Dark Header
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
            <h4 class="header-title">Filled Modals</h4>
            <p class="text-muted font-14">
              A rendered modal with header, body and footer having contexual
              background color.
            </p>

            <!-- Primary Filled Modal -->
            <ng-template
              #fillprimaryModal
              let-modal
              id="fill-primary-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fill-primary-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-primary">
                <div class="modal-header">
                  <h4 class="modal-title" id="fill-primary-modalLabel">
                    Primary Filled Modal
                  </h4>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-light">
                    Save changes
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Success Filled Modal -->
            <ng-template
              #fillsuccessModal
              let-modal
              id="fill-success-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fill-success-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-success">
                <div class="modal-header">
                  <h4 class="modal-title" id="fill-success-modalLabel">
                    Success Filled Modal
                  </h4>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-light">
                    Save changes
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Info Filled Modal -->
            <ng-template
              #fillinfoModal
              let-modal
              id="fill-info-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fill-info-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-info">
                <div class="modal-header">
                  <h4 class="modal-title" id="fill-info-modalLabel">
                    Info Filled Modal
                  </h4>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-light">
                    Save changes
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Warning Filled Modal -->
            <ng-template
              #fillwarningModal
              let-modal
              id="fill-warning-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fill-warning-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-warning">
                <div class="modal-header">
                  <h4 class="modal-title" id="fill-warning-modalLabel">
                    Warning Filled Modal
                  </h4>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-light">
                    Save changes
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Danger Filled Modal -->
            <ng-template
              #filldangerModal
              let-modal
              id="fill-danger-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fill-danger-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-danger">
                <div class="modal-header">
                  <h4 class="modal-title" id="fill-danger-modalLabel">
                    Danger Filled Modal
                  </h4>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-info"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-light">
                    Save changes
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Dark Filled Modal -->
            <ng-template
              #filldarkModal
              let-modal
              id="fill-dark-modal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="fill-dark-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-content modal-filled bg-dark">
                <div class="modal-header">
                  <h4 class="modal-title" id="fill-dark-modalLabel">
                    Dark Filled Modal
                  </h4>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-light">
                    Save changes
                  </button>
                </div>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Primary header modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#fill-primary-modal"
                (click)="openModal(fillprimaryModal, {})"
              >
                Primary Filled
              </button>
              <!-- Success header modal -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#fill-success-modal"
                (click)="openModal(fillsuccessModal, {})"
              >
                Success Filled
              </button>
              <!-- Info header modal -->
              <button
                type="button"
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#fill-info-modal"
                (click)="openModal(fillinfoModal, {})"
              >
                Info Filled
              </button>
              <!-- Warning header modal -->
              <button
                type="button"
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#fill-warning-modal"
                (click)="openModal(fillwarningModal, {})"
              >
                Warning Filled
              </button>
              <!-- Danger header modal -->
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#fill-danger-modal"
                (click)="openModal(filldangerModal, {})"
              >
                Danger Filled
              </button>
              <!-- Dark header modal -->
              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#fill-dark-modal"
                (click)="openModal(filldarkModal, {})"
              >
                Dark Filled
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
            <h4 class="header-title">Multiple Modal</h4>
            <p class="text-muted font-14">
              Display a series of modals one by one to guide your users on
              multiple aspects or take step wise input.
            </p>

            <!-- Modal -->
            <ng-template
              #multipleoneModal
              let-modal
              id="multiple-one"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="multiple-oneModalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="multiple-oneModalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Text in a modal</h5>
                <p class="mb-0">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  (click)="modal.close()"
                  (click)="openModal(multipletwoModal, {})"
                >
                  Next
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Modal -->
            <ng-template
              #multipletwoModal
              let-modal
              id="multiple-two"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="multiple-twoModalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h4 class="modal-title" id="multiple-twoModalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h5 class="mt-0">Text in a modal</h5>
                <p class="mb-0">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <div class="d-flex flex-wrap gap-2">
              <!-- Multiple modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#multiple-one"
                (click)="openModal(multipleoneModal, {})"
              >
                Multiple Modal
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
            <h4 class="header-title">Toggle Between Modals</h4>
            <p class="text-muted font-14">
              Toggle between multiple modals with some clever placement of the
              <code>data-bs-target</code> and
              <code>data-bs-toggle</code> attributes.
            </p>

            <!-- Modal -->
            <ng-template
              #firstModal
              let-modal
              class="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                  Modal 1
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Show a second modal and hide this one with the button below.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  (click)="modal.close()"
                  (click)="openModal(secondModal, { centered: true })"
                >
                  Open second modal
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <!-- Modal -->
            <ng-template
              #secondModal
              let-modal
              class="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabindex="-1"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">
                  Modal 2
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Hide this modal and show the first with the button below.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  (click)="modal.close()"
                  (click)="openModal(firstModal, { centered: true })"
                >
                  Back to first
                </button>
              </div>
            </ng-template>
            <!-- /.modal -->

            <a
              class="btn btn-secondary"
              data-bs-toggle="modal"
              role="button"
              (click)="openModal(firstModal, { centered: true })"
              >Open first modal</a
            >
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
            <h4 class="header-title">Fullscreen Modal</h4>
            <p class="text-muted font-14">
              Another override is the option to pop up a modal that covers the
              user viewport, available via modifier classes that are placed on a
              <code>.modal-dialog</code>
            </p>

            <div class="hstack gap-2 flex-wrap">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#fullscreeexampleModal"
                (click)="openModal(fullscreenModal, { size: 'fullscreen' })"
              >
                Fullscreen Modal
              </button>
              <button
                type="button"
                class="btn btn-primary"
                (click)="openModal(smfullscreenModal, {})"
              >
                Full Screen Below sm
              </button>
              <button
                type="button"
                class="btn btn-primary"
                (click)="openModal(mdfullscreenModal, {})"
              >
                Full Screen Below md
              </button>
              <button
                type="button"
                class="btn btn-primary"
                (click)="openModal(lgfullscreenModal, {})"
              >
                Full Screen Below lg
              </button>
              <button
                type="button"
                class="btn btn-primary"
                (click)="openModal(xlfullscreenModal, {})"
              >
                Full Screen Below xl
              </button>
              <button
                type="button"
                class="btn btn-primary"
                (click)="openModal(xxlfullscreenModal, {})"
              >
                Full Screen Below xxl
              </button>
            </div>

            <ng-template
              #fullscreenModal
              let-modal
              class="modal fade"
              id="fullscreeexampleModal"
              tabindex="-1"
              aria-labelledby="fullscreeexampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="fullscreeexampleModalLabel">
                  Full Screen Modal
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                  >Close</a
                >
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </ng-template>

            <!-- Modal -->
            <ng-template
              #smfullscreenModal
              let-modal
              class="modal fade"
              id="exampleModalFullscreenSm"
              tabindex="-1"
              aria-labelledby="exampleModalFullscreenSmLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalFullscreenSmLabel">
                  Full screen below sm
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                  >Close</a
                >
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </ng-template>

            <!-- Modal -->
            <ng-template
              #mdfullscreenModal
              let-modal
              class="modal fade"
              id="exampleModalFullscreenMd"
              tabindex="-1"
              aria-labelledby="exampleModalFullscreenMdLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalFullscreenMdLabel">
                  Full screen below md
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                  >Close</a
                >
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </ng-template>

            <!-- Modal -->
            <ng-template
              #lgfullscreenModal
              let-modal
              class="modal fade"
              id="exampleModalFullscreenLg"
              tabindex="-1"
              aria-labelledby="exampleModalFullscreenLgLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalFullscreenLgLabel">
                  Full screen below lg
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                  >Close</a
                >
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </ng-template>

            <!-- Modal -->
            <ng-template
              #xlfullscreenModal
              let-modal
              class="modal fade"
              id="exampleModalFullscreenXl"
              tabindex="-1"
              aria-labelledby="exampleModalFullscreenXlLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalFullscreenXlLabel">
                  Full screen below xl
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                  >Close</a
                >
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </ng-template>

            <!-- Modal -->
            <ng-template
              #xxlfullscreenModal
              let-modal
              class="modal fade"
              id="exampleModalFullscreenXxl"
              tabindex="-1"
              aria-labelledby="exampleModalFullscreenXxlLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalFullscreenXxlLabel">
                  Full screen below xxl
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light"
                  (click)="modal.close('Ok click')"
                  >Close</a
                >
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </ng-template>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Static Backdrop</h4>
            <p class="text-muted font-14">
              When backdrop is set to static, the modal will not close when
              clicking outside it. Click the button below to try it.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <!-- Static Backdrop modal -->
              <button
                type="button"
                class="btn btn-info"
                (click)="openModal(backdropModal, { backdrop: 'static' })"
              >
                Static Backdrop
              </button>
            </div>
            <!-- btn list -->

            <!-- Modal -->
            <ng-template
              #backdropModal
              let-modal
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  (click)="modal.close('Ok click')"
                  aria-label="Close"
                ></button>
              </div>
              <!-- end modal header -->
              <div class="modal-body">
                <p class="m-0">
                  I will not close if you click outside me. Don't even try to
                  press escape key.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  (click)="modal.close('Ok click')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
              <!-- end modal footer -->
            </ng-template>
            <!-- end modal-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
      <!-- </div> -->
      <!-- end row -->

      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title">Varying Modal Content</h4>
              <p class="text-muted font-14">
                Have a bunch of buttons that all trigger the same modal with
                slightly different contents? Use
                <code>event.relatedTarget</code> and
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes"
                  target="_blank"
                  >HTML <code>data-bs-*</code> attributes</a
                >
                to vary the contents of the modal depending on which button was
                clicked.
              </p>

              <div class="hstack gap-2 flex-wrap">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-whatever="@mdo"
                  (click)="openvaryingModal(exampleModal, '@mdo')"
                >
                  Open modal for &#64;mdo
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-whatever="@fat"
                  (click)="openvaryingModal(exampleModal, '@fat')"
                >
                  Open modal for &#64;fat
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-whatever="@getbootstrap"
                  (click)="openvaryingModal(exampleModal, '@getbootstrap')"
                >
                  Open modal for &#64;getbootstrap
                </button>
              </div>

              <ng-template
                #exampleModal
                let-modal
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    New message
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    (click)="modal.close('Ok click')"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Recipient:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      [(ngModel)]="name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label"
                      >Message:</label
                    >
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    (click)="modal.close('Ok click')"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Send message
                  </button>
                </div>
              </ng-template>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  `,
  styles: ``,
})
export class ModalsComponent {
  name: string = ''

  private modalService = inject(NgbModal)

  openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
    this.modalService.open(content, options)
  }

  openvaryingModal(content: TemplateRef<HTMLElement>, name: string) {
    this.modalService.open(content)
    this.name = name
  }
}
