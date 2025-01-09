import { Component } from '@angular/core'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [PagetitleComponent, NgbRatingModule],
  template: `
    <app-pagetitle
      pagetitle="Ratings"
      subtitle="Extended UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default Ratings</h4>
            <p class="text-muted font-14"></p>
            <div class="rateit-range"></div>
            <ngb-rating
              class="star"
              [(rate)]="rating"
              [readonly]="true"
              [max]="5"
            />
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Rater with Step</h4>
            <p class="text-muted font-14"></p>
            <ng-template #t let-fill="fill">
              <span class="star" [class.full]="fill === 100">
                <span class="half" [style.width.%]="fill">★</span>☆
              </span>
            </ng-template>
            <ngb-rating
              class="d-inline-flex stars align-middle star-rating"
              [(rate)]="currentRate"
              [starTemplate]="t"
              [readonly]="true"
              [max]="5"
            >
            </ngb-rating>
            <button
              class="btn btn-light btn-sm ms-2"
              (click)="currentRate = 1.5"
            >
              1.5
            </button>
            <button
              class="btn btn-light btn-sm ms-2"
              (click)="currentRate = 4.5"
            >
              4.5
            </button>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">
              Example with unlimited number of stars. readOnly option is set to
              true.
            </h4>
            <p class="text-muted font-14"></p>

            <ngb-rating
              [rate]="3"
              [readonly]="true"
              [max]="16"
              class="stars"
            ></ngb-rating>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Custom Color</h4>
            <p class="text-muted font-14"></p>

            <ngb-rating [(rate)]="customColor">
              <ng-template let-fill="fill" let-index="index">
                <span
                  class="stars star_fill"
                  [class.filled]="fill === 100"
                  [class.bad]="index < 3"
                  >&#9733;</span
                >
              </ng-template>
            </ngb-rating>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">On Hover Event</h4>
            <p class="text-muted font-14">
              Now we are in RTL mode. No changes needed to make this work
            </p>

            <ngb-rating
              [(rate)]="hoverSelect"
              (hover)="hovered = $event"
              (leave)="hovered = 0"
              [readonly]="false"
              class="stars"
              [max]="5"
            ></ngb-rating>
            <span class="ratingnum badge bg-info align-middle ms-2">{{
              hovered
            }}</span>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Clear/Reset Rater</h4>
            <p class="text-muted font-14"></p>

            <ngb-rating
              [(rate)]="clearRate"
              [readonly]="false"
              class="stars align-middle star-rating"
              [max]="5"
            ></ngb-rating>
            <button
              id="raterreset-button"
              class="btn btn-light btn-sm ms-2"
              (click)="clearRate = 0"
            >
              Reset
            </button>
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
export class RatingsComponent {
  rating = 8
  currentRate = 2
  customColor = 4
  hoverSelect = 2
  hovered = 0
  clearRate = 2

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`
  }
}
