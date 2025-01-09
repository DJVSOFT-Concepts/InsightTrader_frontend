import { Component } from '@angular/core'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [NgbTooltipModule],
  template: `
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4 class="header-title mb-0">Transaction List</h4>
        <div>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Today</option>
            <option value="1">Yesterday</option>
            <option value="2">Tomorrow</option>
          </select>
        </div>
      </div>

      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap table-hover mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                <th scope="col" class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="assets/images/users/avatar-1.jpg"
                        alt="Avtar image"
                        width="33"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">Adam Baldwin</div>
                  </div>
                </td>
                <td><i class="uil uil-calender me-1"></i>Jan 01, 2022</td>
                <td>
                  <span class="badge bg-success-lighten text-success"
                    >Incoming</span
                  >
                </td>
                <td>
                  <span class="text-success fw-semibold">+ $2,586.60</span>
                </td>
                <td class="text-end">
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-info me-2"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Edit"
                    ><i class="uil uil-pen"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-danger"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Delete"
                    ><i class="uil uil-trash"></i
                  ></a>
                </td>
              </tr>
              <!-- end tr -->

              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="assets/images/users/avatar-2.jpg"
                        alt="Avtar image"
                        width="33"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">Peter Wallace</div>
                  </div>
                </td>
                <td><i class="uil uil-calender me-1"></i>Jan 18, 2022</td>
                <td>
                  <span class="badge bg-danger-lighten text-danger"
                    >Outgoing</span
                  >
                </td>
                <td>
                  <span class="text-danger fw-semibold">- $1,250.48</span>
                </td>
                <td class="text-end">
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-info me-2"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Edit"
                    ><i class="uil uil-pen"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-danger"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Delete"
                    ><i class="uil uil-trash"></i
                  ></a>
                </td>
              </tr>
              <!-- end tr -->

              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="assets/images/users/avatar-3.jpg"
                        alt="Avtar image"
                        width="33"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">Jacob Dunn</div>
                  </div>
                </td>
                <td><i class="uil uil-calender me-1"></i>Feb 05, 2022</td>
                <td>
                  <span class="badge bg-success-lighten text-success"
                    >Incoming</span
                  >
                </td>
                <td>
                  <span class="text-success fw-semibold">+ $18,400.00</span>
                </td>
                <td class="text-end">
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-info me-2"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Edit"
                    ><i class="uil uil-pen"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-danger"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Delete"
                    ><i class="uil uil-trash"></i
                  ></a>
                </td>
              </tr>
              <!-- end tr -->

              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="assets/images/users/avatar-4.jpg"
                        alt="Avtar image"
                        width="33"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">Terry Adams</div>
                  </div>
                </td>
                <td><i class="uil uil-calender me-1"></i>Feb 13, 2022</td>
                <td>
                  <span class="badge bg-warning-lighten text-warning"
                    >In Progress</span
                  >
                </td>
                <td>
                  <span class="text-warning fw-semibold">+ $9,646.20</span>
                </td>
                <td class="text-end">
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-info me-2"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Edit"
                    ><i class="uil uil-pen"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-danger"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Delete"
                    ><i class="uil uil-trash"></i
                  ></a>
                </td>
              </tr>
              <!-- end tr -->

              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="assets/images/users/avatar-5.jpg"
                        alt="Avtar image"
                        width="33"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">Jason Stovall</div>
                  </div>
                </td>
                <td><i class="uil uil-calender me-1"></i>Mar 02, 2022</td>
                <td>
                  <span class="badge bg-danger-lighten text-danger"
                    >Outgoing</span
                  >
                </td>
                <td>
                  <span class="text-danger fw-semibold">+ $10,285.80</span>
                </td>
                <td class="text-end">
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-info me-2"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Edit"
                    ><i class="uil uil-pen"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="font-18 text-danger"
                    data-bs-toggle="tooltip"
                    placement="top"
                    ngbTooltip="Delete"
                    ><i class="uil uil-trash"></i
                  ></a>
                </td>
              </tr>
              <!-- end tr -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class TransactionComponent {}
