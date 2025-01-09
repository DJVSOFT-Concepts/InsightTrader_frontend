import { Component, inject } from '@angular/core'
import { TableComponent } from '@component/table/table.component'
import { CellFormatter } from '@component/table/table.model'
import { Seller } from '@core/model/ecommerce.model'
import { Store } from '@ngrx/store'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { fetchEcommerceSeller } from '@store/ecommerce/ecommerce.actions'
import { getSellers } from '@store/ecommerce/ecommerce.selector'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [PagetitleComponent, TableComponent, NgApexchartsModule],
  template: `
    <app-pagetitle
      title="Sellers"
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
                  ><i class="mdi mdi-plus-circle me-2"></i> Add Sellers</a
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
              [data]="sellerList"
              [itemsPerPage]="10"
              tableClass="table-borderless table-hover w-100 dt-responsive nowrap"
              theadClass="table-light"
            ></app-table>
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
export class SellersComponent {
  sellerList!: Seller[]

  private stote = inject(Store)

  ngOnInit(): void {
    this.stote.dispatch(fetchEcommerceSeller())
    this.stote.select(getSellers).subscribe((data) => {
      this.sellerList = data
    })
  }

  sellerNameRenderer({ row }: CellFormatter<any>) {
    return `
    <div class="table-user">
    <img src="${row.image}" alt="table-user" class="me-2 rounded-circle">
    <a href="javascript:void(0);" class="text-body fw-semibold">${row.name}</a>
    </div>
    `
  }

  actionColumnRenderer() {
    // Your custom rendering logic for the action column
    return `   <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
                  <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-delete"></i></a>`
  }

  columns = [
    {
      header: 'Seller',
      accessor: 'name',
      defaultCanSort: true,
      Cell: this.sellerNameRenderer,
    },
    { header: 'Store Name', accessor: 'store' },
    { header: 'Products', accessor: 'products' },
    { header: 'Wallet Balance', accessor: 'balance' },
    {
      header: 'Create Date',
      accessor: 'created_on',
      defaultCanSort: true,
    },
    {
      header: 'Revenue',
      accessor: 'chart',
      defaultCanSort: true,
      type: 'chart',
    },
    {
      header: 'Action',
      accessor: 'id',
      defaultCanSort: true,
      Cell: this.actionColumnRenderer,
    },
  ]
}
