import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { FlatpickrDirective } from '@component/flatpickr/flatpickr.directive'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CardTitleComponent, NgbDatepickerModule, FlatpickrDirective],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Your Calendar"
        [menuItems]="[
          { label: 'Weekly Report' },
          { label: 'Monthly Report' },
          { label: 'Action' },
          { label: 'Settings' }
        ]"
      ></card-title>

      <div class="card-body pt-0 project-calendar">
        <div class="row">
          <div class="col-md-7">
            <div
              mwlFlatpickr
              class="calendar-widget"
              [flatpickrOptions]="{
                altInput: true,
                inline: true,
                altInputClass: 'invisible'
              }"
            ></div>
          </div>
          <!-- end col-->
          <div class="col-md-5">
            <ul class="list-unstyled mt-1">
              <li class="mb-4">
                <p class="text-muted mb-1 font-13">
                  <i class="mdi mdi-calendar"></i> 7:30 AM - 10:00 AM
                </p>
                <h5>Meeting with BD Team</h5>
              </li>
              <li class="mb-4">
                <p class="text-muted mb-1 font-13">
                  <i class="mdi mdi-calendar"></i> 10:30 AM - 11:45 AM
                </p>
                <h5>Design Review - Hyper Admin</h5>
              </li>
              <li class="mb-4">
                <p class="text-muted mb-1 font-13">
                  <i class="mdi mdi-calendar"></i> 12:15 PM - 02:00 PM
                </p>
                <h5>Setup Github Repository</h5>
              </li>
              <li>
                <p class="text-muted mb-1 font-13">
                  <i class="mdi mdi-calendar"></i> 5:30 PM - 07:00 PM
                </p>
                <h5>Meeting with Design Studio</h5>
              </li>
            </ul>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end card body-->
    </div>
    <!-- end card -->
  `,
  styles: ``,
})
export class CalenderComponent {}
