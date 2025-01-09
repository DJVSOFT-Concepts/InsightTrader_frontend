import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { ToastService } from './toast.service'
import { ToastsContainer } from './toasts-container.component'

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [PagetitleComponent, NgbToastModule, ToastsContainer],
  template: `
    <app-pagetitle
      title="Notifications"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Bootstrap Toasts</h4>
            <p class="text-muted font-14">
              Push notifications to your visitors with a toast, a lightweight
              and easily customizable alert message.
            </p>

            <div class="row">
              <div class="col-md-6">
                <h5 class="mb-2">Basic</h5>
                <p class="text-muted font-14">
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>
                <div class="p-3">
                  <ngb-toast
                    [autohide]="false"
                    class="toast fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <ng-template ngbToastHeader class="toast-header">
                      <img
                        src="assets/images/logo-dark-sm.png"
                        alt="brand-logo"
                        height="16"
                        class="me-1"
                      />
                      <strong class="me-auto">Hyper</strong>
                      <small>11 mins ago</small>
                    </ng-template>
                    Hello, world! This is a toast message.
                  </ngb-toast>
                  <!--end toast-->
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-6">
                <h5 class="mb-2">Translucent</h5>
                <p class="text-muted font-14">
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over. For browsers that support the
                  backdrop-filter CSS property, we’ll also attempt to blur the
                  elements under a toast.
                </p>

                <div class="p-3 bg-light">
                  <ngb-toast
                    [autohide]="false"
                    class="toast fade show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <ng-template ngbToastHeader class="toast-header">
                      <img
                        src="assets/images/logo-dark-sm.png"
                        alt="brand-logo"
                        height="16"
                        class="me-1"
                      />
                      <strong class="me-auto">Hyper</strong>
                      <small>11 mins ago</small>
                    </ng-template>
                    Hello, world! This is a toast message.
                  </ngb-toast>
                  <!--end toast-->
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->

            <div class="row">
              <div class="col-md-6 mt-4">
                <h5 class="mb-2">Stacking</h5>
                <p class="text-muted font-14">
                  When you have multiple toasts, we default to vertiaclly
                  stacking them in a readable manner.
                </p>
                <div class="p-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    style="position: relative; min-height: 200px"
                  >
                    <!-- Position it -->
                    <div
                      class="toast-container"
                      style="position: absolute; top: 0; right: 0"
                    >
                      <!-- Then put toasts within -->
                      <ngb-toast
                        [autohide]="false"
                        class="toast fade show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <ng-template ngbToastHeader class="toast-header">
                          <img
                            src="assets/images/logo-dark-sm.png"
                            alt="brand-logo"
                            height="16"
                            class="me-1"
                          />
                          <strong class="me-auto">Hyper</strong>
                          <small class="text-muted">just now</small>
                        </ng-template>
                        See? Just like this.
                      </ngb-toast>
                      <!--end toast-->

                      <ngb-toast
                        [autohide]="false"
                        class="toast fade show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <ng-template ngbToastHeader class="toast-header">
                          <img
                            src="assets/images/logo-dark-sm.png"
                            alt="brand-logo"
                            height="16"
                            class="me-1"
                          />
                          <strong class="me-auto">Hyper</strong>
                          <small class="text-muted">2 seconds ago</small>
                        </ng-template>
                        Heads up, toasts will stack automatically
                      </ngb-toast>
                      <!--end toast-->
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-6 mt-4">
                <h5 class="mb-2">Placement</h5>
                <p class="text-muted font-14">
                  Place toasts with custom CSS as you need them. The top right
                  is often used for notifications, as is the top middle. If
                  you’re only ever going to show one toast at a time, put the
                  positioning styles right on the <code>.toast</code>.
                </p>
                <div class="p-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    class="d-flex justify-content-center align-items-center"
                    style="min-height: 200px"
                  >
                    <!-- Then put toasts within -->
                    <ngb-toast
                      [autohide]="false"
                      class="toast fade show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                      data-bs-toggle="toast"
                    >
                      <ng-template ngbToastHeader class="toast-header">
                        <img
                          src="assets/images/logo-dark-sm.png"
                          alt="brand-logo"
                          height="16"
                          class="me-1"
                        />
                        <strong class="me-auto">Hyper</strong>
                        <small>11 mins ago</small>
                      </ng-template>
                      Hello, world! This is a toast message.
                    </ngb-toast>
                    <!--end toast-->
                  </div>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Custom content</h4>
            <p class="text-muted font-14">
              Alternatively, you can also add additional controls and components
              to toasts.
            </p>

            @if (show) {
              <ngb-toast
                [autohide]="false"
                class="toast show align-items-center mb-4"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="d-flex">
                  Hello, world! This is a toast message.

                  <button
                    type="button"
                    class="btn-close me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    (click)="close()"
                  ></button>
                </div>
              </ngb-toast>
            }
            @if (show1) {
              <ngb-toast
                [autohide]="false"
                class="toast show align-items-center text-white bg-primary border-0 mb-4"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="d-flex">
                  Hello, world! This is a toast message.
                  <button
                    type="button"
                    class="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    (click)="show1 = false"
                  ></button>
                </div>
              </ngb-toast>
            }
            <ngb-toast
              [autohide]="false"
              class="toast show mb-4"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <ng-template ngbToastHeader class="toast-header">
                Hello, world! This is a toast message.
              </ng-template>

              <button type="button" class="btn btn-primary btn-sm me-1">
                Take action
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                data-bs-dismiss="toast"
              >
                Close
              </button>
            </ngb-toast>

            @if (show2) {
              <ngb-toast
                class="toast bg-primary show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="text-white">
                  Hello, world! This is a toast message.
                  <div class="mt-2 pt-2 border-top">
                    <button type="button" class="btn btn-light btn-sm">
                      Take action
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm ms-1"
                      data-bs-dismiss="toast"
                      (click)="show2 = false"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </ngb-toast>
            }
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Toast</h4>
            <p class="text-muted font-14">
              Toasts based notifications can be used to to show important alerts
              or information to users.
            </p>

            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="text-center p-1 pb-3 p-sm-3">
                  <p>Info Example</p>
                  <button
                    type="button"
                    class="btn btn-info btn-sm"
                    id="toastr-one"
                    (click)="showStandard()"
                  >
                    Click me
                  </button>
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-3 col-sm-6">
                <div class="text-center p-1 pb-3 p-sm-3">
                  <p>Warning Example</p>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    id="toastr-two"
                    (click)="showSuccess()"
                  >
                    Click me
                  </button>
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-3 col-sm-6">
                <div class="text-center p-1 pb-3 p-sm-3">
                  <p>Success Example</p>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    id="toastr-three"
                    (click)="showWarning()"
                  >
                    Click me
                  </button>
                </div>
              </div>
              <!-- end col-->
              <div class="col-md-3 col-sm-6">
                <div class="text-center p-1 pb-3 p-sm-3">
                  <p>Danger Example</p>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    id="toastr-four"
                    (click)="showDanger()"
                  >
                    Click me
                  </button>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->
            <app-toasts aria-live="polite" aria-atomic="true"></app-toasts>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationsComponent {
  show = true
  show1 = true
  show2 = true

  toastService = inject(ToastService)

  close() {
    this.show = false
  }

  /**
   * Standard message
   */
  showStandard() {
    this.toastService.show({
      content: 'Welcome Back! This is a Toast Notification',
      classname: 'bg-primary text-center text-white',
      delay: 10000,
    })
  }

  /**
   * Success message
   */
  showSuccess() {
    this.toastService.show({
      content: 'Your application was successfully sent',
      classname: 'bg-success text-center text-white',
      delay: 10000,
    })
  }

  /**
   * Danger message
   */
  showDanger() {
    this.toastService.show({
      content: 'Error ! An error occurred.',
      classname: 'bg-danger text-center text-white',
      delay: 10000,
    })
  }

  /**
   * Warning message
   */
  showWarning() {
    this.toastService.show({
      content: 'Warning ! Something went wrong try again',
      classname: 'bg-warning text-center text-white',
      delay: 10000,
    })
  }
}
