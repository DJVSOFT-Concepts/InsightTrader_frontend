import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { UserComponent } from './components/user.component'
import { AboutComponent } from './components/about.component'
import { TimelineComponent } from './components/timeline.component'
import { SettingsComponent } from './components/settings.component'
import { MessagesComponent } from '@component/messages/messages.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-profile-2',
  standalone: true,
  imports: [
    PagetitleComponent,
    UserComponent,
    AboutComponent,
    SettingsComponent,
    TimelineComponent,
    MessagesComponent,
    NgbNavModule,
  ],
  template: `
    <app-pagetitle
      title="Profile 2"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-4 col-lg-5">
        <app-user></app-user>

        <!-- Messages-->
        <app-messages></app-messages>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-xl-8 col-lg-7">
        <div class="card">
          <div class="card-body">
            <ul
              ngbNav
              #nav="ngbNav"
              [activeId]="2"
              class="nav nav-pills bg-nav-pills nav-justified mb-3"
            >
              <li [ngbNavItem]="1" class="nav-item">
                <a ngbNavLink aria-expanded="false" class="nav-link rounded-0">
                  About
                </a>
                <ng-template ngbNavContent>
                  <app-about></app-about>
                </ng-template>
                <!-- end about me section content -->
              </li>
              <li [ngbNavItem]="2" class="nav-item">
                <a ngbNavLink aria-expanded="true" class="nav-link rounded-0">
                  Timeline
                </a>
                <ng-template ngbNavContent>
                  <app-timeline></app-timeline>
                  <!-- end timeline content-->
                </ng-template>
              </li>
              <li [ngbNavItem]="3" class="nav-item">
                <a ngbNavLink aria-expanded="false" class="nav-link rounded-0">
                  Settings
                </a>
                <ng-template ngbNavContent>
                  <app-settings />
                  <!-- end settings content-->
                </ng-template>
              </li>
            </ul>
            <div [ngbNavOutlet]="nav" class="tab-content"></div>
            <!-- end tab-content -->
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class Profile2Component {}
