import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { SimplebarAngularModule } from 'simplebar-angular'

import { GanttProjectComponent } from './components/gantt-project.component'
import { GanttTaskComponent } from './components/gantt-task.component'

@Component({
  selector: 'app-gantt',
  standalone: true,
  imports: [
    PagetitleComponent,
    SimplebarAngularModule,
    GanttProjectComponent,
    GanttTaskComponent,
  ],
  template: `
    <app-pagetitle
      title="Gantt"
      subtitle="Projects"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="card">
      <div class="card-body">
        <div class="row">
          <!-- start projects-->
          <div class="col-xxl-3 col-lg-4">
            <div class="pe-xl-3">
              <h5 class="mt-0 mb-3">Projects</h5>
              <!-- start search box -->
              <div class="app-search">
                <form>
                  <div class="mb-2 position-relative w-100">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="search by name..."
                    />
                    <span class="mdi mdi-magnify search-icon"></span>
                  </div>
                </form>
              </div>
              <!-- end search box -->
            </div>

            <div class="row">
              <div class="col">
                <app-gantt-project></app-gantt-project>
              </div>
            </div>
          </div>
          <!-- end projects -->

          <!-- gantt view -->
          <div class="col-xxl-9 mt-4 mt-xl-0 col-lg-8">
            <div class="ps-xl-3">
              <app-gantt-task></app-gantt-task>
              <div class="row">
                <div class="col mt-3">
                  <svg id="tasks-gantt"></svg>
                </div>
              </div>
            </div>
          </div>
          <!-- end gantt view -->
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class GanttComponent {}
