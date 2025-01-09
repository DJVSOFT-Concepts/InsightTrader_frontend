import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { LeftPanelComponent } from './components/left-panel.component'
import { QuickAccessComponent } from './components/quick-access.component'
import { RecentComponent } from './components/recent.component'

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [
    PagetitleComponent,
    LeftPanelComponent,
    QuickAccessComponent,
    RecentComponent,
  ],
  template: `
    <app-pagetitle
      title="File Manager"
      subtitle="Apps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <!-- Right Sidebar -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- Left sidebar -->
            <div class="page-aside-left">
              <app-left-panel></app-left-panel>
            </div>
            <!-- End Left sidebar -->

            <div class="page-aside-right">
              <div class="d-lg-flex justify-content-between align-items-center">
                <div class="app-search">
                  <form>
                    <div class="mb-2 position-relative">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search files..."
                      />
                      <span class="mdi mdi-magnify search-icon"></span>
                    </div>
                  </form>
                </div>
                <div>
                  <button type="submit" class="btn btn-sm btn-light">
                    <i class="mdi mdi-format-list-bulleted"></i>
                  </button>
                  <button type="submit" class="btn btn-sm">
                    <i class="mdi mdi-view-grid"></i>
                  </button>
                  <button type="submit" class="btn btn-sm">
                    <i class="mdi mdi-information-outline"></i>
                  </button>
                </div>
              </div>

              <div class="mt-3">
                <h5 class="mb-2">Quick Access</h5>
                <app-quick-access></app-quick-access>
              </div>
              <!-- end .mt-3-->

              <div class="mt-3">
                <h5 class="mb-3">Recent</h5>

                <app-recent></app-recent>
              </div>
              <!-- end .mt-3-->
            </div>
            <!-- end inbox-rightbar-->
          </div>
          <!-- end card-body -->
          <div class="clearfix"></div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end Col -->
    </div>
    <!-- End row -->
  `,
  styles: ``,
})
export class FileManagerComponent {}
