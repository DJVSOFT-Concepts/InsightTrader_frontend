import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Column, TableInstance } from './table.model'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgbRatingModule, FormsModule, NgApexchartsModule],
  template: ` @if (searchable) {
      <div class="d-lg-flex align-items-center text-center pb-1 mb-1">
        <div class="d-inline-block me-3">
          <label class="me-1">Display</label>
          <select
            [(ngModel)]="pageSize"
            (change)="PageChange()"
            class="form-select form-select-sm ms-1 me-1 d-inline-block w-auto"
          >
            <option [ngValue]="5">5</option>
            <option [ngValue]="10">10</option>
            <option [ngValue]="20">20</option>
            <option [ngValue]="-1">All</option>
          </select>
          products
        </div>

        <div class="d-inline-flex ms-auto align-item-center">
          <label class="me-1 align-self-center">Search:</label>
          <input
            type="search"
            [(ngModel)]="searchQuery"
            (ngModelChange)="searchTerm()"
            class="form-control d-inline-block w-auto"
            placeholder=""
            aria-controls="products-datatable"
          />
        </div>
      </div>
    }

    <div class="table-responsive">
      <table class="table table-centered" [ngClass]="tableClass">
        <thead [ngClass]="theadClass">
          <tr>
            @if (isSelectable) {
              <th class="all" style="width: 20px">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck1"
                    [(ngModel)]="masterSelected"
                    (change)="checkUncheckAll($event)"
                  />
                  <label class="form-check-label" for="checkAll">&nbsp;</label>
                </div>
              </th>
            }
            @for (column of tableInstance.columns; track $index) {
              <th
                (click)="handleSort(column.accessor)"
                style="cursor: pointer;"
              >
                {{ column.header }}
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (item of filteredData; track $index) {
            <tr>
              <td *ngIf="isSelectable">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck2"
                    [(ngModel)]="item.states"
                  />
                  <label class="form-check-label" for="customCheck2"
                    >&nbsp;</label
                  >
                </div>
              </td>
              @for (column of columns; track $index) {
                <td>
                  @if (column.Cell) {
                    <div
                      [innerHTML]="sanitizeHtml(column.Cell({ row: item }))"
                    ></div>
                  } @else if (column.type == 'chart') {
                    <apx-chart
                      [chart]="item.chart.chart!"
                      [series]="item.chart.series!"
                      [stroke]="item.chart.stroke!"
                      [markers]="item.chart.markers!"
                      [colors]="item.chart.colors!"
                      [tooltip]="item.chart.tooltip!"
                      class="d-block apex-table-chart"
                    ></apx-chart>
                  } @else {
                    {{ item[column.accessor] }}
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>

      @if (pagination) {
        <div class="d-lg-flex align-items-center text-center pb-1">
          <div class="d-inline-block me-3 mb-0">
            <p class="text-gray-600 dark:text-gray-100">
              Showing {{ startIndex + 1 }} to {{ endIndex }} of
              {{ tableInstance.data.length }} entries
            </p>
          </div>

          <ul class="pagination pagination-rounded d-inline-flex ms-auto mb-0">
            <li
              (click)="changePage(activePage - 1)"
              class="page-item paginate_button previous"
            >
              <a href="javascript:void(0);" class="page-link"
                ><i class="mdi mdi-chevron-left"></i
              ></a>
            </li>
            @for (page of generatePageNumbers(totalPages); track $index) {
              <li class="page-item" [ngClass]="{ active: activePage === page }">
                <a
                  href="javascript:void(0);"
                  class="page-link"
                  (click)="changePage(page)"
                  >{{ page }}</a
                >
              </li>
            }
            <li
              (click)="changePage(activePage + 1)"
              class="page-item paginate_button next"
            >
              <a href="javascript:void(0);" class="page-link"
                ><i class="mdi mdi-chevron-right"></i
              ></a>
            </li>
          </ul>
        </div>
      }
    </div>`,
})
export class TableComponent<T> implements OnInit {
  @Input() tableClass!: string
  @Input() theadClass!: string
  @Input() isSelectable!: boolean
  @Input() columns: Column<T>[] = []
  @Input() data: T[] = []
  @Input() itemsPerPage!: number // Default page size options
  @Input() searchable: boolean = true
  @Input() pagination: boolean = true

  sortConfig = { key: '', direction: '' }
  activePage = 1
  startIndex: number = 1
  endIndex: number = this.itemsPerPage
  pageSize!: number
  searchQuery = ''
  totalPages: number = 0

  paginatedData: any[] = []
  sortedData: any[] = []
  filteredData: any[] = []
  masterSelected!: boolean

  tableInstance!: TableInstance<T>

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.pageSize = this.itemsPerPage
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage)
    // Initialize table instance
    this.tableInstance = {
      columns: this.columns,
      data: this.data,
    }

    this.updateTable()
  }

  // Use this method to sanitize and set the HTML
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

  isAccessorFunction(accessor: string): boolean {
    return typeof accessor === 'function'
  }

  PageChange() {
    if (this.pageSize != -1) {
      this.itemsPerPage = this.pageSize
    } else {
      this.itemsPerPage = this.tableInstance.data.length
    }
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage)
    this.updateTable()
  }

  changePage(page: number): void {
    this.activePage = page
    this.updateTable()
  }

  generatePageNumbers(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  handleSort(key: string) {
    let direction = 'ascending'
    if (
      this.sortConfig.key === key &&
      this.sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    this.sortConfig = { key: key, direction: direction }
    this.updateTable()
  }

  updateTable() {
    this.startIndex = (this.activePage - 1) * this.itemsPerPage
    this.endIndex = this.startIndex + this.itemsPerPage
    this.paginatedData = this.data.slice(this.startIndex, this.endIndex)

    if (!this.sortConfig.key) {
      this.sortedData = this.paginatedData
    } else {
      const sortedArray = [...this.paginatedData]
      sortedArray.sort((a, b) => {
        const key = this.sortConfig.key // Store the key in a variable
        if (key) {
          if (a[key] < b[key]) {
            return this.sortConfig.direction === 'ascending' ? -1 : 1
          }
          if (a[key] > b[key]) {
            return this.sortConfig.direction === 'ascending' ? 1 : -1
          }
        }
        return 0
      })

      this.sortedData = sortedArray
    }

    this.filteredData = this.sortedData
  }

  searchTerm() {
    if (this.searchQuery) {
      this.filteredData = this.sortedData.filter((item) =>
        Object.values(item).some((value: any) =>
          value
            .toString()
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        )
      )
    } else {
      this.filteredData = this.sortedData
    }
  }

  // Multiple Select
  checkedValGet: number[] = []
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: Event): void {
    this.filteredData = this.filteredData.map((x: { states: any }) => ({
      ...x,
      states: (ev.target as HTMLInputElement).checked,
    }))
  }
}
