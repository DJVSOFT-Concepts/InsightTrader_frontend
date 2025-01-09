import { Component } from '@angular/core'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [PagetitleComponent, NgbCarouselModule],
  template: `
    <app-pagetitle
      title="Carousel"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Slides only</h4>
            <p class="text-muted font-14">
              Here’s a carousel with slides only. Note the presence of the
              <code>.d-block</code> and <code>.img-fluid</code> on carousel
              images to prevent browser default image alignment.
            </p>

            <ngb-carousel
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              [showNavigationArrows]="false"
              [showNavigationIndicators]="false"
            >
              <!-- <div class="carousel-inner" role="listbox"> -->
              <ng-template ngbSlide class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-1.jpg"
                  alt="First slide"
                />
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-2.jpg"
                  alt="Second slide"
                />
              </ng-template>
              <ng-template ngbSlide>
                class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-3.jpg"
                  alt="Third slide"
                />
              </ng-template>
              <!-- </div> -->
            </ngb-carousel>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">With controls</h4>
            <p class="text-muted font-14">
              Adding in the previous and next controls:
            </p>

            <!-- START carousel-->
            <ngb-carousel
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
              [showNavigationIndicators]="false"
            >
              <ng-template ngbSlide class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-4.jpg"
                  alt="First slide"
                />
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-1.jpg"
                  alt="Second slide"
                />
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-2.jpg"
                  alt="Third slide"
                />
              </ng-template>
            </ngb-carousel>
          </div>
        </div>
        <!-- END carousel-->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">With indicators</h4>
            <p class="text-muted font-14">
              You can also add the indicators to the carousel, alongside the
              controls, too.
            </p>

            <ngb-carousel
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <ng-template ngbSlide class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-3.jpg"
                  alt="First slide"
                />
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-2.jpg"
                  alt="Second slide"
                />
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="assets/images/small/small-1.jpg"
                  alt="Third slide"
                />
              </ng-template>
            </ngb-carousel>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">With captions</h4>
            <p class="text-muted font-14">
              Add captions to your slides easily with the
              <code>.carousel-caption</code> element within any
              <code>.carousel-item</code>.
            </p>

            <ngb-carousel
              id="carouselExampleCaption"
              class="carousel slide"
              data-bs-ride="carousel"
              [showNavigationIndicators]="false"
            >
              <ng-template ngbSlide class="carousel-item active">
                <img
                  src="assets/images/small/small-1.jpg"
                  alt="..."
                  class="d-block img-fluid"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-white">First slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  src="assets/images/small/small-3.jpg"
                  alt="..."
                  class="d-block img-fluid"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-white">Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  src="assets/images/small/small-2.jpg"
                  alt="..."
                  class="d-block img-fluid"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-white">Third slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </ng-template>
            </ngb-carousel>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Individual interval</h4>
            <p class="text-muted font-14">
              Add <code>data-bs-interval=""</code> to a
              <code>.carousel-item</code> to change the amount of time to delay
              between automatically cycling to the next item.
            </p>

            <ngb-carousel
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
              [showNavigationIndicators]="false"
              [interval]="3000"
            >
              <ng-template
                ngbSlide
                class="carousel-item active"
                data-bs-interval="1000"
              >
                <img
                  src="assets/images/small/small-4.jpg"
                  class="img-fluid d-block w-100"
                  alt="First slide"
                />
              </ng-template>
              <ng-template
                ngbSlide
                class="carousel-item"
                data-bs-interval="2000"
              >
                <img
                  src="assets/images/small/small-2.jpg"
                  class="img-fluid d-block w-100"
                  alt="Second slide"
                />
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  src="assets/images/small/small-1.jpg"
                  class="img-fluid d-block w-100"
                  alt="Third slide"
                />
              </ng-template>
            </ngb-carousel>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Dark variant</h4>
            <p class="text-muted font-14">
              Add <code>.carousel-dark</code> to the <code>.carousel</code> for
              darker controls, indicators, and captions. Controls are inverted
              compared to their default white fill with the
              <code>filter</code> CSS property. Captions and controls have
              additional Sass variables that customize the
              <code>color</code> and <code>background-color</code>.
            </p>

            <ngb-carousel
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
            >
              <ng-template
                ngbSlide
                class="carousel-item active"
                data-bs-interval="10000"
              >
                <img
                  src="assets/images/small/small-5.jpg"
                  class="img-fluid"
                  alt="Images"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </ng-template>
              <ng-template
                ngbSlide
                class="carousel-item"
                data-bs-interval="2000"
              >
                <img
                  src="assets/images/small/small-6.jpg"
                  class="img-fluid"
                  alt="Images"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </ng-template>
              <ng-template ngbSlide class="carousel-item">
                <img
                  src="assets/images/small/small-7.jpg"
                  class="img-fluid"
                  alt="Images"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </ng-template>
            </ngb-carousel>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
})
export class CarouselComponent {}
