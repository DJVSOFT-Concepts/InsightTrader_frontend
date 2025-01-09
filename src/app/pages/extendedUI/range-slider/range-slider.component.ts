import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NouisliderModule } from 'ng2-nouislider'

@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports: [PagetitleComponent, NouisliderModule, FormsModule],
  template: `
    <app-pagetitle
      title="Range Slider"
      subtitle="Extended UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default</h4>
            <p class="text-muted font-14">Start with default options</p>
            <nouislider 
              [connect]="true"
              [min]="0"
              [max]="100"
              [(ngModel)]="someRange"
            ></nouislider>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Range with config</h4>
            <p class="text-muted font-14">
              Increment with specific value only (step)
            </p>

            <nouislider
              [config]="someRange2config"
              [limit]="10"
              [(ngModel)]="someRange2"
            ></nouislider>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tooltips</h4>
            <p class="text-muted font-14">Showing Tooltips</p>

            <nouislider
              [min]="0"
              [max]="10"
              [step]="0.05"
              [(ngModel)]="someRange3"
              [tooltips]="[true]"
            ></nouislider>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Range</h4>
            <p class="text-muted font-14">Set up range with negative values</p>

            <nouislider
              [connect]="true"
              [min]="-1000"
              [max]="1000"
              [(ngModel)]="range"
            ></nouislider>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Keyboard support</h4>
            <p class="text-muted font-14">
              Select a handle and use arrow keys or page up / page down.
            </p>

            <nouislider
              [config]="someKeyboardConfig"
              [(ngModel)]="someKeyboard"
            ></nouislider>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Disable</h4>
            <p class="text-muted font-14">
              Lock slider by using disable option
            </p>

            <nouislider
              [min]="0"
              [max]="100"
              [step]="1"
              [(ngModel)]="someRange"
              [disabled]="true"
            ></nouislider>
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
export class RangeSliderComponent {
  someRange = 10
  range = [-500, 500]
  someRange2config = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    limit: 5, // NOTE: overwritten by [limit]="10"
    range: {
      min: 0,
      max: 20,
    },
    pips: {
      mode: 'steps',
      density: 5,
    },
  }
  someRange2 = [6.8, 15]

  someKeyboardConfig = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true, // same as [keyboard]="true"
    step: 0.1,
    pageSteps: 10, // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
  }

  someKeyboard = [1, 3]

  someRange3 = 8
}
