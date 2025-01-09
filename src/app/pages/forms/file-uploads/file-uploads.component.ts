import { Component } from '@angular/core'
import { FileUploaderComponent } from '@component/file-uploader'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-fileuploads',
  standalone: true,
  imports: [PagetitleComponent, FileUploaderComponent],
  template: `
    <app-pagetitle
      title="File Uploads"
      subtitle="Forms"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Dropzone File Upload</h4>
            <p class="text-muted font-14">
              DropzoneJS is an open source library that provides drag’n’drop
              file uploads with image previews.
            </p>
            <FileUploader />
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class FileuploadsComponent {}
