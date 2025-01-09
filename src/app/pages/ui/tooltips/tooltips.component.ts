import { Component } from '@angular/core'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [PagetitleComponent, NgbTooltipModule],
  template: `
    <app-pagetitle
      title="Tooltips"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Examples</h4>
            <p class="text-muted font-14">
              Hover over the links below to see tooltips.
            </p>

            <p class="muted mb-0">
              Tight pants next level keffiyeh
              <a href="javascript:void(0)" ngbTooltip="Default tooltip"
                >you probably</a
              >
              haven't heard of them. Photo booth beard raw denim letterpress
              vegan messenger bag stumptown. Farm-to-table Photo booth beard
              seitan, mcsweeney's fixie sustainable quinoa 8-bit american
              apparel
              <a href="javascript:void(0)" ngbTooltip="Another tooltip"
                >have a</a
              >
              terry richardson vinyl chambray. Beard stumptown, cardigans banh
              mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
              mcsweeney's cleanse vegan chambray. A really ironic artisan
              <a href="javascript:void(0)" ngbTooltip="Another one here too"
                >whatever
              </a>
              keytar, scenester farm-to-table banksy Austin
              <a href="javascript:void(0)" ngbTooltip="The last tip!"
                >twitter handle</a
              >
              freegan cred raw denim single-origin coffee viral.
            </p>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Disabled elements</h4>
            <p class="text-muted font-14">
              Elements with the <code>disabled</code> attribute aren’t
              interactive, meaning users cannot focus, hover, or click them to
              trigger a tooltip (or popover). As a workaround, you’ll want to
              trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or
              <code>&lt;span&gt;</code>, ideally made keyboard-focusable using
              <code>tabindex="0"</code>, and override the
              <code>pointer-events</code> on the disabled element.
            </p>

            <div>
              <span
                class="d-inline-block"
                tabindex="0"
                ngbTooltip="Disabled tooltip"
              >
                <button class="btn btn-primary pe-none" type="button" disabled>
                  Disabled button
                </button>
              </span>
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
            <h4 class="header-title">Four Directions</h4>
            <p class="text-muted font-14">
              Hover over the buttons below to see the four tooltips directions:
              top, right, bottom, and left.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn btn-info"
                placement="top"
                ngbTooltip="Tooltip on top"
              >
                Tooltip on top
              </button>
              <button
                type="button"
                class="btn btn-info"
                placement="bottom"
                ngbTooltip="Tooltip on bottom"
              >
                Tooltip on bottom
              </button>
              <button
                type="button"
                class="btn btn-info"
                placement="left"
                ngbTooltip="Tooltip on left"
              >
                Tooltip on left
              </button>
              <button
                type="button"
                class="btn btn-info"
                placement="right"
                ngbTooltip="Tooltip on right"
              >
                Tooltip on right
              </button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">HTML Tags</h4>
            <p class="text-muted font-14">And with custom HTML added:</p>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              [ngbTooltip]="tipContent"
            >
              Tooltip with HTML
            </button>
            <ng-template #tipContent
              ><em>Tooltip </em> <u>with</u> <b> HTML</b></ng-template
            >
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Color Tooltips</h4>
            <p class="text-muted font-14">
              We set a custom class with ex.
              <code>data-bs-custom-class="primary-tooltip"</code> to scope our
              background-color primary appearance and use it to override a local
              CSS variable.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn btn-primary"
                placement="top"
                tooltipClass="primary-tooltip"
                ngbTooltip="This top tooltip is themed via CSS variables."
              >
                Primary tooltip
              </button>
              <button
                type="button"
                class="btn btn-danger"
                placement="top"
                tooltipClass="danger-tooltip"
                ngbTooltip="This top tooltip is themed via CSS variables."
              >
                Danger tooltip
              </button>
              <button
                type="button"
                class="btn btn-info"
                placement="top"
                tooltipClass="info-tooltip"
                ngbTooltip="This top tooltip is themed via CSS variables."
              >
                Info tooltip
              </button>
              <button
                type="button"
                class="btn btn-success"
                placement="top"
                tooltipClass="success-tooltip"
                ngbTooltip="This top tooltip is themed via CSS variables."
              >
                Success tooltip
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
  `,
  styles: ``,
})
export class TooltipsComponent {}
