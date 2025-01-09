import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-pagetitle',
  standalone: true,
  imports: [],
  template: `
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <a href="javascript: void(0);">{{ pagetitle }}</a>
              </li>
              <li class="breadcrumb-item">
                <a href="javascript: void(0);">{{ subtitle }}</a>
              </li>
              <li class="breadcrumb-item active">{{ title }}</li>
            </ol>
          </div>
          <h4 class="page-title">
            {{ title }}
            @if (button) {
              <a
                data-bs-toggle="modal"
                data-bs-target="#add-new-task-modal"
                class="btn btn-success btn-sm ms-3"
                (click)="onbuttonClick()"
                >{{ button }}</a
              >
            }
          </h4>
        </div>
      </div>
    </div>
    <!-- end page title -->
  `,
  styles: ``,
})
export class PagetitleComponent {
  @Input() title: string | undefined
  @Input() subtitle: string | undefined
  @Input() pagetitle: string | undefined
  @Input() button: string | undefined
  @Output() btnClick = new EventEmitter()

  onbuttonClick() {
    this.btnClick.emit()
  }
}
