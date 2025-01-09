import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { RevenueStatisticsComponent } from './components/revenue-statistics.component'
import { ManagementWidgetComponent } from './components/management-widget.component'
import { RecentlyUpdateComponent } from './components/recently-update.component'
import { MonthlyProgressComponent } from './components/monthly-progress.component'
import { TaskStatusComponent } from './components/task-status.component'
import { CalendarComponent } from './components/calendar.component'

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [
    PagetitleComponent,
    RevenueStatisticsComponent,
    ManagementWidgetComponent,
    RecentlyUpdateComponent,
    MonthlyProgressComponent,
    TaskStatusComponent,
    CalendarComponent,
  ],
  template: `
    <app-pagetitle
      title="Management"
      subtitle="CRM"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xxl-6">
        <app-revenue-statistics></app-revenue-statistics>
      </div>
      <!-- End col -->

      <div class="col-xxl-6">
        <app-management-widget></app-management-widget>
      </div>
    </div>
    <!-- End row -->

    <h4 class="page-title mb-3">Recently Updated Clients</h4>

    <app-recently-update></app-recently-update>

    <div class="row">
      <div class="col-xxl-6">
        <app-monthly-progress></app-monthly-progress>
      </div>
      <!-- end col -->

      <div class="col-md-6 col-xxl-3">
        <app-task-status></app-task-status>
      </div>
      <!-- end col -->

      <div class="col-md-6 col-xxl-3">
        <app-calendar></app-calendar>
      </div>
      <!-- end col -->
    </div>
  `,
  styles: ``,
})
export class ManagementComponent {}
