import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { StatisticsComponent } from './components/statistics.component'
import { ProjectStatusComponent } from './components/project-status.component'
import { TasksComponent } from './components/tasks.component'
import { TaskOverviewComponent } from './components/task-overview.component'
import { ActivityComponent } from './components/activity.component'
import { CalenderComponent } from './components/calender.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    PagetitleComponent,
    StatisticsComponent,
    ProjectStatusComponent,
    TasksComponent,
    TaskOverviewComponent,
    ActivityComponent,
    CalenderComponent,
  ],
  template: `
    <app-pagetitle
      title="Projects"
      pagetitle="Hyper"
      subtitle="Dashboard"
    ></app-pagetitle>
    <div class="row">
      <div class="col-12">
        <app-statistics></app-statistics>
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-lg-4">
        <app-project-status></app-project-status>
      </div>

      <div class="col-lg-8">
        <app-tasks></app-tasks>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <app-task-overview></app-task-overview>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-5">
        <app-activity></app-activity>
      </div>

      <div class="col-xl-7">
        <app-calender></app-calender>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProjectsComponent {}
