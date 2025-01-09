import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PagetitleComponent, NgbPaginationModule],
  template: `
    <app-pagetitle
      title="Pagination"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Default Pagination</h4>
            <p class="text-muted font-14">
              Simple pagination inspired by Rdio, great for apps and search
              results.
            </p>

            <!-- end nav-->
            <ngb-pagination [collectionSize]="50" class="pagination mb-0">
            </ngb-pagination>
            <!-- end tab-content-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Disabled and active states</h4>
            <p class="text-muted font-14">
              Pagination links are customizable for different circumstances. Use
              <code>.disabled</code> for links that appear un-clickable and
              <code>.active</code> to indicate the current page.
            </p>

            <ngb-pagination
              [collectionSize]="30"
              [disabled]="isDisabled"
              aria-label="..."
              class="pagination mb-0"
            >
              <ng-template ngbPaginationPrevious>Previous</ng-template>
              <ng-template ngbPaginationNext>Next</ng-template>
            </ngb-pagination>
            <!-- end tab-content-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Alignment</h4>
            <p class="text-muted font-14">
              Change the alignment of pagination components with flexbox
              utilities.
            </p>

            <ngb-pagination
              [collectionSize]="30"
              class="pagination justify-content-center"
            >
              <ng-template ngbPaginationPrevious>Previous</ng-template>
              <ng-template ngbPaginationNext>Next</ng-template>
            </ngb-pagination>
            <!-- </ngb-pagination> -->

            <ngb-pagination
              [collectionSize]="30"
              class="pagination justify-content-end"
            >
              <ng-template ngbPaginationPrevious>Previous</ng-template>
              <ng-template ngbPaginationNext>Next</ng-template>
            </ngb-pagination>
            <!-- end tab-content-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Rounded Pagination</h4>
            <p class="text-muted font-14">
              Add <code> .pagination-rounded</code> for rounded pagination.
            </p>

            <!-- end nav-->

            <!-- <ngb-pagination [collectionSize]="30"> -->
            <ngb-pagination
              [collectionSize]="50"
              class="pagination pagination-rounded mb-0"
            >
            </ngb-pagination>
            <!-- </ngb-pagination> -->
            <!-- end tab-content-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Sizing</h4>
            <p class="text-muted font-14">
              Add <code> .pagination-lg</code> or
              <code> .pagination-sm</code> for additional sizes.
            </p>

            <ngb-pagination [collectionSize]="30" size="lg"> </ngb-pagination>

            <ngb-pagination [collectionSize]="30" size="sm"> </ngb-pagination>
          </div>

          <!-- end preview code-->
        </div>
        <!-- end tab-content-->
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class PaginationComponent {
  isDisabled = true
}
