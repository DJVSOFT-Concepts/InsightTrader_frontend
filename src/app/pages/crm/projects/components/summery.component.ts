import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-summery',
  standalone: true,
  imports: [CardTitleComponent, NgbTooltipModule],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Project Summary"
        [menuItems]="[{ label: 'Refresh Report' }, { label: 'Export Report' }]"
      ></card-title>

      <div class="alert alert-warning border-0 rounded-0" role="alert">
        <i class="uil-folder-heart me-1 h4 align-middle"></i> <b> 38</b> Total
        Admin & Client Projects
      </div>

      <div class="card-body pt-1">
        <div
          class="d-flex align-items-center border border-light rounded p-2 mb-2"
        >
          <div class="flex-shrink-0 me-2">
            <i class="mdi mdi-account-group widget-icon rounded-circle"></i>
          </div>
          <div class="flex-grow-1">
            <h5 class="fw-semibold my-0">Project Discssion</h5>
            <p class="mb-0">6 Person</p>
          </div>
          <a
            href="javasript:void(0)"
            class="text-muted"
            data-bs-toggle="tooltip"
            placement="top"
            ngbTooltip="Info"
            ><i class="mdi mdi-information-outline h4  my-0"></i
          ></a>
        </div>

        <div
          class="d-flex align-items-center border border-light rounded p-2 mb-2"
        >
          <div class="flex-shrink-0 me-2">
            <i
              class="mdi mdi-progress-pencil widget-icon rounded-circle bg-warning-lighten text-warning"
            ></i>
          </div>
          <div class="flex-grow-1">
            <h5 class="fw-semibold my-0">In Progress</h5>
            <p class="mb-0">16 Projects</p>
          </div>
          <a
            href="javasript:void(0)"
            class="text-muted"
            data-bs-toggle="tooltip"
            placement="top"
            ngbTooltip="Info"
            ><i class="mdi mdi-information-outline h4  my-0"></i
          ></a>
        </div>

        <div
          class="d-flex align-items-center border border-light rounded p-2 mb-2"
        >
          <div class="flex-shrink-0 me-2">
            <i
              class="mdi mdi-checkbox-marked-circle-outline widget-icon rounded-circle bg-danger-lighten text-danger"
            ></i>
          </div>
          <div class="flex-grow-1">
            <h5 class="fw-semibold my-0">Completed Projects</h5>
            <p class="mb-0">24</p>
          </div>
          <a
            href="javasript:void(0)"
            class="text-muted"
            data-bs-toggle="tooltip"
            placement="top"
            ngbTooltip="Info"
            ><i class="mdi mdi-information-outline h4  my-0"></i
          ></a>
        </div>

        <div class="d-flex align-items-center border border-light rounded p-2">
          <div class="flex-shrink-0 me-2">
            <i
              class="mdi mdi-send widget-icon rounded-circle bg-success-lighten text-success"
            ></i>
          </div>
          <div class="flex-grow-1">
            <h5 class="fw-semibold my-0">Delivery Projects</h5>
            <p class="mb-0">20</p>
          </div>
          <a
            href="javasript:void(0)"
            class="text-muted"
            data-bs-toggle="tooltip"
            placement="top"
            ngbTooltip="Info"
            ><i class="mdi mdi-information-outline h4  my-0"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h4 class="fw-semibold mt-0 mb-3">
          On Time Completed Rate
          <span class="badge bg-success-lighten text-success fw ms-sm-1"
            ><i class="mdi mdi-trending-up me-1"></i>59%</span
          >
        </h4>
        <h5 class="float-end mt-0">65%</h5>
        <h5 class="fw-normal mt-0 mb-2">Completed Projects</h5>
        <div class="progress" style="height: 4px;">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 65%"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SummeryComponent {}
