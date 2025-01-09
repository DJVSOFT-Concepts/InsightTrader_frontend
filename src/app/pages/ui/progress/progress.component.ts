import { Component } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [PagetitleComponent, NgbProgressbarModule],
  template: `
    <app-pagetitle
      title="Progress"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Examples</h4>
            <p class="text-muted font-14">
              A progress bar can be used to show a user how far along he/she is
              in a process.
            </p>

            <ngb-progressbar [value]="0" class="mb-2"></ngb-progressbar>

            <ngb-progressbar [value]="25" class="mb-2"></ngb-progressbar>

            <ngb-progressbar [value]="50" class="mb-2"></ngb-progressbar>

            <ngb-progressbar [value]="75" class="mb-2"></ngb-progressbar>

            <ngb-progressbar [value]="100" class="mb-2"></ngb-progressbar>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Height</h4>
            <p class="text-muted font-14">
              We only set a <code>height</code> value on the
              <code>.progress</code>, so if you change that value the inner
              <code>.progress-bar</code> will automatically resize accordingly.
              Use
              <code>.progress-sm</code
              >,<code>.progress-md</code>,<code>.progress-lg</code>,<code
                >.progress-xl</code
              >
              classes.
            </p>

            <ngb-progressbar
              type="danger"
              [value]="25"
              class="mb-2"
              height="1px"
            ></ngb-progressbar>

            <ngb-progressbar
              [value]="25"
              class="mb-2"
              height="3px"
            ></ngb-progressbar>

            <ngb-progressbar
              type="success"
              [value]="25"
              class="mb-2"
              height="5px"
            ></ngb-progressbar>

            <ngb-progressbar
              type="info"
              [value]="50"
              class="mb-2"
              height="8px"
            ></ngb-progressbar>

            <ngb-progressbar
              type="warning"
              [value]="75"
              class="mb-2"
              height="12px"
            ></ngb-progressbar>

            <ngb-progressbar
              type="success"
              [value]="38"
              class="mb-2"
            ></ngb-progressbar>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Multiple bars</h4>
            <p class="text-muted font-14">
              Include multiple progress bars in a progress component if you
              need.
            </p>

            <ngb-progressbar-stacked>
              <ngb-progressbar [value]="15"></ngb-progressbar>
              <ngb-progressbar type="success" [value]="30"></ngb-progressbar>
              <ngb-progressbar type="info" [value]="20"></ngb-progressbar>
            </ngb-progressbar-stacked>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Animated stripes</h4>
            <p class="text-muted font-14">
              The striped gradient can also be animated. Add
              <code>.progress-bar-animated</code> to
              <code>.progress-bar</code> to animate the stripes right to left
              via CSS3 animations.
            </p>

            <ngb-progressbar
              [value]="75"
              [striped]="true"
              [animated]="true"
            ></ngb-progressbar>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Labels</h4>
            <p class="text-muted font-14">
              Add labels to your progress bars by placing text within the
              <code>.progress-bar</code>.
            </p>

            <ngb-progressbar [value]="25">25%</ngb-progressbar>

            <ngb-progressbar [value]="10" textType="dark" class="mt-2">
              <div
                class="progress-bar overflow-visible text-dark"
                style="width: 10%"
              >
                Long label text for the progress bar, set to a dark color
              </div>
            </ngb-progressbar>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Backgrounds</h4>
            <p class="text-muted font-14">
              Use background utility classes to change the appearance of
              individual progress bars.
            </p>

            <ngb-progressbar
              type="success"
              class="mb-2"
              [value]="25"
            ></ngb-progressbar>

            <ngb-progressbar
              type="info"
              [value]="50"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="warning"
              [value]="75"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="danger"
              [value]="100"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="dark"
              [value]="65"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="secondary"
              [value]="50"
              class="mb-2"
            ></ngb-progressbar>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Striped</h4>
            <p class="text-muted font-14">
              Add <code>.progress-bar-striped</code> to any
              <code>.progress-bar</code> to apply a stripe via CSS gradient over
              the progress bar’s background color.
            </p>

            <ngb-progressbar
              [striped]="true"
              [value]="10"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="success"
              [striped]="true"
              [value]="25"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="info"
              [striped]="true"
              [value]="50"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="warning"
              [striped]="true"
              [value]="75"
              class="mb-2"
            ></ngb-progressbar>

            <ngb-progressbar
              type="danger"
              [striped]="true"
              [value]="100"
              class="mb-2"
            ></ngb-progressbar>
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
export class ProgressComponent {}
