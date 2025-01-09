import { Component, inject } from '@angular/core'
import { TableComponent } from '@component/table/table.component'
import { CellFormatter } from '@component/table/table.model'
import { Customer } from '@core/model/ecommerce.model'
import { Store } from '@ngrx/store'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { fetchEcommerceCustomer } from '@store/ecommerce/ecommerce.actions'
import { getCustomers } from '@store/ecommerce/ecommerce.selector'

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [PagetitleComponent, TableComponent],
  template: `
    <app-pagetitle
      title="Customers"
      subtitle="Ecommerce"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-5">
                <a href="javascript:void(0);" class="btn btn-danger mb-2"
                  ><i class="mdi mdi-plus-circle me-2"></i> Add Customers</a
                >
              </div>
              <div class="col-sm-7">
                <div class="text-sm-end">
                  <button type="button" class="btn btn-success mb-2 me-1">
                    <i class="mdi mdi-cog"></i>
                  </button>
                  <button type="button" class="btn btn-light mb-2 me-1">
                    Import
                  </button>
                  <button type="button" class="btn btn-light mb-2">
                    Export
                  </button>
                </div>
              </div>
              <!-- end col-->
            </div>

            <app-table
              [isSelectable]="true"
              [columns]="columns"
              [data]="customersList"
              [itemsPerPage]="10"
              tableClass="table-striped dt-responsive nowrap w-100"
            ></app-table>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
  `,
  styles: ``,
})
export class CustomersComponent {
  customersList!: Customer[]

  private store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(fetchEcommerceCustomer())
    this.store.select(getCustomers).subscribe((data) => {
      this.customersList = data
    })
  }

  customerNameRenderer({ row }: CellFormatter<any>) {
    return `
    <div class="d-flex">
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0 table-user">
        <img
          src="${row.avatar}"
          class="rounded-circle"
          alt="friend"
        />
      </div>
      <div class="flex-grow-1 ms-2">
      <a href="javascript:void(0);" class="text-body fw-semibold"> ${row.name}</a>
      </div>
    </div>
  </div>

    `
  }

  statusRenderer({ row }: CellFormatter<any>) {
    return `
   <span class="badge ${
     row.status == 'Active' ? 'badge-success-lighten' : 'badge-danger-lighten'
   } ">${row.status}</span>
    `
  }

  actionColumnRenderer() {
    // Your custom rendering logic for the action column
    return `   <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
                  <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-delete"></i></a>`
  }

  columns = [
    {
      header: 'Customer',
      accessor: 'name',
      defaultCanSort: true,
      Cell: this.customerNameRenderer,
    },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Email', accessor: 'email' },
    { header: 'Location', accessor: 'location' },
    {
      header: 'Create Date',
      accessor: 'created_on',
      defaultCanSort: true,
    },
    {
      header: 'Status',
      accessor: 'status',
      defaultCanSort: true,
      Cell: this.statusRenderer,
    },
    {
      header: 'Action',
      accessor: 'id',
      defaultCanSort: true,
      Cell: this.actionColumnRenderer,
    },
  ]
}
