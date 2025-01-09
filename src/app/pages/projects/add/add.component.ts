import { Component } from '@angular/core'
import { FileUploaderComponent } from '@component/file-uploader'
import {
  NgbDatepickerModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    PagetitleComponent,
    NgbTooltipModule,
    NgbDatepickerModule,
    FileUploaderComponent,
  ],
  template: `
    <app-pagetitle
      title="Create Project"
      subtitle="Projects"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-6">
                <div class="mb-3">
                  <label for="projectname" class="form-label">Name</label>
                  <input
                    type="text"
                    id="projectname"
                    class="form-control"
                    placeholder="Enter project name"
                  />
                </div>

                <div class="mb-3">
                  <label for="project-overview" class="form-label"
                    >Overview</label
                  >
                  <textarea
                    class="form-control"
                    id="project-overview"
                    rows="5"
                    placeholder="Enter some brief about project.."
                  ></textarea>
                </div>

                <!-- Date View -->
                <div class="mb-3 position-relative" id="datepicker1">
                  <label class="form-label">Start Date</label>
                  <input
                    type="text"
                    class="form-control"
                    data-provide="datepicker"
                    data-date-container="#datepicker1"
                    data-date-format="d-M-yyyy"
                    data-date-autoclose="true"
                  />
                </div>

                <div class="mb-3">
                  <label for="project-budget" class="form-label">Budget</label>
                  <input
                    type="text"
                    id="project-budget"
                    class="form-control"
                    placeholder="Enter project budget"
                  />
                </div>

                <div class="mb-0">
                  <label for="project-overview" class="form-label"
                    >Team Members</label
                  >

                  <select class="form-control select2" data-toggle="select2">
                    <option>Select</option>
                    <option value="AZ">Mary Scott</option>
                    <option value="CO">Holly Campbell</option>
                    <option value="ID">Beatrice Mills</option>
                    <option value="MT">Melinda Gills</option>
                    <option value="NE">Linda Garza</option>
                    <option value="NM">Randy Ortez</option>
                    <option value="ND">Lorene Block</option>
                    <option value="UT">Mike Baker</option>
                  </select>

                  <div id="tooltip-container" class="w-100">
                    <h5>Team Members:</h5>
                    <a
                      href="javascript:void(0);"
                      placement="top"
                      ngbTooltip="Mat Helme"
                      data-bs-container="#tooltip-container"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      class="d-inline-block"
                      aria-label="Mat Helme"
                      data-bs-original-title="Mat Helme"
                    >
                      <img
                        src="assets/images/users/avatar-6.jpg"
                        class="rounded-circle img-thumbnail avatar-sm"
                        alt="friend"
                      />
                    </a>

                    <a
                      href="javascript:void(0);"
                      placement="top"
                      ngbTooltip="Michael Zenaty"
                      data-bs-container="#tooltip-container"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      class="d-inline-block"
                      aria-label="Michael Zenaty"
                      data-bs-original-title="Michael Zenaty"
                    >
                      <img
                        src="assets/images/users/avatar-7.jpg"
                        class="rounded-circle img-thumbnail avatar-sm"
                        alt="friend"
                      />
                    </a>

                    <a
                      href="javascript:void(0);"
                      placement="top"
                      ngbTooltip="James Anderson"
                      data-bs-container="#tooltip-container"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      class="d-inline-block"
                      aria-label="James Anderson"
                      data-bs-original-title="James Anderson"
                    >
                      <img
                        src="assets/images/users/avatar-8.jpg"
                        class="rounded-circle img-thumbnail avatar-sm"
                        alt="friend"
                      />
                    </a>

                    <a
                      href="javascript:void(0);"
                      placement="top"
                      ngbTooltip="Mat Helme"
                      data-bs-container="#tooltip-container"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      class="d-inline-block"
                      aria-label="Mat Helme"
                      data-bs-original-title="Mat Helme"
                    >
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        class="rounded-circle img-thumbnail avatar-sm"
                        alt="friend"
                      />
                    </a>

                    <a
                      href="javascript:void(0);"
                      placement="top"
                      ngbTooltip="Michael Zenaty"
                      data-bs-container="#tooltip-container"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      class="d-inline-block"
                      aria-label="Michael Zenaty"
                      data-bs-original-title="Michael Zenaty"
                    >
                      <img
                        src="assets/images/users/avatar-5.jpg"
                        class="rounded-circle img-thumbnail avatar-sm"
                        alt="friend"
                      />
                    </a>

                    <a
                      href="javascript:void(0);"
                      placement="top"
                      ngbTooltip="Mike Baker"
                      data-bs-container="#tooltip-container"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      class="d-inline-block"
                      aria-label="James Anderson"
                      data-bs-original-title="James Anderson"
                    >
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        class="rounded-circle img-thumbnail avatar-sm"
                        alt="friend"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="mb-3 mt-3 mt-xl-0">
                  <label for="projectname" class="mb-0">Avatar</label>
                  <p class="text-muted font-14">
                    Recommended thumbnail size 800x400 (px).
                  </p>

                  <FileUploader />
                </div>

                <!-- Date View -->
                <div class="mb-3 position-relative" id="datepicker2">
                  <label class="form-label">Due Date</label>
                  <input
                    type="text"
                    class="form-control"
                    ngbDatepicker
                    #d="ngbDatepicker"
                    (click)="d.toggle()"
                  />
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
  `,
  styles: ``,
})
export class AddComponent {}
