import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { ProjectWidgetComponent } from './components/project-widget.component'
import { SummeryComponent } from './components/summery.component'
import { MonthlyTargetComponent } from './components/monthly-target.component'
import { StatisticsComponent } from './components/statistics.component'
import { ProjectWidget2Component } from './components/project-widget2.component'
import { OverviewComponent } from './components/overview.component'
import { DailyTaskComponent } from './components/daily-task.component'
import { TeamMemberComponent } from './components/team-member.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    PagetitleComponent,
    ProjectWidgetComponent,
    SummeryComponent,
    MonthlyTargetComponent,
    StatisticsComponent,
    ProjectWidget2Component,
    OverviewComponent,
    DailyTaskComponent,
    TeamMemberComponent,
  ],
  template: `<app-pagetitle
      title="Projects"
      subtitle="CRM"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xxl-9">
        <app-project-widget></app-project-widget>

        <div class="row">
          <div class="col-xl-4">
            <app-monthly-target></app-monthly-target>
          </div>
          <div class="col-xl-8">
            <app-statistics></app-statistics>
          </div>
        </div>
      </div>
      <div class="col-xxl-3">
        <app-summery></app-summery>
      </div>
    </div>
    <app-project-widget2></app-project-widget2>

    <div class="row">
      <div class="col-xxl-6">
        <app-overview></app-overview>
      </div>

      <div class="col-md-6 col-xxl-3">
        <app-daily-task></app-daily-task>
      </div>

      <div class="col-md-6 col-xxl-3">
        <app-team-member></app-team-member>
      </div>
    </div>
    <!-- end row --> `,
  styles: ``,
})
export default class ProjectsComponent {}
