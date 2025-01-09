  import { Component, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { Editor, NgxEditorModule, TOOLBAR_FULL } from 'ngx-editor'
import { QuillEditorComponent } from 'ngx-quill'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-editors',
  standalone: true,
  imports: [
    PagetitleComponent,
    FormsModule,
    QuillEditorComponent,
    NgxEditorModule,
    CKEditorModule,
  ],
  template: `
    <app-pagetitle
      title="Editors"
      subtitle="Forms"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="mb-2">
                <h4 class="header-title mt-2">Quill Editor</h4>
                <p class="text-muted font-14">
                  Snow is a clean, flat toolbar theme.
                </p>

                <quill-editor
                  #quillEditor
                  [(ngModel)]="content"
                  theme="snow"
                  [modules]="editorConfig"
                  style="height: 300px"
                  class="w-100"
                ></quill-editor>

                <!-- end Snow-editor-->
              </div>
            </li>

            <li class="list-group-item">
              <div class="mb-2">
                <h5 class="mb-1">Bubble Editor</h5>
                <p class="text-muted font-14">
                  Bubble is a simple tooltip based theme.
                </p>
                <quill-editor
                  [(ngModel)]="content"
                  theme="bubble"
                  [modules]="editorConfig"
                  style="height: 300px"
                  class="w-100"
                ></quill-editor>
                <!-- end Bubble-editor-->
              </div>
            </li>
          </ul>
          <!-- end list-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Ngx Editor</h4>
            <p class="text-muted font-14">
              The Rich Text Editor for Angular, Built on ProseMirror
            </p>
            <ngx-editor-menu
              [editor]="editor"
              [toolbar]="toolbar"
              style="height: 245px"
            >
            </ngx-editor-menu>
            <ngx-editor
              [editor]="editor"
              [ngModel]="content"
              [disabled]="false"
              [placeholder]="'Type here...'"
            ></ngx-editor>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Ckeditor Classic Editor</h4>
            <p class="text-muted font-14">
              Use <code>ckeditor-classic</code> package to set ckeditor classic
              editor.
            </p>
            <ckeditor
              [editor]="Editor"
              [(ngModel)]="model.editorData"
            ></ckeditor>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class EditorsComponent {
  editor!: Editor
  toolbar = TOOLBAR_FULL
  public Editor = ClassicEditor

  ngOnInit(): void {
    this.editor = new Editor()
  }

  content: string = ` <div id="snow-editor" style="height: 300px">
  <h3><span class="ql-size-large">Hello World!</span></h3>
  <p><br /></p>
  <h3>This is an simple editable area.</h3>
  <p><br /></p>
  <ul>
    <li>Select a text to reveal the toolbar.</li>
    <li>Edit rich document on-the-fly, so elastic!</li>
  </ul>
  <p><br /></p>
  <p>End of simple area</p>
</div>`

  public model = {
    editorData: this.content,
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
