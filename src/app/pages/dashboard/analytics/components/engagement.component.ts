import { Component } from '@angular/core'

@Component({
  selector: 'engagement',
  standalone: true,
  imports: [],
  template: ` <div class="card">
      <div
        class="d-flex card-header justify-content-between align-items-center"
      >
        <h4 class="header-title">Engagement Overview</h4>
        <a href="javascript:void(0);" class="btn btn-sm btn-light"
          >Export <i class="mdi mdi-download ms-1"></i
        ></a>
      </div>

      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table table-sm table-centered mb-0 font-14">
            <thead class="table-light">
              <tr>
                <th>Duration (Secs)</th>
                <th style="width: 30%">Sessions</th>
                <th style="width: 30%">Views</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0-30</td>
                <td>2,250</td>
                <td>4,250</td>
              </tr>
              <tr>
                <td>31-60</td>
                <td>1,501</td>
                <td>2,050</td>
              </tr>
              <tr>
                <td>61-120</td>
                <td>750</td>
                <td>1,600</td>
              </tr>
              <tr>
                <td>121-240</td>
                <td>540</td>
                <td>1,040</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive-->
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->`,
})
export class EngagementComponent {}
