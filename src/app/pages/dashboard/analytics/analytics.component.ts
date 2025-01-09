import { Component } from '@angular/core'
import { NgApexchartsModule } from 'ng-apexcharts'
import { StatisticsComponent } from './components/statistics.component'
//import { SessionComponent } from './components/session-chart.component'
import { SessionByCountryComponent } from './components/sessionby-country.component'
import { ViewPerMinuteComponent } from './components/view-per-minute.component'
import { BrowserSessionComponent } from './components/browser-session.component'
import { OperatingSystemComponent } from './components/operating-system.component'
import { ChannelComponent } from './components/channel.component'
import { SocialMediaComponent } from './components/social-media.component'
import { EngagementComponent } from './components/engagement.component'
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { ChartOptions } from '@core/model/apexchart.model'

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    // NgApexchartsModule,
    // StatisticsComponent,
    // SessionComponent,
    // SessionByCountryComponent,
    // ViewPerMinuteComponent,
    // BrowserSessionComponent,
    // OperatingSystemComponent,
    // ChannelComponent,
    // SocialMediaComponent,
    // EngagementComponent,
    // NgbDatepickerModule,
    // FormsModule,
  ],
  template: ` <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <form class="d-flex">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-light"
                  id="dash-daterange"
                  name="dp"
                  
                  ngbDatepicker
                  
                  
                />
                <span
                  class="input-group-text bg-primary border-primary text-white"
                >
                  <i class="mdi mdi-calendar-range font-13"></i>
                </span>
              </div>
              <a href="javascript: void(0);" class="btn btn-primary ms-2">
                <i class="mdi mdi-autorenew"></i>
              </a>
            </form>
          </div>
          <h4 class="page-title">Analytics</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-3 col-lg-4">
        
      </div>
      <!-- end col -->

      <div class="col-xl-9 col-lg-8">
        
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4 col-lg-12">
        
      </div>
      <!-- end col-->

      <div class="col-xl-4 col-lg-6">
        
      </div>
      <!-- end col-->

      <div class="col-xl-4 col-lg-6">
        
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4 col-lg-6">
        
      </div>
      <!-- end col-->

      <div class="col-xl-4 col-lg-6">
        
      </div>
      <!-- end col-->

      <div class="col-xl-4 col-lg-12">
        
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->`,
  styles: ``,
})
export class AnalyticsComponent {
  sessionsoverviewChart!: Partial<ChartOptions>

  date: NgbDateStruct = {
    year: 2024,
    month: 3,
    day: 1,
  }

  ngOnInit(): void {
    this._sessionsoverviewChart()
  }

  getDaysInMonth(month: number, year: number) {
    var date = new Date(year, month, 1)
    var days = []
    var idx = 0
    while (date.getMonth() === month && idx < 15) {
      var d = new Date(date)
      days.push(
        d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' })
      )
      date.setDate(date.getDate() + 1)
      idx += 1
    }
    return days
  }

  // Session Overview Chart
  _sessionsoverviewChart() {
    const colors = document
      .getElementById('sessions-overview')
      ?.getAttribute('data-colors')
      ?.split(',')
    const labels = this.getDaysInMonth(
      new Date().getMonth() + 1,
      new Date().getFullYear()
    )
  }
}
