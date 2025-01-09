import { Component } from '@angular/core'
import { recentFiles } from '@core/data'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-recent',
  standalone: true,
  imports: [NgbTooltipModule, NgbDropdownModule],
  template: `
    <div class="table-responsive">
      <table class="table table-centered table-nowrap mb-0">
        <thead class="table-light">
          <tr>
            <th class="border-0">Name</th>
            <th class="border-0">Last Modified</th>
            <th class="border-0">Size</th>
            <th class="border-0">Owner</th>
            <th class="border-0">Members</th>
            <th class="border-0" style="width: 80px">Action</th>
          </tr>
        </thead>
        <tbody>
          @for (data of fileList; track $index) {
            <tr>
              <td>
                <span class="ms-2 fw-semibold"
                  ><a href="javascript: void(0);" class="text-reset">{{
                    data.name
                  }}</a></span
                >
              </td>
              <td>
                <p class="mb-0">{{ data.modifiedDate }}</p>
                <span class="font-12">by {{ data.modifiedBy }}</span>
              </td>
              <td>{{ data.size }}</td>
              <td>{{ data.owner }}</td>
              <td id="tooltip-container">
                <div class="avatar-group d-flex gap-1">
                  @for (member of data.members; track $index) {
                    <a
                      href="javascript: void(0);"
                      class="avatar-group-item mb-0"
                      placement="top"
                      ngbTooltip="{{ member.name }}"
                    >
                      <img
                        src="{{ member.image }}"
                        class="rounded-circle avatar-xs"
                        alt="friend"
                      />
                    </a>
                  }
                </div>
              </td>
              <td class="">
                <div ngbDropdown class="btn-group dropdown">
                  <a
                    ngbDropdownToggle
                    class="table-action-btn dropdown-toggle arrow-none btn btn-light btn-xs"
                    ><i class="mdi mdi-dots-horizontal"></i
                  ></a>
                  <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)"
                      ><i
                        class="mdi mdi-share-variant me-2 text-muted vertical-middle"
                      ></i
                      >Share</a
                    >
                    <a class="dropdown-item" href="javascript:void(0)"
                      ><i
                        class="mdi mdi-link me-2 text-muted vertical-middle"
                      ></i
                      >Get Sharable Link</a
                    >
                    <a class="dropdown-item" href="javascript:void(0)"
                      ><i
                        class="mdi mdi-pencil me-2 text-muted vertical-middle"
                      ></i
                      >Rename</a
                    >
                    <a class="dropdown-item" href="javascript:void(0)"
                      ><i
                        class="mdi mdi-download me-2 text-muted vertical-middle"
                      ></i
                      >Download</a
                    >
                    <a class="dropdown-item" href="javascript:void(0)"
                      ><i
                        class="mdi mdi-delete me-2 text-muted vertical-middle"
                      ></i
                      >Remove</a
                    >
                  </div>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class RecentComponent {
  fileList = recentFiles
}
