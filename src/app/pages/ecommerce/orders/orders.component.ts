import { Component, ViewChild, inject } from '@angular/core'
import { TableComponent } from '@component/table/table.component'
import { CellFormatter, Column } from '@component/table/table.model'
import { Orders } from '@core/model/ecommerce.model'
import { Store } from '@ngrx/store'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { fetchEcommerceOrder } from '@store/ecommerce/ecommerce.actions'
import { getOrders } from '@store/ecommerce/ecommerce.selector'

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [PagetitleComponent, TableComponent],
  template: `
    <app-pagetitle
      title="Orders"
      subtitle="Ecommerce"
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
                        <option value="3">Payment failed</option>
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
      </div>
    </div>
  `,
})
export class OrdersComponent {
  private store = inject(Store)
  orderList!: Orders[]

  // @ViewChild('app-table') appTable!: TableComponent<Orders>;

  ngOnInit(): void {
    this.store.dispatch(fetchEcommerceOrder())
    this.store.select(getOrders).subscribe((data) => {
      this.orderList = data
    })
  }

  dateRenderer({ row }: CellFormatter<Orders>) {
    return `
   ${row.order_date}
    <small class="text-muted"> ${row.order_time}</small>
   `
  }

  paymentstatusRenderer({ row }: CellFormatter<Orders>) {
    return `
    <h5><span class="badge ${
      row.payment_status == 'Paid'
        ? 'badge-success-lighten'
        : row.payment_status == 'Payment Failed'
          ? 'badge-danger-lighten'
          : row.payment_status == 'Awaiting Authorization'
            ? 'badge-warning-lighten'
            : 'badge-info-lighten'
    }">
    <i class="mdi mdi-bitcoin"></i> ${row.payment_status}</span></h5>
   `
  }

  orderstatusRenderer({ row }: CellFormatter<Orders>) {
    return `
    <h5><span class="badge ${
      row.order_status == 'Shipped'
        ? 'badge-info-lighten'
        : row.order_status == 'Processing'
          ? 'badge-warning-lighten'
          : row.order_status == 'Delivered'
            ? 'badge-success-lighten'
            : 'badge-danger-lighten'
    } ">${row.order_status}</span></h5>
    `
  }

  actionColumnRenderer() {
    // Your custom rendering logic for the action column
    return `<a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-eye"></i></a>
                  <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
                  <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-delete"></i></a>`
  }

  columns: Column<Orders>[] = [
    {
      header: 'Order ID',
      accessor: 'order_id',
      defaultCanSort: true,
    },
    { header: 'Date', accessor: 'order_date', Cell: this.dateRenderer },
    {
      header: 'Payment Status',
      accessor: 'payment_status',
      defaultCanSort: true,
      Cell: this.paymentstatusRenderer,
    },
    { header: 'Total', accessor: 'total' },
    { header: 'Payment Method', accessor: 'payment_method' },
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
