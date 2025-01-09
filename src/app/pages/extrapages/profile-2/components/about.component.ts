import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { profileproject, projects } from '@core/data'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5 class="text-uppercase">
      <i class="mdi mdi-briefcase me-1"></i> Experience
    </h5>

    <div class="timeline-alt pb-0">
      <div class="timeline-item">
        <i class="mdi mdi-circle bg-info-lighten text-info timeline-icon"></i>
        <div class="timeline-item-info">
          <h5 class="mt-0 mb-1">Lead designer / Developer</h5>
          <p class="font-14">
            websitename.com
            <span class="ms-2 font-12">Year: 2015 - 18</span>
          </p>
          <p class="text-muted mt-2 mb-0 pb-3">
            Everyone realizes why a new common language would be desirable: one
            could refuse to pay expensive translators. To achieve this, it would
            be necessary to have uniform grammar, pronunciation and more common
            words.
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <i
          class="mdi mdi-circle bg-primary-lighten text-primary timeline-icon"
        ></i>
        <div class="timeline-item-info">
          <h5 class="mt-0 mb-1">Senior Graphic Designer</h5>
          <p class="font-14">
            Software Inc.
            <span class="ms-2 font-12">Year: 2012 - 15</span>
          </p>
          <p class="text-muted mt-2 mb-0 pb-3">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual languages.
            The new common language will be more simple and regular than the
            existing European languages.
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <i class="mdi mdi-circle bg-info-lighten text-info timeline-icon"></i>
        <div class="timeline-item-info">
          <h5 class="mt-0 mb-1">Graphic Designer</h5>
          <p class="font-14">
            Coderthemes Design LLP
            <span class="ms-2 font-12">Year: 2010 - 12</span>
          </p>
          <p class="text-muted mt-2 mb-0 pb-2">
            The European languages are members of the same family. Their
            separate existence is a myth. For science music sport etc, Europe
            uses the same vocabulary. The languages only differ in their grammar
            their pronunciation.
          </p>
        </div>
      </div>
    </div>
    <!-- end timeline -->

    <h5 class="mb-3 mt-4 text-uppercase">
      <i class="mdi mdi-cards-variant me-1"></i> Projects
    </h5>
    <div class="table-responsive">
      <table class="table table-borderless table-nowrap mb-0">
        <thead class="table-light">
          <tr>
            <th>#</th>
            <th>Clients</th>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          @for (data of projectList; track $index) {
            <tr>
              <td>{{ data.id }}</td>
              <td>
                <img
                  src="{{ data.clientProfile }}"
                  alt="table-user"
                  class="me-2 rounded-circle"
                  height="24"
                />
                {{ data.client }}
              </td>
              <td>{{ data.name }}</td>
              <td>{{ data.startDate }}</td>
              <td>{{ data.dueDate }}</td>
              <td>
                <span
                  class="badge"
                  [ngClass]="{
                    'badge-info-lighten': data.status == 'Work in Progress',
                    'badge-danger-lighten': data.status == 'Pending',
                    'badge-success-lighten': data.status == 'Done',
                    'badge-warning-lighten': data.status == 'Coming soon'
                  }"
                  >{{ data.status }}</span
                >
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  projectList = profileproject
}
