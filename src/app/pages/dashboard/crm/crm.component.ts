import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { StatisticsComponent } from './components/statistics.component'
import { CampaignsComponent } from './components/campaigns.component'
import { RevenueComponent } from './components/revenue.component'
import { TopPerformingComponent } from './components/top-performing.component'
import { RecentLeadsComponent } from './components/recent-leads.component'
import { TodoComponent } from './components/todo.component'

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [
    PagetitleComponent,
    StatisticsComponent,
    CampaignsComponent,
    RevenueComponent,
    TopPerformingComponent,
    RecentLeadsComponent,
    TodoComponent,
  ],
  template: `<app-pagetitle
      title="CRM"
      subtitle="CRM"
      pagetitle="Hyper"
    ></app-pagetitle>

    <crm-statistics></crm-statistics>

    <div class="row">
      <div class="col-lg-5">
        <app-campaigns></app-campaigns>
      </div>
      <!-- end col-->

      <div class="col-lg-7">
        <app-revenue></app-revenue>
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-4 col-lg-12">
        <app-top-performing></app-top-performing>
      </div>
      <!-- end col-->

      <div class="col-xl-4 col-lg-6">
        <app-recent-leads></app-recent-leads>
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-lg-6">
        <div class="card cta-box bg-primary text-white">
          <div class="card-body">
            <div class="d-flex align-items-start align-items-center">
              <div class="w-100 overflow-hidden">
                <h2 class="mt-0 text-reset">
                  <i class="mdi mdi-bullhorn-outline"></i>&nbsp;
                </h2>
                <h3 class="m-0 fw-normal cta-box-title text-reset">
                  Enhance your <b>Campaign</b> for better outreach
                  <i class="mdi mdi-arrow-right"></i>
                </h3>
              </div>
              <img
                class="ms-3"
                src="assets/images/svg/email-campaign.svg"
                width="120"
                alt="Generic placeholder image"
              />
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <app-todo></app-todo>
      </div>
      <!-- end col -->
    </div> `,
  styles: ``,
})
export class CrmComponent {}
