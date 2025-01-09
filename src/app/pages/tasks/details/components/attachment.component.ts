import { Component, Input } from '@angular/core'
import { FileUploaderComponent } from '@component/file-uploader'
import { AttachmentItem } from '@core/model/tasks.model'

@Component({
  selector: 'app-attachment',
  standalone: true,
  imports: [FileUploaderComponent],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-3">Attachments</h5>

        <FileUploader />

        @for (data of attachmentList; track $index) {
          <div class="card my-1 shadow-none border">
            <div class="p-2">
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
                  <a href="javascript:void(0);" class="text-muted fw-bold">{{
                    data.filename
                  }}</a>
                  <p class="mb-0">{{ data.size }}</p>
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
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class AttachmentComponent {
  @Input() attachmentList!: AttachmentItem[]
}
