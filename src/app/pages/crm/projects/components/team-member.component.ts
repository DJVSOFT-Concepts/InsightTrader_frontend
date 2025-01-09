import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { members } from '@core/data'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-team-member',
  standalone: true,
  imports: [SimplebarAngularModule, CommonModule],
  template: `
    <div class="card card-h-100">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4 class="header-title mb-0">Team Members</h4>
        <div>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Active</option>
            <option value="1">Offline</option>
          </select>
        </div>
      </div>

      <ngx-simplebar
        class="card-body py-0 mb-3"
        data-simplebar
        style="max-height: 304px"
      >
        @for (data of memberList; track $index) {
          <div
            class="d-flex align-items-start"
            [ngClass]="{ 'mt-3': $index > 0 }"
          >
            <img
              class="me-3 rounded-circle"
              src="{{ data.avatar }}"
              width="40"
              alt="Generic placeholder image"
            />
            <div class="w-100 overflow-hidden">
              <h5 class="mt-0 mb-1 fw-semibold">
                <a href="javascript:void(0);" class="text-reset">{{
                  data.name
                }}</a>
              </h5>
              <ul class="list-inline mb-0 font-13">
                <li class="list-inline-item">{{ data.designation }}</li>
                <li class="list-inline-item text-muted">
                  <i class="mdi mdi-circle-small"></i>
                </li>
                <li class="list-inline-item text-muted">
                  {{ data.experience }} Year Experience
                </li>
              </ul>
            </div>
          </div>
        }
      </ngx-simplebar>
    </div>
  `,
  styles: ``,
})
export class TeamMemberComponent {
  memberList = members

  ngOnInit(): void {}
}
