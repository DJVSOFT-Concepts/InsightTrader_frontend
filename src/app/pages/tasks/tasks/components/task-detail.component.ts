import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ListTaskItem } from '@core/model/tasks.model'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [
    NgbDropdownModule,
    QuillEditorComponent,
    FormsModule,
    NgbTooltipModule,
  ],
  template: `
    <div class="card">
      <div class="card-body">
        <div ngbDropdown class="dropdown card-widgets">
          <a
            ngbDropdownToggle
            class="dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="uil uil-ellipsis-h"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="uil uil-file-upload me-1"></i>Attachment
            </a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="uil uil-edit me-1"></i>Edit
            </a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="uil uil-file-copy-alt me-1"></i>Mark as Duplicate
            </a>
            <div class="dropdown-divider"></div>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item text-danger">
              <i class="uil uil-trash-alt me-1"></i>Delete
            </a>
          </div>
          <!-- end dropdown menu-->
        </div>
        <!-- end dropdown-->

        <div class="form-check float-start">
          <input type="checkbox" class="form-check-input" id="completedCheck" />
          <label class="form-check-label" for="completedCheck">
            Mark as completed
          </label>
        </div>
        <!-- end form-check-->

        <hr class="mt-4 mb-2" />

        <div class="row">
          <div class="col">
            <h4>{{ task.title }}</h4>

            <div class="row">
              <div class="col-6">
                <!-- assignee -->
                <p class="mt-2 mb-1 text-muted">Assigned To</p>
                <div class="d-flex">
                  <img
                    src="{{ task.assignee_avatar }}"
                    alt="Arya S"
                    class="rounded-circle me-2"
                    height="24"
                  />
                  <div>
                    <h5 class="mt-1 font-14">{{ task.assigned_to }}</h5>
                  </div>
                </div>
                <!-- end assignee -->
              </div>
              <!-- end col -->

              <div class="col-6">
                <!-- start due date -->
                <p class="mt-2 mb-1 text-muted">Due Date</p>
                <div class="d-flex">
                  <i class="uil uil-schedule font-18 text-success me-1"></i>
                  <div>
                    <h5 class="mt-1 font-14">{{ task.due_date }}</h5>
                  </div>
                </div>
                <!-- end due date -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <!-- task description -->
            <div class="row mt-3">
              <div class="col">
                <quill-editor
                  [(ngModel)]="content"
                  theme="bubble"
                  [modules]="editorConfig"
                  style="height: 130px"
                  class="w-100"
                ></quill-editor>
                <!-- <div id="bubble-editor" style="height: 130px">
                    <h3>This is an simple editable area.</h3>
                    <p><br /></p>
                    <ul>
                      <li>Select a text to reveal the toolbar.</li>
                      <li>Edit rich document on-the-fly, so elastic!</li>
                    </ul>
                    <p>End of simple area</p>
                    <p><br /></p>
                  </div> -->
                <!-- end Snow-editor-->
                <!-- </div> -->
              </div>
              <!-- end col -->
            </div>
            <!-- end task description -->

            <!-- start sub tasks/checklists -->
            <h5 class="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>
            @for (checkdata of task.checklists; track $index) {
              <div class="form-check mt-1">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checklist1"
                />
                <label class="form-check-label strikethrough" for="checklist1">
                  {{ checkdata.title }}
                </label>
              </div>
            }
            <!-- end sub tasks/checklists -->

            <!-- start attachments -->
            <h5 class="mt-4 mb-2 font-16">Attachments</h5>
            @for (data of task.attachments; track $index) {
              <div class="card mb-2 shadow-none border">
                <div class="p-1">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      @if (data.logo) {
                        <div class="avatar-sm">
                          <span class="avatar-title rounded">
                            {{ data.logo }}
                          </span>
                        </div>
                      } @else {
                        <img
                          src="{{ data.projectImg }}"
                          class="avatar-sm rounded"
                          alt="file-image"
                        />
                      }
                    </div>
                    <div class="col ps-0">
                      <a
                        href="javascript:void(0);"
                        class="text-muted fw-bold"
                        >{{ data.filename }}</a
                      >
                      <p class="mb-0">{{ data.size }}</p>
                    </div>
                    <div class="col-auto" id="tooltip-container9">
                      <!-- Button -->
                      <a
                        href="javascript:void(0);"
                        data-bs-container="#tooltip-container9"
                        data-bs-toggle="tooltip"
                        placement="bottom"
                        ngbTooltip="Download"
                        class="btn btn-link text-muted btn-lg p-0"
                      >
                        <i class="uil uil-cloud-download"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-container="#tooltip-container9"
                        data-bs-toggle="tooltip"
                        placement="bottom"
                        ngbTooltip="Delete"
                        class="btn btn-link text-danger btn-lg p-0"
                      >
                        <i class="uil uil-multiply"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
            <!-- end attachments -->

            <!-- comments -->
            <div class="row mt-3">
              <div class="col">
                <h5 class="mb-2 font-16">Comments</h5>

                @for (data of task.comments; track $index) {
                  <div class="d-flex mt-3 p-1">
                    <img
                      src="{{ data.author_avatar }}"
                      class="me-2 rounded-circle"
                      height="36"
                      alt="Arya Stark"
                    />
                    <div class="w-100">
                      <h5 class="mt-0 mb-0">
                        <span class="float-end text-muted font-12">{{
                          data.posted_on
                        }}</span>
                        {{ data.author }}
                      </h5>
                      <p class="mt-1 mb-0 text-muted">
                        {{ data.text }}
                      </p>
                    </div>
                  </div>
                  <!-- end comment -->

                  <hr />
                }
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row mt-2">
              <div class="col">
                <div class="border rounded">
                  <form action="#" class="comment-area-box">
                    <textarea
                      rows="3"
                      class="form-control border-0 resize-none"
                      placeholder="Your comment..."
                    ></textarea>
                    <div class="p-2 bg-light">
                      <div class="float-end">
                        <button type="submit" class="btn btn-sm btn-success">
                          <i class="uil uil-message me-1"></i>Submit
                        </button>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-sm px-1 btn-light"
                          ><i class="uil uil-cloud-upload"></i
                        ></a>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-sm px-1 btn-light"
                          ><i class="uil uil-at"></i
                        ></a>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- end .border-->
              </div>
              <!-- end col-->
            </div>
            <!-- end row-->
            <!-- end comments -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row-->
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class TaskDetailComponent {
  @Input() task!: ListTaskItem

  content: string = `    <div class="border rounded">
  <div id="bubble-editor" style="height: 130px;">
      <h3>This is an simple editable area.</h3>
      <p><br></p>
      <ul>
          <li>
              Select a text to reveal the toolbar.
          </li>
          <li>
              Edit rich document on-the-fly, so elastic!
          </li>
      </ul>
      <p><br></p>
      <p>
          End of simple area
      </p>
  </div> <!-- end Snow-editor-->
</div>`

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image', 'video'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['clean'],
    ],
  }
}
