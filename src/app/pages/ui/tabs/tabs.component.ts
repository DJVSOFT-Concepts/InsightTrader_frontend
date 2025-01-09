import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [PagetitleComponent, NgbNavModule],
  template: `
    <app-pagetitle
      title="Tabs"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default Tabs</h4>
            <p class="text-muted font-14 mb-3">
              Simple widget of tabbable panes of local content.
            </p>

            <ul ngbNav #nav="ngbNav" [activeId]="2" class="nav nav-tabs mb-3">
              <li [ngbNavItem]="1" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-home-variant d-md-none d-block"></i>
                  <span class="d-none d-md-block">Home</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="home">
                    <p>
                      Food truck quinoa dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="2" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="true"
                  class="nav-link"
                >
                  <i class="mdi mdi-account-circle d-md-none d-block"></i>
                  <span class="d-none d-md-block">Profile</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="profile">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <p class="mb-0">
                      Food truck quinoa dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="3" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                  <span class="d-none d-md-block">Settings</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="settings">
                    <p>
                      Food truck quinoa dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
            </ul>

            <div [ngbNavOutlet]="nav" class="tab-content"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tabs Justified</h4>
            <p class="text-muted font-14 mb-3">
              Using class <code>.nav-justified</code>, you can force your
              <code>tab menu items</code> to use the full available width.
            </p>

            <ul
              ngbNav
              #Justify="ngbNav"
              [activeId]="2"
              class="nav nav-pills bg-nav-pills nav-justified mb-3"
            >
              <li [ngbNavItem]="1" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link rounded-0"
                >
                  <i class="mdi mdi-home-variant d-md-none d-block"></i>
                  <span class="d-none d-md-block">Home</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="home1">
                    <p>
                      Leggings occaecat dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="2" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="true"
                  class="nav-link rounded-0"
                >
                  <i class="mdi mdi-account-circle d-md-none d-block"></i>
                  <span class="d-none d-md-block">Profile</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="profile1">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <p class="mb-0">
                      Leggings occaecat dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="3" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link rounded-0"
                >
                  <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                  <span class="d-none d-md-block">Settings</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="settings1">
                    <p>
                      Food truck quinoa dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
            </ul>

            <div [ngbNavOutlet]="Justify" class="tab-content"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tabs Vertical Left</h4>
            <p class="text-muted font-14 mb-3">
              You can stack your navigation by changing the flex item direction
              with the <code>.flex-column</code> utility.
            </p>

            <div class="row">
              <div class="col-sm-3 mb-2 mb-sm-0">
                <div
                  ngbNav
                  #verticalnav="ngbNav"
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <ng-container ngbNavItem>
                    <a
                      ngbNavLink
                      class="nav-link"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i class="mdi mdi-home-variant d-md-none d-block"></i>
                      <span class="d-none d-md-block">Home</span>
                    </a>

                    <ng-template ngbNavContent>
                      <div
                        class="tab-pane"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <p class="mb-0">
                          Cillum ad ut irure tempor velit nostrud occaecat
                          ullamco aliqua anim Leggings sint. Veniam sint duis
                          incididunt do esse magna mollit excepteur laborum qui.
                          Id id reprehenderit sit est eu aliqua occaecat quis et
                          velit excepteur laborum mollit dolore eiusmod. Ipsum
                          dolor in occaecat commodo et voluptate minim
                          reprehenderit mollit pariatur. Deserunt non laborum
                          enim et cillum eu deserunt excepteur ea incididunt
                          minim occaecat.
                        </p>
                      </div>
                    </ng-template>
                  </ng-container>
                  <ng-container ngbNavItem>
                    <a
                      ngbNavLink
                      class="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i class="mdi mdi-account-circle d-md-none d-block"></i>
                      <span class="d-none d-md-block">Profile</span>
                    </a>

                    <ng-template ngbNavContent>
                      <div
                        class="tab-pane"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <p class="mb-0">
                          Culpa dolor voluptate do laboris laboris irure
                          reprehenderit id incididunt duis pariatur mollit aute
                          magna pariatur consectetur. Eu veniam duis non ut
                          dolor deserunt commodo et minim in quis laboris ipsum
                          velit id veniam. Quis ut consectetur adipisicing
                          officia excepteur non sit. Ut et elit aliquip labore
                          Leggings enim eu. Ullamco mollit occaecat dolore ipsum
                          id officia mollit qui esse anim eiusmod do sint minim
                          consectetur qui.
                        </p>
                      </div>
                    </ng-template>
                  </ng-container>
                  <ng-container ngbNavItem>
                    <a
                      ngbNavLink
                      class="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                      <span class="d-none d-md-block">Settings</span>
                    </a>

                    <ng-template ngbNavContent>
                      <div
                        class="tab-pane"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        <p class="mb-0">
                          Food truck quinoa dolor sit amet, consectetuer
                          adipiscing elit. Aenean commodo ligula eget dolor.
                          Aenean massa. Cum sociis natoque penatibus et magnis
                          dis parturient montes, nascetur ridiculus mus. Donec
                          quam felis, ultricies nec, pellentesque eu, pretium
                          quis, sem. Nulla consequat massa quis enim. Cillum ad
                          ut irure tempor velit nostrud occaecat ullamco aliqua
                          anim Leggings sint. Veniam sint duis incididunt do
                          esse magna mollit excepteur laborum qui.
                        </p>
                      </div>
                    </ng-template>
                  </ng-container>
                </div>
              </div>
              <!-- end col-->

              <div class="col-sm-9">
                <div
                  class="tab-content"
                  [ngbNavOutlet]="verticalnav"
                  id="v-pills-tabContent"
                ></div>
                <!-- end tab-content-->
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tabs Vertical Right</h4>
            <p class="text-muted font-14 mb-3">
              You can stack your navigation by changing the flex item direction
              with the <code>.flex-column</code> utility.
            </p>

            <div class="row">
              <div class="col-sm-9">
                <div
                  class="tab-content"
                  [ngbNavOutlet]="rightnav"
                  id="v-pills-tabContent-right"
                ></div>
                <!-- end tabcontent-->
              </div>
              <!-- end col-->

              <div class="col-sm-3 mt-2 mt-sm-0">
                <div
                  ngbNav
                  #rightnav="ngbNav"
                  class="nav flex-column nav-pills"
                  id="v-pills-tab2"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <ng-container ngbNavItem>
                    <a
                      ngbNavLink
                      class="nav-link"
                      id="v-pills-home-tab2"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-home2"
                      aria-selected="true"
                    >
                      <i class="mdi mdi-home-variant d-md-none d-block"></i>
                      <span class="d-none d-md-block">Home</span>
                    </a>
                    <ng-template ngbNavContent>
                      <div
                        class="tab-pane"
                        id="v-pills-home2"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab2"
                      >
                        <p class="mb-0">
                          Cillum ad ut irure tempor velit nostrud occaecat
                          ullamco aliqua anim Leggings sint. Veniam sint duis
                          incididunt do esse magna mollit excepteur laborum qui.
                          Id id reprehenderit sit est eu aliqua occaecat quis et
                          velit excepteur laborum mollit dolore eiusmod. Ipsum
                          dolor in occaecat commodo et voluptate minim
                          reprehenderit mollit pariatur. Deserunt non laborum
                          enim et cillum eu deserunt excepteur ea incididunt
                          minim occaecat.
                        </p>
                      </div>
                    </ng-template>
                  </ng-container>
                  <ng-container ngbNavItem>
                    <a
                      ngbNavLink
                      class="nav-link"
                      id="v-pills-profile-tab2"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-profile2"
                      aria-selected="false"
                    >
                      <i class="mdi mdi-account-circle d-md-none d-block"></i>
                      <span class="d-none d-md-block">Profile</span>
                    </a>
                    <ng-template ngbNavContent>
                      <div
                        class="tab-pane"
                        id="v-pills-profile2"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab2"
                      >
                        <p class="mb-0">
                          Culpa dolor voluptate do laboris laboris irure
                          reprehenderit id incididunt duis pariatur mollit aute
                          magna pariatur consectetur. Eu veniam duis non ut
                          dolor deserunt commodo et minim in quis laboris ipsum
                          velit id veniam. Quis ut consectetur adipisicing
                          officia excepteur non sit. Ut et elit aliquip labore
                          Leggings enim eu. Ullamco mollit occaecat dolore ipsum
                          id officia mollit qui esse anim eiusmod do sint minim
                          consectetur qui.
                        </p>
                      </div>
                    </ng-template>
                  </ng-container>
                  <ng-container ngbNavItem="">
                    <a
                      ngbNavLink
                      class="nav-link"
                      id="v-pills-settings-tab2"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-settings2"
                      aria-selected="false"
                    >
                      <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                      <span class="d-none d-md-block">Settings</span>
                    </a>
                    <ng-template ngbNavContent>
                      <div
                        class="tab-pane"
                        id="v-pills-settings2"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab2"
                      >
                        <p class="mb-0">
                          Food truck quinoa dolor sit amet, consectetuer
                          adipiscing elit. Aenean commodo ligula eget dolor.
                          Aenean massa. Cum sociis natoque penatibus et magnis
                          dis parturient montes, nascetur ridiculus mus. Donec
                          quam felis, ultricies nec, pellentesque eu, pretium
                          quis, sem. Nulla consequat massa quis enim. Cillum ad
                          ut irure tempor velit nostrud occaecat ullamco aliqua
                          anim Leggings sint. Veniam sint duis incididunt do
                          esse magna mollit excepteur laborum qui.
                        </p>
                      </div>
                    </ng-template>
                  </ng-container>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tabs Bordered</h4>
            <p class="text-muted font-14 mb-3">
              The navigation item can have a simple bottom border as well. Just
              specify the class <code>.nav-bordered</code>.
            </p>

            <ul
              ngbNav
              #bordernav="ngbNav"
              [activeId]="2"
              class="nav nav-tabs nav-bordered mb-3"
            >
              <li [ngbNavItem]="1" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-home-variant d-md-none d-block"></i>
                  <span class="d-none d-md-block">Home</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="home-b1">
                    <p>
                      Leggings occaecat dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="2" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="true"
                  class="nav-link"
                >
                  <i class="mdi mdi-account-circle d-md-none d-block"></i>
                  <span class="d-none d-md-block">Profile</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="profile-b1">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <p class="mb-0">
                      Leggings occaecat dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="3" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                  <span class="d-none d-md-block">Settings</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="settings-b1">
                    <p>
                      Food truck quinoa dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
            </ul>

            <div [ngbNavOutlet]="bordernav" class="tab-content"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tabs Bordered Justified</h4>
            <p class="text-muted font-14 mb-3">
              The navigation item with a simple bottom border and justified
            </p>

            <ul
              ngbNav
              #borderjustifynav="ngbNav"
              [activeId]="2"
              class="nav nav-tabs nav-justified nav-bordered mb-3"
            >
              <li [ngbNavItem]="1" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-home-variant d-md-none d-block"></i>
                  <span class="d-none d-md-block">Home</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="home-b2">
                    <p>
                      Leggings occaecat dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="2" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="true"
                  class="nav-link"
                >
                  <i class="mdi mdi-account-circle d-md-none d-block"></i>
                  <span class="d-none d-md-block">Profile</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane show active" id="profile-b2">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <p class="mb-0">
                      Leggings occaecat dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                  </div>
                </ng-template>
              </li>
              <li [ngbNavItem]="3" class="nav-item">
                <a
                  ngbNavLink
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <i class="mdi mdi-settings-outline d-md-none d-block"></i>
                  <span class="d-none d-md-block">Settings</span>
                </a>
                <ng-template ngbNavContent>
                  <div class="tab-pane" id="settings-b2">
                    <p>
                      Food truck quinoa dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim.
                    </p>
                    <p class="mb-0">
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Nullam dictum felis eu pede mollis
                      pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                      semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                      ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                  </div>
                </ng-template>
              </li>
            </ul>

            <div class="tab-content" [ngbNavOutlet]="borderjustifynav"></div>
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
export class TabsComponent {}
