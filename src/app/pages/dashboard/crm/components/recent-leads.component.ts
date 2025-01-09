import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
@Component({
  selector: 'app-recent-leads',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Recent Leads"
        [menuItems]="[{ label: 'Settings' }, { label: 'Action' }]"
      ></card-title>

      <div class="card-body pt-2">
        <div class="d-flex align-items-start">
          <img
            class="me-3 rounded-circle"
            src="assets/images/users/avatar-2.jpg"
            width="40"
            alt="Generic placeholder image"
          />
          <div class="w-100 overflow-hidden">
            <span class="badge badge-warning-lighten float-end">Cold lead</span>
            <h5 class="mt-0 mb-1">Risa Pearson</h5>
            <span class="font-13">richard.john&#64;mail.com</span>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <img
            class="me-3 rounded-circle"
            src="assets/images/users/avatar-3.jpg"
            width="40"
            alt="Generic placeholder image"
          />
          <div class="w-100 overflow-hidden">
            <span class="badge badge-danger-lighten float-end">Lost lead</span>
            <h5 class="mt-0 mb-1">Margaret D. Evans</h5>
            <span class="font-13">margaret.evans&#64;rhyta.com</span>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <img
            class="me-3 rounded-circle"
            src="assets/images/users/avatar-4.jpg"
            width="40"
            alt="Generic placeholder image"
          />
          <div class="w-100 overflow-hidden">
            <span class="badge badge-success-lighten float-end">Won lead</span>
            <h5 class="mt-0 mb-1">Bryan J. Luellen</h5>
            <span class="font-13">bryuellen&#64;dayrep.com</span>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <img
            class="me-3 rounded-circle"
            src="assets/images/users/avatar-5.jpg"
            width="40"
            alt="Generic placeholder image"
          />
          <div class="w-100 overflow-hidden">
            <span class="badge badge-warning-lighten float-end">Cold lead</span>
            <h5 class="mt-0 mb-1">Kathryn S. Collier</h5>
            <span class="font-13">collier&#64;jourrapide.com</span>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <img
            class="me-3 rounded-circle"
            src="assets/images/users/avatar-1.jpg"
            width="40"
            alt="Generic placeholder image"
          />
          <div class="w-100 overflow-hidden">
            <span class="badge badge-warning-lighten float-end">Cold lead</span>
            <h5 class="mt-0 mb-1">Timothy Kauper</h5>
            <span class="font-13">thykauper&#64;rhyta.com</span>
          </div>
        </div>

        <div class="d-flex align-items-start mt-3">
          <img
            class="me-3 rounded-circle"
            src="assets/images/users/avatar-6.jpg"
            width="40"
            alt="Generic placeholder image"
          />
          <div class="w-100 overflow-hidden">
            <span class="badge badge-success-lighten float-end">Won lead</span>
            <h5 class="mt-0 mb-1">Zara Raws</h5>
            <span class="font-13">austin&#64;dayrep.com</span>
          </div>
        </div>
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class RecentLeadsComponent {}
