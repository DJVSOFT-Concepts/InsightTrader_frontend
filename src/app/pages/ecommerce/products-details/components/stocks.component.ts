import { Component } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [NgbProgressbarModule],
  template: `
    <div class="table-responsive mt-4">
      <table class="table table-bordered table-centered mb-0">
        <thead class="table-light">
          <tr>
            <th>Outlets</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ASOS Ridley Outlet - NYC</td>
            <td>$139.58</td>
            <td>
              <div class="progress-w-percent mb-0">
                <span class="progress-value">478 </span>
                <ngb-progressbar type="success" [value]="56" height="5px" />
              </div>
            </td>
            <td>$1,89,547</td>
          </tr>
          <tr>
            <td>Marco Outlet - SRT</td>
            <td>$149.99</td>
            <td>
              <div class="progress-w-percent mb-0">
                <span class="progress-value">73 </span>
                <ngb-progressbar type="danger" [value]="16" height="5px" />
              </div>
            </td>
            <td>$87,245</td>
          </tr>
          <tr>
            <td>Chairtest Outlet - HY</td>
            <td>$135.87</td>
            <td>
              <div class="progress-w-percent mb-0">
                <span class="progress-value">781 </span>
                <ngb-progressbar type="success" [value]="72" height="5px" />
              </div>
            </td>
            <td>$5,87,478</td>
          </tr>
          <tr>
            <td>Nworld Group - India</td>
            <td>$159.89</td>
            <td>
              <div class="progress-w-percent mb-0">
                <span class="progress-value">815 </span>
                <ngb-progressbar type="success" [value]="89" height="5px" />
              </div>
            </td>
            <td>$55,781</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- end table-responsive-->
  `,
  styles: ``,
})
export class StocksComponent {}
