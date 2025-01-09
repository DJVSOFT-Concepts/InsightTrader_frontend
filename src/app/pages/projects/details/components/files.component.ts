import { Component } from '@angular/core'

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-3">Files</h5>

        <div class="card mb-1 shadow-none border">
          <div class="p-2">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="avatar-sm">
                  <span class="avatar-title rounded"> .ZIP </span>
                </div>
              </div>
              <div class="col ps-0">
                <a href="javascript:void(0);" class="text-muted fw-bold"
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
                <a href="javascript:void(0);" class="text-muted fw-bold"
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

        <div class="card mb-0 shadow-none border">
          <div class="p-2">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="avatar-sm">
                  <span class="avatar-title text-bg-secondary rounded">
                    .MP4
                  </span>
                </div>
              </div>
              <div class="col ps-0">
                <a href="javascript:void(0);" class="text-muted fw-bold"
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
    </div>
  `,
  styles: ``,
})
export class FilesComponent {}
