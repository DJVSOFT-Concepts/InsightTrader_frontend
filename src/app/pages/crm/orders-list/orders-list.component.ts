import { Component, inject } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { Store } from '@ngrx/store'
import { fetchCrmOrder } from '@store/crm/crm.actions'
import { getCRMOrders } from '@store/crm/crm.selector'
import { CommonModule } from '@angular/common'
import { TableComponent } from '@component/table/table.component'
import { CellFormatter } from '@component/table/table.model'
import { Order } from '@core/model/crm.model'

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [PagetitleComponent, CommonModule, TableComponent],
  template: `
    <app-pagetitle
      title="Orders List"
      subtitle="CRM"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-xl-8">
                <form
                  class="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between"
                >
                  <div class="col-auto">
                    <div class="d-flex align-items-center">
                      <label for="status-select" class="me-2">Status</label>
                      <select class="form-select" id="status-select">
                        <option selected>Choose...</option>
                        <option value="1">Paid</option>
                        <option value="2">Awaiting Authorization</option>
                        <option value="3">Payment Failed</option>
                        <option value="4">Cash On Delivery</option>
                        <option value="5">Fulfilled</option>
                        <option value="6">Unfulfilled</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-xl-4">
                <div class="text-xl-end mt-xl-0 mt-2">
                  <button type="button" class="btn btn-danger mb-2 me-2">
                    <i class="mdi mdi-basket me-1"></i> Add New Order
                  </button>
                  <button type="button" class="btn btn-light mb-2">
                    Export
                  </button>
                </div>
              </div>
              <!-- end col-->
            </div>

            <div class="table-responsive">
              <app-table
                tableClass="table-nowrap mb-0"
                theadClass="table-light"
                [isSelectable]="true"
                [columns]="columns"
                [data]="orderList"
                [itemsPerPage]="10"
                [pagination]="false"
              ></app-table>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class OrdersListComponent {
  orderList!: Order[]

  private store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(fetchCrmOrder())
    this.store.select(getCRMOrders).subscribe((data) => {
      this.orderList = data
    })
  }

  customerRenderer({ row }: CellFormatter<Order>) {
    return `   
    <div class="d-flex">
  <div class="d-flex align-items-center">
    <div class="flex-shrink-0">
      <img
        src="${row.avatar}"
        class="rounded-circle avatar-xs"
        alt="friend"
      />
    </div>
    <div class="flex-grow-1 ms-2">
      <h5 class="my-0">${row.name}</h5>
    </div>
  </div>
</div>`
  }

  addressRendered({ row }: CellFormatter<Order>) {
    return `
    <td>
    <h5 class="my-0">${row.country}</h5>
    <p class="mb-0 txt-muted">${row.city}</p>
  </td>`
  }

  orderstatusRenderer({ row }: CellFormatter<Order>) {
    return `
    <h5><span class="badge ${
      row.orderStatus == 'In Progress'
        ? 'badge-info-lighten'
        : row.orderStatus == 'Complete'
          ? 'badge-success-lighten'
          : row.orderStatus == 'Delivered'
            ? 'badge-primary-lighten'
            : 'badge-warning-lighten'
    } ">${row.orderStatus}</span></h5>
    `
  }

  actionColumnRenderer() {
    // Your custom rendering logic for the action column
    return `
          <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
          <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-delete"></i></a>`
  }

  columns = [
    {
      header: 'Order ID',
      accessor: 'orderId',
      defaultCanSort: true,
    },
    { header: 'Customers', accessor: 'name', Cell: this.customerRenderer },
    { header: 'Project', accessor: 'projectName' },
    {
      header: 'Address',
      accessor: 'address',
      defaultCanSort: true,
      Cell: this.addressRendered,
    },
    { header: 'Date Order', accessor: 'date' },
    {
      header: 'Order Status',
      accessor: 'order_status',
      defaultCanSort: true,
      Cell: this.orderstatusRenderer,
    },
    {
      header: 'Action',
      accessor: 'id',
      defaultCanSort: true,
      Cell: this.actionColumnRenderer,
    },
  ]
}
