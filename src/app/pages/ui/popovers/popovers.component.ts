import { Component } from '@angular/core'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [PagetitleComponent, NgbPopoverModule],
  template: `
    <app-pagetitle
      title="Popovers"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Simple Popover</h4>
            <p class="text-muted font-14">
              Popover is a component which displays a box with a content after a
              click on an element - similar to the tooltip but can contain more
              content.
            </p>

            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="popover"
              placement="end"
              [autoClose]="'inside'"
              popoverTitle="Popover title"
              ngbPopover="And here's some amazing content. It's very engaging. Right?"
            >
              Click to toggle popover
            </button>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Dismiss on Next Click</h4>
            <p class="text-muted font-14">
              Use the <code>focus</code> trigger to dismiss popovers on the
              user’s next click of a different element than the toggle element.
            </p>

            <button
              type="button"
              tabindex="0"
              class="btn btn-success"
              placement="end"
              ngbPopover="And here's some amazing content. It's very engaging. Right?"
              popoverTitle="Dismissible popover"
            >
              Dismissible popover
            </button>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Hover</h4>
            <p class="text-muted font-14">
              Use the attribute <code>data-bs-trigger="hover"</code> to show the
              popover on hovering the element.
            </p>

            <button
              type="button"
              tabindex="0"
              class="btn btn-dark"
              triggers="mouseenter:mouseleave"
              placement="end"
              ngbPopover="And here's some amazing content. It's very engaging. Right?"
              popoverTitle="Ohh Wow !"
            >
              Please Hover Me
            </button>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Four Directions</h4>
            <p class="text-muted font-14">
              Four options are available: top, right, bottom, and left aligned.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn btn-primary"
                [autoClose]="'inside'"
                placement="top"
                ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on top
              </button>

              <button
                type="button"
                class="btn btn-primary"
                [autoClose]="'inside'"
                placement="bottom"
                ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on bottom
              </button>

              <button
                type="button"
                class="btn btn-primary"
                [autoClose]="'inside'"
                placement="right"
                ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on right
              </button>

              <button
                type="button"
                class="btn btn-primary"
                [autoClose]="'inside'"
                placement="left"
                ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                popoverTitle="Popover title"
              >
                Popover on left
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Custom Popovers</h4>
            <p class="text-muted font-14">
              You can customize the appearance of popovers using CSS variables.
              We set a custom class with
              <code>data-bs-custom-class="primary-popover"</code> to scope our
              custom appearance and use it to override some of the local CSS
              variables.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn btn-primary"
                placement="right"
                [autoClose]="'inside'"
                popoverClass="primary-popover"
                popoverTitle="Primary popover"
                ngbPopover="This popover is themed via CSS variables."
              >
                Primary popover
              </button>

              <button
                type="button"
                class="btn btn-success"
                placement="right"
                [autoClose]="'inside'"
                popoverClass="success-popover"
                popoverTitle="Success popover"
                ngbPopover="This popover is themed via CSS variables."
              >
                Success popover
              </button>

              <button
                type="button"
                class="btn btn-danger"
                placement="right"
                [autoClose]="'inside'"
                popoverClass="danger-popover"
                popoverTitle="Danger popover"
                ngbPopover="This popover is themed via CSS variables."
              >
                Danger popover
              </button>

              <button
                type="button"
                class="btn btn-info"
                placement="right"
                [autoClose]="'inside'"
                popoverClass="info-popover"
                popoverTitle="Info popover"
                ngbPopover="This popover is themed via CSS variables."
              >
                Info popover
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Disabled Elements</h4>
            <p class="text-muted font-14">
              Elements with the <code>disabled</code> attribute aren’t
              interactive, meaning users cannot hover or click them to trigger a
              popover (or tooltip). As a workaround, you’ll want to trigger the
              popover from a wrapper <code>&lt;div&gt;</code> or
              <code>&lt;span&gt;</code> and override the
              <code>pointer-events</code> on the disabled element.
            </p>

            <span
              class="d-inline-block"
              [autoClose]="'inside'"
              ngbPopover="Disabled popover"
              placement="end"
            >
              <button
                class="btn btn-primary"
                style="pointer-events: none"
                type="button"
                disabled
              >
                Disabled button
              </button>
            </span>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class PopoversComponent {}
