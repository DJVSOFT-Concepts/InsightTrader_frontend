import { Component } from '@angular/core'
import { statisticsData } from '@core/data'
import { StatisticsItem } from '@core/model/crm.model'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-project-widget2',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <div class="row">
      @for (data of projectData; track $index) {
        <div class="col-sm-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-sm">
                    <span
                      class="avatar-title bg-{{ data.variant }}-lighten text-{{
                        data.variant
                      }} rounded"
                    >
                      <i class="{{ data.icon }} font-24"></i>
                    </span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h5 class="mt-0 mb-1">{{ data.title }}</h5>
                  <p class="mb-0">{{ data.noOfProject }}</p>
                </div>
                <div ngbDropdown class="dropdown float-end">
                  <a
                    ngbDropdownToggle
                    class="dropdown-toggle arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="mdi mdi-dots-vertical"></i>
                  </a>
                  <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                    <!-- item-->
                    <a
                      ngbDropdownItem
                      href="javascript:void(0);"
                      class="dropdown-item"
                      >Today</a
                    >
                    <!-- item-->
                    <a
                      ngbDropdownItem
                      href="javascript:void(0);"
                      class="dropdown-item"
                      >Yesterday</a
                    >
                    <!-- item-->
                    <a
                      ngbDropdownItem
                      href="javascript:void(0);"
                      class="dropdown-item"
                      >Last Week</a
                    >
                    <!-- item-->
                    <a
                      ngbDropdownItem
                      href="javascript:void(0);"
                      class="dropdown-item"
                      >Last Month</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class ProjectWidget2Component {
  projectData!: StatisticsItem[]

  ngOnInit(): void {
    this.projectData = statisticsData
  }
}
