import { Component, TemplateRef, inject } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { LeftSideComponent } from '../inbox/components/left-side.component'
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [
    PagetitleComponent,
    LeftSideComponent,
    NgbDropdownModule,
    QuillEditorComponent,
  ],
  template: `
    <app-pagetitle
      title="Email Read"
      subtitle="Email"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <!-- Right Sidebar -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- Left sidebar -->
            <app-left-side (composeModal)="openModel(compose)"></app-left-side>
            <!-- End Left sidebar -->

            <div class="page-aside-right">
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">
                  <i class="mdi mdi-archive font-16"></i>
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="mdi mdi-alert-octagon font-16"></i>
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="mdi mdi-delete-variant font-16"></i>
                </button>
              </div>
              <div ngbDropdown class="btn-group">
                <button
                  ngbDropdownToggle
                  type="button"
                  class="btn btn-secondary dropdown-toggle arrow-none ms-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-folder font-16"></i>
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div ngbDropdownMenu class="dropdown-menu">
                  <span class="dropdown-header">Move to:</span>
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Social</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Promotions</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Updates</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Forums</a
                  >
                </div>
              </div>
              <div ngbDropdown class="btn-group">
                <button
                  ngbDropdownToggle
                  type="button"
                  class="btn btn-secondary dropdown-toggle arrow-none ms-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-label font-16"></i>
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div ngbDropdownMenu class="dropdown-menu">
                  <span class="dropdown-header">Label as:</span>
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Updates</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Social</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Promotions</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Forums</a
                  >
                </div>
              </div>

              <div ngbDropdown class="btn-group">
                <button
                  ngbDropdownToggle
                  type="button"
                  class="btn btn-secondary dropdown-toggle arrow-none ms-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-dots-horizontal font-16"></i> More
                  <i class="mdi mdi-chevron-down"></i>
                </button>
                <div ngbDropdownMenu class="dropdown-menu">
                  <span class="dropdown-header">More Options :</span>
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Mark as Unread</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Add to Tasks</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);"
                    >Add Star</a
                  >
                  <a class="dropdown-item" href="javascript: void(0);">Mute</a>
                </div>
              </div>

              <div class="mt-3">
                <h5 class="font-18">
                  Your elite author Graphic Optimization reward is ready!
                </h5>

                <hr />

                <div class="d-flex mb-3 mt-1">
                  <img
                    class="d-flex me-2 rounded-circle"
                    src="assets/images/users/avatar-2.jpg"
                    alt="placeholder image"
                    height="32"
                  />
                  <div class="w-100 overflow-hidden">
                    <small class="float-end">Dec 14, 2017, 5:17 AM</small>
                    <h6 class="m-0 font-14">Steven Smith</h6>
                    <small class="text-muted"
                      >From: jonathan&#64;domain.com</small
                    >
                  </div>
                </div>

                <p>Hi Coderthemes!</p>
                <p>
                  Clicking ‘Order Service’ on the right-hand side of the above
                  page will present you with an order page. This service has the
                  following Briefing Guidelines that will need to be filled
                  before placing your order:
                </p>
                <ol>
                  <li>
                    Your design preferences (Color, style, shapes, Fonts,
                    others)
                  </li>
                  <li>Tell me, why is your item different?</li>
                  <li>
                    Do you want to bring up a specific feature of your item? If
                    yes, please tell me
                  </li>
                  <li>
                    Do you have any preference or specific thing you would like
                    to change or improve on your item page?
                  </li>
                  <li>
                    Do you want to include your item's or your provider's logo
                    on the page? if yes, please send it to me in vector format
                    (Ai or EPS)
                  </li>
                  <li>Please provide me with the copy or text to display</li>
                </ol>

                <p>
                  Filling in this form with the above information will ensure
                  that they will be able to start work quickly.
                </p>
                <p>
                  You can complete your order by putting your coupon code into
                  the Promotional code box and clicking ‘Apply Coupon’.
                </p>
                <p>
                  <b>Best,</b> <br />
                  Graphic Studio
                </p>
                <hr />

                <h5 class="mb-3">Attachments</h5>

                <div class="row">
                  <div class="col-xl-4">
                    <div class="card mb-1 shadow-none border">
                      <div class="p-2">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar-sm">
                              <span
                                class="avatar-title bg-primary-lighten text-primary rounded"
                              >
                                .ZIP
                              </span>
                            </div>
                          </div>
                          <div class="col ps-0">
                            <a
                              href="javascript:void(0);"
                              class="text-muted fw-bold"
                              >Hyper-admin-design.zip</a
                            >
                            <p class="mb-0">2.3 MB</p>
                          </div>
                          <div class="col-auto">
                            <!-- Button -->
                            <a
                              href="javascript:void(0);"
                              class="btn btn-link btn-lg text-muted"
                            >
                              <i class="ri-download-2-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-xl-4">
                    <div class="card mb-1 shadow-none border">
                      <div class="p-2">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <img
                              src="assets/images/projects/project-1.jpg"
                              class="avatar-sm rounded"
                              alt="file-image"
                            />
                          </div>
                          <div class="col ps-0">
                            <a
                              href="javascript:void(0);"
                              class="text-muted fw-bold"
                              >Dashboard-design.jpg</a
                            >
                            <p class="mb-0">3.25 MB</p>
                          </div>
                          <div class="col-auto">
                            <!-- Button -->
                            <a
                              href="javascript:void(0);"
                              class="btn btn-link btn-lg text-muted"
                            >
                              <i class="ri-download-2-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-xl-4">
                    <div class="card mb-0 shadow-none border">
                      <div class="p-2">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar-sm">
                              <span
                                class="avatar-title text-bg-secondary rounded"
                              >
                                .MP4
                              </span>
                            </div>
                          </div>
                          <div class="col ps-0">
                            <a
                              href="javascript:void(0);"
                              class="text-muted fw-bold"
                              >Admin-bug-report.mp4</a
                            >
                            <p class="mb-0">7.05 MB</p>
                          </div>
                          <div class="col-auto">
                            <!-- Button -->
                            <a
                              href="javascript:void(0);"
                              class="btn btn-link btn-lg text-muted"
                            >
                              <i class="ri-download-2-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row-->

                <div class="mt-5">
                  <a href="javascript:void(0);" class="btn btn-secondary me-2"
                    ><i class="mdi mdi-reply me-1"></i> Reply</a
                  >
                  <a href="javascript:void(0);" class="btn btn-light"
                    >Forward <i class="mdi mdi-forward ms-1"></i
                  ></a>
                </div>
              </div>
              <!-- end .mt-4 -->
            </div>
            <!-- end inbox-rightbar-->
          </div>

          <div class="clearfix"></div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end Col -->
    </div>
    <!-- End row -->

    <!-- Compose Modal -->
    <ng-template #compose let-modal id="compose-modal" class="modal fade">
      <div class="modal-header modal-colored-header bg-primary">
        <h4 class="modal-title" id="compose-header-modalLabel">New Message</h4>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="modal"
          (click)="modal.close('')"
        ></button>
      </div>
      <div class="p-1">
        <div class="modal-body px-3 pt-3 pb-0">
          <form>
            <div class="mb-2">
              <label for="msgto" class="form-label">To</label>
              <input
                type="text"
                id="msgto"
                class="form-control"
                placeholder="Example@email.com"
              />
            </div>
            <div class="mb-2">
              <label for="mailsubject" class="form-label">Subject</label>
              <input
                type="text"
                id="mailsubject"
                class="form-control"
                placeholder="Your subject"
              />
            </div>
            <div class="write-mdg-box mb-3">
              <label class="form-label">Message</label>
              <quill-editor
                #quillEditor
                theme="snow"
                [modules]="editorConfig"
                style="height: 150px"
                class="w-100"
              ></quill-editor>
            </div>
          </form>
        </div>
        <div class="px-3 pb-3">
          <button
            type="button"
            class="btn btn-primary"
            (click)="modal.close('')"
          >
            <i class="mdi mdi-send me-1"></i> Send Message
          </button>
          <button type="button" class="btn btn-light" (click)="modal.close('')">
            Cancel
          </button>
        </div>
      </div>
    </ng-template>
    <!-- /.modal -->
  `,
  styles: ``,
})
export class ReadComponent {
  private modalService = inject(NgbModal)

  openModel(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

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
