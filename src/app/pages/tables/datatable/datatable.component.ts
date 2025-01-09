import { Component } from '@angular/core'
import { TableComponent } from '@component/table/table.component'
import { records } from '@core/data'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [PagetitleComponent, TableComponent],
  template: `
    <app-pagetitle
      title="Data Tables"
      subtitle="Tables"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">PAGINATION & SORT</h4>
            <p class="text-muted font-14">
              A simple example of table with pagination and column sorting
            </p>

            <app-table
              tableClass="table-striped dt-responsive nowrap w-100"
              [columns]="columns"
              [data]="dataList"
              [itemsPerPage]="5"
              [searchable]="false"
            ></app-table>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">SEARCH</h4>
            <p class="text-muted font-14">A Table allowing search</p>

            <app-table
              tableClass="table-striped dt-responsive nowrap w-100"
              [columns]="columns"
              [data]="dataList"
              [itemsPerPage]="5"
              [searchable]="true"
            ></app-table>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title"> </h4>
            <p class="text-muted font-14">
              This table allowing selection of multiple rows
            </p>

            <app-table
              tableClass="table-striped dt-responsive nowrap w-100"
              [columns]="columns"
              [data]="dataList"
              [itemsPerPage]="5"
              [searchable]="false"
              [isSelectable]="true"
            ></app-table>
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class DatatableComponent {
  dataList = records

  columns = [
    {
      header: 'ID',
      accessor: 'id',
    },
    { header: 'Name', accessor: 'name' },
    {
      header: '	Phone Number',
      accessor: 'phone',
    },
    {
      header: 'Age',
      accessor: 'age',
    },
    {
      header: 'Company',
      accessor: 'company',
    },
  ]
}
