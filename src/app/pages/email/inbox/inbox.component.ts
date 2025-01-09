import { Component, TemplateRef, inject } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { LeftSideComponent } from './components/left-side.component'
import { MailListComponent } from './components/mail-list.component'
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    PagetitleComponent,
    LeftSideComponent,
    MailListComponent,
    NgbModalModule,
    QuillEditorComponent,
  ],
  template: `
    <app-pagetitle
      title="Inbox"
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

            <app-mail-list></app-mail-list>
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
export class InboxComponent {
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
