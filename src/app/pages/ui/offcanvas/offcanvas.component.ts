import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
} from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [PagetitleComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-pagetitle
      title="Offcanvas"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Offcanvas</h4>
            <p class="text-muted font-13">
              You can use a link with the <code>href</code> attribute, or a
              button with the <code>data-bs-target</code> attribute. In both
              cases, the <code>data-bs-toggle="offcanvas"</code> is required.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <a
                class="btn btn-primary"
                data-bs-toggle="offcanvas"
                (click)="openStart(content)"
                href="javascript:void(0);"
                role="button"
                aria-controls="offcanvasExample"
              >
                Link with href
              </a>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                (click)="openStart(content)"
                aria-controls="offcanvasExample"
              >
                Button with data-bs-target
              </button>
            </div>
            <!-- end d-flex flex-wrap gap-2-->

            <ng-template
              #content
              let-offcanvas
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  (click)="offcanvas.close('Close click')"
                ></button>
              </div>
              <!-- end offcanvas-header-->

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>

                <ul class="ps-3">
                  <li class="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li class="">Et harum quidem rerum facilis</li>
                  <li class="">Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
              <!-- end offcanvas-body-->
            </ng-template>
            <!-- end offcanvas-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Offcanvas Backdrop</h4>
            <p class="text-muted font-13">
              Scrolling the <code>&lt;body&gt;</code> element is disabled when
              an offcanvas and its backdrop are visible. Use the
              <code>data-bs-scroll</code> attribute to toggle
              <code>&lt;body&gt;</code> scrolling and
              <code>data-bs-backdrop</code> to toggle the backdrop.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button
                class="btn btn-primary mt-2 mt-md-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
                (click)="openNoBackdrop(backdrop)"
              >
                Enable body scrolling
              </button>
              <button
                class="btn btn-primary mt-2 mt-md-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
                (click)="openStart(enablebackdrop)"
              >
                Enable backdrop (default)
              </button>
              <button
                class="btn btn-primary mt-2 mt-md-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                (click)="openStart(backdropscroll)"
              >
                Enable both scrolling & backdrop
              </button>
            </div>
            <!-- end d-flex flex-wrap gap-2-->

            <ng-template
              #backdrop
              let-offcanvas
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                  Colored with scrolling
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  (click)="offcanvas.close('Close click')"
                  aria-label="Close"
                ></button>
              </div>
              <!-- end offcanvas-header-->
              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>

                <ul class="ps-3">
                  <li class="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li class="">Et harum quidem rerum facilis</li>
                  <li class="">Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
              <!-- end offcanvas-body-->
            </ng-template>
            <!-- end offcanvas-->

            <ng-template
              #enablebackdrop
              let-offcanvas
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasWithBackdrop"
              aria-labelledby="offcanvasWithBackdropLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
                  Offcanvas with backdrop
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  (click)="offcanvas.close('')"
                ></button>
              </div>
              <!-- end offcanvas-header-->

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>

                <ul class="ps-3">
                  <li class="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li class="">Et harum quidem rerum facilis</li>
                  <li class="">Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
              <!-- end offcanvas-body-->
            </ng-template>
            <!-- end offcanvas-->

            <ng-template
              #backdropscroll
              let-offcanvas
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                  Backdroped with scrolling
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  (click)="offcanvas.close('')"
                ></button>
              </div>
              <!-- end offcanvas-header-->

              <div class="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 class="mt-3">List</h5>
                <ul class="ps-3">
                  <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li class="">Neque porro quisquam est, qui dolorem</li>
                  <li class="">Quis autem vel eum iure qui in ea</li>
                </ul>

                <ul class="ps-3">
                  <li class="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li class="">Et harum quidem rerum facilis</li>
                  <li class="">Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
              <!-- end offcanvas-body-->
            </ng-template>
            <!-- end offcanvas-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Offcanvas Placement</h4>
            <p class="text-muted font-13">
              Try the right and bottom examples out below.
            </p>

            <ul class="text-muted font-13">
              <li>
                <code>.offcanvas-start</code> places offcanvas on the left of
                the viewport (shown above)
              </li>
              <li>
                <code>.offcanvas-end</code> places offcanvas on the right of the
                viewport
              </li>
              <li>
                <code>.offcanvas-top</code> places offcanvas on the top of the
                viewport
              </li>
              <li>
                <code>.offcanvas-bottom</code> places offcanvas on the bottom of
                the viewport
              </li>
            </ul>

            <div>
              <div class="d-flex flex-wrap gap-2">
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                  (click)="openTop(position)"
                >
                  Toggle Top offcanvas
                </button>
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  (click)="openEnd(position)"
                >
                  Toggle right offcanvas
                </button>
                <button
                  class="btn btn-primary mt-2 mt-md-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                  (click)="openBottom(position)"
                >
                  Toggle bottom offcanvas
                </button>
                <button
                  class="btn btn-primary mt-2 mt-lg-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasLeft"
                  aria-controls="offcanvasLeft"
                  (click)="openStart(position)"
                >
                  Toggle Left offcanvas
                </button>
              </div>
              <!-- end d-flex flex-wrap gap-2-->

              <ng-template
                #position
                let-offcanvas
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    (click)="offcanvas.close('Close click')"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- end offcanvas-header-->

                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 class="mt-3">List</h5>
                  <ul class="ps-3">
                    <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li class="">Neque porro quisquam est, qui dolorem</li>
                    <li class="">Quis autem vel eum iure qui in ea</li>
                  </ul>
                </div>
                <!-- end offcanvas-body-->
              </ng-template>
              <!-- end offcanvas-->
            </div>
            <!-- end tab-pan-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Dark Offcanvas</h4>
            <p class="text-muted font-13">
              Change the appearance of offcanvases with utilities to better
              match them to different contexts like dark navbars. Here we add
              <code>.text-bg-dark</code> to the <code>.offcanvas</code> and
              <code>.btn-close-white</code> to <code>.btn-close</code> for
              proper styling with a dark offcanvas. If you have dropdowns
              within, consider also adding <code>.dropdown-menu-dark</code> to
              <code>.dropdown-menu</code>.
            </p>

            <div>
              <button
                class="btn btn-primary mt-2 mt-md-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDark"
                aria-controls="offcanvasDark"
                (click)="openDark(darkcontent)"
              >
                Dark offcanvas
              </button>

              <ng-template
                #darkcontent
                let-offcanvas
                class="offcanvas offcanvas-start text-bg-dark"
                tabindex="-1"
                id="offcanvasDark"
                aria-labelledby="offcanvasDarkLabel"
              >
                <div class="offcanvas-header">
                  <h5 id="offcanvasDarkLabel">Dark Offcanvas</h5>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    (click)="offcanvas.close('')"
                  ></button>
                </div>
                <!-- end offcanvas-header-->

                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 class="mt-3">List</h5>
                  <ul class="ps-3">
                    <li class="">Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li class="">Neque porro quisquam est, qui dolorem</li>
                    <li class="">Quis autem vel eum iure qui in ea</li>
                  </ul>
                </div>
                <!-- end offcanvas-body-->
              </ng-template>
              <!-- end offcanvas-->
            </div>
            <!-- end tab-pan-->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
  `,
  styles: ``,
})
export class OffcanvasComponent {
  private offcanvasService = inject(NgbOffcanvas)
  openStart(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.dismiss()
    this.offcanvasService.open(content, {
      position: 'start',
    })
  }

  openEnd(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { position: 'end' })
  }

  openTop(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { position: 'top' })
  }

  openBottom(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { position: 'bottom' })
  }

  openNoBackdrop(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, { backdrop: false })
  }

  openDark(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content, {
      position: 'start',
      panelClass: 'bg-dark text-white',
    })
  }
}
