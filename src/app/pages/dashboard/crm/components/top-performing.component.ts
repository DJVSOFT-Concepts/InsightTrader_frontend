import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'

@Component({
  selector: 'app-top-performing',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Top Performing"
        [menuItems]="[{ label: 'Settings' }, { label: 'Action' }]"
      ></card-title>

      <div class="card-body pt-0">
        <div class="table-responsive">
          <table
            class="table table-striped table-sm table-nowrap table-centered mb-0"
          >
            <thead>
              <tr>
                <th>User</th>
                <th>Leads</th>
                <th>Deals</th>
                <th>Tasks</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 class="font-15 mb-1 fw-normal">Jeremy Young</h5>
                  <span class="text-muted font-13">Senior Sales Executive</span>
                </td>
                <td>187</td>
                <td>154</td>
                <td>49</td>
                <td class="table-action">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-eye"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-15 mb-1 fw-normal">Thomas Krueger</h5>
                  <span class="text-muted font-13">Senior Sales Executive</span>
                </td>
                <td>235</td>
                <td>127</td>
                <td>83</td>
                <td class="table-action">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-eye"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-15 mb-1 fw-normal">Pete Burdine</h5>
                  <span class="text-muted font-13">Senior Sales Executive</span>
                </td>
                <td>365</td>
                <td>148</td>
                <td>62</td>
                <td class="table-action">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-eye"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-15 mb-1 fw-normal">Mary Nelson</h5>
                  <span class="text-muted font-13">Senior Sales Executive</span>
                </td>
                <td>753</td>
                <td>159</td>
                <td>258</td>
                <td class="table-action">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-eye"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 class="font-15 mb-1 fw-normal">Kevin Grove</h5>
                  <span class="text-muted font-13">Senior Sales Executive</span>
                </td>
                <td>458</td>
                <td>126</td>
                <td>73</td>
                <td class="table-action">
                  <a href="javascript: void(0);" class="action-icon">
                    <i class="mdi mdi-eye"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive-->
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class TopPerformingComponent {}
