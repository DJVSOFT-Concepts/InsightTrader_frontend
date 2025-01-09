import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TableComponent } from '@component/table/table.component'
import { CellFormatter } from '@component/table/table.model'
import { product } from '@core/model/ecommerce.model'
import {
  NgbPaginationModule,
  NgbRatingConfig,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { fetchEcommerceProduct } from '@store/ecommerce/ecommerce.actions'
import { getproducts } from '@store/ecommerce/ecommerce.selector'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    PagetitleComponent,
    NgbRatingModule,
    NgbPaginationModule,
    TableComponent,
    RouterModule,
  ],
  template: ` <app-pagetitle
      title="Products"
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
                  ><i class="mdi mdi-plus-circle me-2"></i> Add Products</a
                >
              </div>
              <div class="col-sm-7">
                <div class="text-sm-end">
                  <button type="button" class="btn btn-success mb-2 me-1">
                    <i class="mdi mdi-cog-outline"></i>
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
              tableClass="w-100 dt-responsive nowrap"
              [columns]="columns"
              [data]="productList"
              [itemsPerPage]="5"
              theadClass="table-light"
              [isSelectable]="true"
            ></app-table>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->`,
  styles: ``,
})
export class ProductsComponent {
  productList!: product[]
  page = 1

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5
    config.readonly = true
  }
  private store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(fetchEcommerceProduct())
    this.store.select(getproducts).subscribe((data) => {
      this.productList = data
    })
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`
  }

  productColumnRenderer({ row }: CellFormatter<any>) {
    return `
    <img src="${row.image}" alt="contact-img" title="contact-img" class="rounded me-3" height="48" />
    <p class="m-0 d-inline-block align-middle font-16">
      <a routerLink="/apps-ecommerce-products-details" class="text-body">${row.name}</a><br />
      <ngb-rating [rate]="3" />
      <ngb-rating [(rate)]="${row.rating}" [max]="5" class="text-warning" [style.width.%]="${row.rating}" [readonly]="true"></ngb-rating>
    </p>`
  }

  statusColumnRenderer({ row }: CellFormatter<any>) {
    return `<span class="badge ${row.status ? 'bg-success' : 'bg-danger'}">${
      row.status ? 'Active' : 'Deactivated'
    }</span>`
  }

  actionColumnRenderer() {
    // Your custom rendering logic for the action column
    return `<a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-eye"></i></a>
                  <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
                  <a href="javascript:void(0);" class="action-icon"><i class="mdi mdi-delete"></i></a>`
  }

  columns = [
    {
      header: 'Product',
      accessor: 'name',
      defaultCanSort: true,
      Cell: this.productColumnRenderer,
    },
    { header: 'Category', accessor: 'category' },
    { header: 'Added Date', accessor: 'added_date' },
    { header: 'Price', accessor: 'price' },
    { header: 'Quantity', accessor: 'quantity' },
    {
      header: 'Status',
      accessor: 'status',
      defaultCanSort: true,
      Cell: this.statusColumnRenderer,
    },
    {
      header: 'Action',
      accessor: 'id',
      defaultCanSort: true,
      Cell: this.actionColumnRenderer,
    },
    // Add more columns as needed
  ]
}
