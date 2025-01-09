import { Component } from '@angular/core'
import {
  NgbAccordionModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [PagetitleComponent, NgbAccordionModule, NgbCollapseModule],
  template: `
    <app-pagetitle
      title="Accordions & Collapse"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default Accordions</h4>
            <p class="text-muted font-14 mb-3">
              Click the accordions below to expand/collapse the accordion
              content.
            </p>

            <div
              ngbAccordion
              [closeOthers]="true"
              class="accordion"
              id="accordionExample"
            >
              <div ngbAccordionItem [collapsed]="false" class="accordion-item">
                <h2 ngbAccordionHeader class="accordion-header" id="headingOne">
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    aria-expanded="true"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div ngbAccordionBody class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="accordion-item">
                <h2 ngbAccordionHeader class="accordion-header" id="headingTwo">
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    aria-expanded="true"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="collapseTwo"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div ngbAccordionBody class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="headingThree"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    aria-expanded="false"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="collapseThree"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                >
                  <div ngbAccordionBody class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Flush Accordions</h4>
            <p class="text-muted font-14 mb-3">
              Add <code>.accordion-flush</code> to remove the default
              <code>background-color</code>, some borders, and some rounded
              corners to render accordions edge-to-edge with their parent
              container.
            </p>

            <div
              ngbAccordion
              [closeOthers]="true"
              class="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="flush-headingOne"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="flush-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                >
                  <div ngbAccordionBody class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="flush-headingTwo"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    aria-expanded="false"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse show"
                >
                  <div ngbAccordionBody class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="flush-headingThree"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    aria-expanded="false"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="flush-collapseThree"
                  class="accordion-collapse collapse show"
                >
                  <div ngbAccordionBody class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
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
            <h4 class="header-title">Simple Card Accordions</h4>
            <p class="text-muted font-14 mb-3">
              Using the card component, you can extend the default collapse
              behavior to create an accordion. To properly achieve the accordion
              style, be sure to use <code>.accordion</code> as a wrapper.
            </p>

            <div ngbAccordion class="accordion" id="CardaccordionExample">
              <div ngbAccordionItem class="card mb-0">
                <div ngbAccordionHeader class="card-header" id="CardheadingOne">
                  <h5 class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title d-block pt-2 pb-2 px-0 bg-transparent font-16 fw-bold"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                    >
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>

                <div
                  ngbAccordionCollapse
                  id="CardcollapseOne"
                  class="collapse show"
                  aria-labelledby="CardheadingOne"
                  data-bs-parent="#CardaccordionExample"
                >
                  <div ngbAccordionBody class="card-body pt-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="card mb-0">
                <div ngbAccordionHeader class="card-header" id="CardheadingTwo">
                  <h5 class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title d-block pt-2 pb-2 px-0 bg-transparent font-16 fw-bold"
                      aria-expanded="false"
                      aria-controls="CardcollapseTwo"
                    >
                      Collapsible Group Item #2
                    </button>
                  </h5>
                </div>
                <div
                  ngbAccordionCollapse
                  id="CardcollapseTwo"
                  class="collapse"
                  aria-labelledby="CardheadingTwo"
                  data-bs-parent="#CardaccordionExample"
                >
                  <div ngbAccordionBody class="card-body pt-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="card mb-0">
                <div
                  ngbAccordionHeader
                  class="card-header"
                  id="CardheadingThree"
                >
                  <h5 ngbAccordionButton class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title d-block pt-2 pb-2 px-0 bg-transparent font-16 fw-bold"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="CardcollapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h5>
                </div>
                <div
                  ngbAccordionCollapse
                  id="CardcollapseThree"
                  class="collapse"
                  aria-labelledby="CardheadingThree"
                  data-bs-parent="#CardaccordionExample"
                >
                  <div ngbAccordionBody class="card-body pt-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Always Open Accordions</h4>
            <p class="text-muted font-14 mb-3">
              Omit the <code>data-bs-parent</code> attribute on each
              <code>.accordion-collapse</code> to make accordion items stay open
              when another item is opened.
            </p>

            <div
              ngbAccordion
              class="accordion"
              id="accordionPanelsStayOpenExample"
            >
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="panelsStayOpen-headingOne"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div ngbAccordionBody class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="panelsStayOpen-headingTwo"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    aria-expanded="false"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div ngbAccordionBody class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="accordion-item">
                <h2
                  ngbAccordionHeader
                  class="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    ngbAccordionButton
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  ngbAccordionCollapse
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div ngbAccordionBody class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
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
            <h4 class="header-title">Custom Accordions</h4>
            <p class="text-muted font-14 mb-3">
              You can have custom look and feel for accorion as well. Just use
              class
              <code>.custom-accordion</code> along with
              <code>.accordion</code> as a wrapper.
            </p>

            <div
              ngbAccordion
              class="accordion custom-accordion"
              id="custom-accordion-one"
            >
              <div ngbAccordionItem class="card mb-0">
                <div ngbAccordionHeader class="card-header" id="headingFour">
                  <h5 class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title p-0 d-block bg-transparent"
                      aria-expanded="true"
                    >
                      Q. Can I use this template for my client?
                      <i class="mdi mdi-chevron-down accordion-arrow"></i>
                    </button>
                  </h5>
                </div>

                <div
                  ngbAccordionCollapse
                  id="collapseFour"
                  class="collapse show"
                  aria-labelledby="headingFour"
                >
                  <div ngbAccordionBody class="card-body">
                    Yup, the marketplace license allows you to use this theme in
                    any end products. For more information on licenses, please
                    refere
                    <a href="https://themes.getbootstrap.com/licenses/">here</a
                    >.
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="card mb-0">
                <div ngbAccordionHeader class="card-header" id="headingFive">
                  <h5 class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title p-0 collapsed d-block bg-transparent"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      Q. Can this theme work with WordPress?
                      <i class="mdi mdi-chevron-down accordion-arrow"></i>
                    </button>
                  </h5>
                </div>
                <div ngbAccordionCollapse id="collapseFive" class="collapse">
                  <div ngbAccordionBody class="card-body">
                    No. This is a HTML template. It won't directly with
                    WordPress, though you can convert this into WordPress
                    compatible theme
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="card mb-0">
                <div ngbAccordionHeader class="card-header" id="headingSix">
                  <h5 class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title p-0 collapsed d-block bg-transparent"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Q. How do I get help with the theme?
                      <i class="mdi mdi-chevron-down accordion-arrow"></i>
                    </button>
                  </h5>
                </div>
                <div
                  ngbAccordionCollapse
                  id="collapseSix"
                  class="collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#custom-accordion-one"
                >
                  <div ngbAccordionBody class="card-body">
                    Use our dedicated support email
                    (support&#64;coderthemes.com) to send your issues or
                    feedback. We are here to help anytime
                  </div>
                </div>
              </div>
              <div ngbAccordionItem class="card mb-0">
                <div ngbAccordionHeader class="card-header" id="headingSeven">
                  <h5 class="m-0">
                    <button
                      ngbAccordionButton
                      class="custom-accordion-title p-0 collapsed d-block bg-transparent"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Q. Will you regularly give updates of Hyper ?
                      <i class="mdi mdi-chevron-down accordion-arrow"></i>
                    </button>
                  </h5>
                </div>
                <div
                  ngbAccordionCollapse
                  id="collapseSeven"
                  class="collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#custom-accordion-one"
                >
                  <div ngbAccordionBody class="card-body">
                    Yes, We will update the Hyper regularly. All the future
                    updates would be available without any cost
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Collapse</h4>
            <p class="text-muted font-14 mb-3">
              Bootstrap's collapse provides the way to toggle the visibility of
              any content or element. Please read the official
              <a
                href="https://getbootstrap.com/docs/5.2/components/collapse/"
                target="_blank"
                >Bootstrap</a
              >
              documentation for a full list of options.
            </p>

            <p>
              <a
                class="btn btn-primary"
                aria-expanded="false"
                (click)="collapse.toggle()"
              >
                Link with href
              </a>
              <button
                class="btn btn-primary ms-1"
                type="button"
                aria-expanded="false"
                (click)="collapse.toggle()"
              >
                Button with data-bs-target
              </button>
            </p>
            <div
              #collapse="ngbCollapse"
              [(ngbCollapse)]="isCollapsed"
              class="collapse show"
              id="collapseExample"
            >
              <div class="card card-body mb-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </div>
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
            <h4 class="header-title">Collapse Horizontal</h4>
            <p class="text-muted font-14 mb-3">
              The collapse plugin also supports horizontal collapsing. Add the
              <code>.collapse-horizontal</code> modifier class to transition the
              <code>width</code> instead of <code>height</code> and set a
              <code>width</code> on the immediate child element.
            </p>

            <p>
              <button
                class="btn btn-primary"
                type="button"
                (click)="collapse1.toggle()"
                aria-expanded="false"
              >
                Toggle width collapse
              </button>
            </p>
            <div
              #collapse1="ngbCollapse"
              [(ngbCollapse)]="isCollapsed1"
              [horizontal]="true"
              style="min-height: 120px"
            >
              <div
                class="collapse collapse-horizontal show"
                id="collapseWidthExample"
              >
                <div class="card card-body mb-0" style="width: 300px">
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Multiple Targets</h4>
            <p class="text-muted font-14 mb-3">
              Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
              show and hide an element if they each reference it with their
              <code>href</code> or <code>data-bs-target</code> attribute
            </p>

            <p>
              <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                (click)="firstcollapse.toggle()"
                >Toggle first element</a
              >
              <button
                class="btn btn-primary ms-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
                (click)="secondcollapse.toggle()"
              >
                Toggle second element
              </button>
              <button
                class="btn btn-primary ms-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2"
                (click)="bothcollapse.toggle()"
              >
                Toggle both elements
              </button>
            </p>
            <div
              class="row"
              #bothcollapse="ngbCollapse"
              [(ngbCollapse)]="bothColleaps"
            >
              <div class="col">
                <div
                  class="collapse multi-collapse"
                  id="multiCollapseExample1"
                  #firstcollapse="ngbCollapse"
                  [(ngbCollapse)]="firstColleaps"
                >
                  <div class="card card-body mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="collapse multi-collapse"
                  id="multiCollapseExample2"
                  #secondcollapse="ngbCollapse"
                  [(ngbCollapse)]="secondColleaps"
                >
                  <div class="card card-body mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <!-- end col -->
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
  `,
  styles: ``,
})
export class AccordionsComponent {
  isCollapsed = false
  isCollapsed1 = false
  public firstColleaps = false
  public secondColleaps = false
  public bothColleaps = false
}
