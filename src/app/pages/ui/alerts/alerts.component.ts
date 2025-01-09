import { Component, ViewChild } from '@angular/core'
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { Subject, debounceTime } from 'rxjs'

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [PagetitleComponent, NgbAlertModule],
  template: `
    <app-pagetitle
      title="Alerts"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default Alert</h4>
            <p class="text-muted font-14 mb-3">
              Provide contextual feedback messages for typical user actions with
              the handful of available and flexible alert messages. Alerts are
              available for any length of text, as well as an optional dismiss
              button.
            </p>
            <p>
              For proper styling, use one of the eight
              <strong>required</strong> contextual attributes (e.g.,
              <code>type ="success"</code>). For background color use class
              <code>.bg-* </code>, <code>.text-white </code>
            </p>

            <ngb-alert
              [dismissible]="false"
              class="alert alert-primary"
              type="primary"
              role="alert"
            >
              <strong>Primary - </strong> A simple primary alert—check it out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-secondary"
              type="secondary"
              role="alert"
            >
              <strong>Secondary - </strong> A simple secondary alert—check it
              out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-success"
              type="success"
              role="alert"
            >
              <strong>Success - </strong> A simple success alert—check it out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-danger"
              type="danger"
              role="alert"
            >
              <strong>Error - </strong> A simple danger alert—check it out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-warning text-bg-warning border-0"
              type="warning"
              role="alert"
            >
              <strong>Warning - </strong> A simple warning alert—check it out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-info text-bg-info border-0"
              type="info"
              role="alert"
            >
              <strong>Info - </strong> A simple info alert—check it out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-light text-bg-light border-0"
              type="light"
              role="alert"
            >
              <strong>Light - </strong> A simple light alert—check it out!
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              class="alert alert-dark text-bg-dark border-0 mb-0"
              type="dark"
              role="alert"
            >
              <strong>Dark - </strong> A simple dark alert—check it out!
            </ngb-alert>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Dismissing Alerts</h4>
            <p class="text-muted font-14 mb-3">
              Add <code>[dismissible]="true"</code> attribute.
            </p>

            <ngb-alert
              type="primary"
              class="alert alert-primary alert-dismissible text-bg-primary border-0 fade show"
              role="alert"
            >
              <strong>Primary - </strong> A simple primary alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="secondary"
              class="alert alert-secondary alert-dismissible text-bg-secondary border-0 fade show"
              role="alert"
            >
              <strong>Secondary - </strong> A simple secondary alert—check it
              out!
            </ngb-alert>
            <ngb-alert
              type="success"
              class="alert alert-success alert-dismissible text-bg-success border-0 fade show"
              role="alert"
            >
              <strong>Success - </strong> A simple success alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="danger"
              class="alert alert-danger alert-dismissible text-bg-danger border-0 fade show"
              role="alert"
            >
              <strong>Error - </strong> A simple danger alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="warning"
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Warning - </strong> A simple warning alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="info"
              class="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <strong>Info - </strong> A simple info alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="light"
              class="alert alert-light alert-dismissible fade show"
              role="alert"
            >
              <strong>Light - </strong> A simple light alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="dark"
              class="alert alert-dark alert-dismissible fade show mb-0"
              role="alert"
            >
              <strong>Dark - </strong> A simple dark alert—check it out!
            </ngb-alert>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Custom Alerts</h4>
            <p class="text-muted font-14 mb-3">
              Display alert with transparent background and with contextual text
              color. add <code>type="custom"</code> attribute. Use classes
              <code>.bg-white</code>, and <code>.text-*</code>. E.g.
              <code>bg-white text-primary</code>.
            </p>

            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-primary bg-transparent text-primary"
              role="alert"
            >
              This is a <strong>primary</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-secondary bg-transparent text-secondary"
              role="alert"
            >
              This is a <strong>secondary</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-success bg-transparent text-success"
              role="alert"
            >
              This is a <strong>success</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-info bg-transparent text-info"
              role="alert"
            >
              This is a <strong>info</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-warning bg-transparent text-warning"
              role="alert"
            >
              This is a <strong>warning</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-danger bg-transparent text-danger"
              role="alert"
            >
              This is a <strong>danger</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-light bg-transparent text-light"
              role="alert"
            >
              This is a <strong>light</strong> alert—check it out!
            </ngb-alert>
            <ngb-alert
              type="custom"
              [dismissible]="false"
              class="alert alert-dark bg-transparent text-dark mb-0"
              role="alert"
            >
              This is a <strong>dark</strong> alert—check it out!
            </ngb-alert>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Link Color</h4>
            <p class="text-muted font-14 mb-3">
              Use the <code>.alert-link</code> utility class to quickly provide
              matching colored links within any alert.
            </p>

            <ngb-alert
              [dismissible]="false"
              type="primary"
              class="alert alert-primary"
              role="alert"
            >
              A simple primary alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="secondary"
              class="alert alert-secondary"
              role="alert"
            >
              A simple secondary alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="success"
              class="alert alert-success"
              role="alert"
            >
              A simple success alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="danger"
              class="alert alert-danger"
              role="alert"
            >
              A simple danger alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="warning"
              class="alert alert-warning"
              role="alert"
            >
              A simple warning alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="info"
              class="alert alert-info"
              role="alert"
            >
              A simple info alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="light"
              class="alert alert-light"
              role="alert"
            >
              A simple light alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
            <ngb-alert
              [dismissible]="false"
              type="dark"
              class="alert alert-dark"
              role="alert"
            >
              A simple dark alert with
              <a href="javascript:void(0)" class="alert-link">an example link</a
              >. Give it a click if you like.
            </ngb-alert>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Icons with Alerts</h4>
            <p class="text-muted font-14 mb-3">
              You can also include additional elements like icons, heading, etc
              along side the actual message.
            </p>

            <ngb-alert
              type="success"
              [dismissible]="false"
              class="alert alert-success"
              role="alert"
            >
              <i class="ri-check-line me-1 align-middle font-16"></i> This is a
              <strong>success</strong> alert - check it out!
            </ngb-alert>
            <ngb-alert
              type="danger"
              [dismissible]="false"
              class="alert alert-danger"
              role="alert"
            >
              <i class="ri-close-circle-line me-1 align-middle font-16"></i>
              This is a <strong>danger</strong>
              alert - check it out!
            </ngb-alert>
            <ngb-alert
              type="warning"
              [dismissible]="false"
              class="alert alert-warning"
              role="alert"
            >
              <i class="ri-alert-line me-1 align-middle font-16"></i> This is a
              <strong>warning</strong> alert - check it out!
            </ngb-alert>
            <ngb-alert
              type="info"
              [dismissible]="false"
              class="alert alert-info mb-0"
              role="alert"
            >
              <i class="ri-information-line me-1 align-middle font-16"></i> This
              is a <strong>info</strong> alert - check it out!
            </ngb-alert>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Additional content</h4>
            <p class="text-muted font-14 mb-3">
              Alerts can also contain additional HTML elements like headings,
              paragraphs and dividers.
            </p>

            <ngb-alert
              type="success"
              [dismissible]="false"
              class="alert alert-success mb-0"
              role="alert"
            >
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr class="border-success border-opacity-25" />
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </ngb-alert>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Live Alert</h4>
            <p class="text-muted font-14 mb-3">
              Click the button below to show an alert (hidden with inline styles
              to start), then dismiss (and destroy) it with the built-in close
              button.
            </p>

            <div id="liveAlertPlaceholder">
              @if (successMessage) {
                <ngb-alert
                  #selfClosingAlert
                  type="success"
                  (closed)="successMessage = ''"
                  >{{ successMessage }}</ngb-alert
                >
              }
            </div>
            <button
              type="button"
              class="btn btn-primary"
              id="liveAlertBtn"
              (click)="showAlert()"
            >
              Show live alert
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class AlertsComponent {
  private _success = new Subject<string>()
  staticAlertClosed = false
  successMessage = ''

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert

  constructor() {}

  ngOnInit(): void {
    // Alert Message Append
    this._success.subscribe((message) => (this.successMessage = message))
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close()
      }
    })
  }

  showAlert() {
    this._success.next(`Nice, you triggered this alert message!`)
  }
}
