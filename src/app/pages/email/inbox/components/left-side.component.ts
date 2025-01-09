import { Component, EventEmitter, Output } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [NgbProgressbarModule],
  template: `
    <div class="page-aside-left">
      <div class="d-grid">
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#compose-modal"
          (click)="openModel()"
        >
          Compose
        </button>
      </div>

      <div class="email-menu-list mt-3">
        <a href="javascript: void(0);" class="text-danger fw-bold"
          ><i class="ri-inbox-line me-2"></i>Inbox<span
            class="badge badge-danger-lighten float-end ms-2"
            >7</span
          ></a
        >
        <a href="javascript: void(0);"
          ><i class="ri-star-line me-2"></i>Starred</a
        >
        <a href="javascript: void(0);"
          ><i class="ri-time-line me-2"></i>Snoozed</a
        >
        <a href="javascript: void(0);"
          ><i class="ri-article-line me-2"></i>Draft<span
            class="badge badge-info-lighten float-end ms-2"
            >32</span
          ></a
        >
        <a href="javascript: void(0);"
          ><i class="ri-mail-send-line me-2"></i>Sent Mail</a
        >
        <a href="javascript: void(0);"
          ><i class="ri-delete-bin-line me-2"></i>Trash</a
        >
        <a href="javascript: void(0);"
          ><i class="ri-price-tag-3-line me-2"></i>Important</a
        >
        <a href="javascript: void(0);"
          ><i class="ri-alert-line me-2"></i>Spam</a
        >
      </div>

      <div class="mt-4">
        <h6 class="text-uppercase">Labels</h6>
        <div class="email-menu-list labels-list mt-2">
          <a href="javascript: void(0);"
            ><i class="mdi mdi-circle font-13 text-info me-2"></i>Updates</a
          >
          <a href="javascript: void(0);"
            ><i class="mdi mdi-circle font-13 text-warning me-2"></i>Friends</a
          >
          <a href="javascript: void(0);"
            ><i class="mdi mdi-circle font-13 text-success me-2"></i>Family</a
          >
          <a href="javascript: void(0);"
            ><i class="mdi mdi-circle font-13 text-primary me-2"></i>Social</a
          >
          <a href="javascript: void(0);"
            ><i class="mdi mdi-circle font-13 text-danger me-2"></i>Important</a
          >
          <a href="javascript: void(0);"
            ><i class="mdi mdi-circle font-13 text-secondary me-2"></i
            >Promotions</a
          >
        </div>
      </div>

      <div class="mt-5">
        <h4>
          <span class="badge rounded-pill p-1 px-2 badge-secondary-lighten"
            >FREE</span
          >
        </h4>
        <h6 class="text-uppercase mt-3">Storage</h6>
        <ngb-progressbar
          [value]="46"
          type="success"
          [height]="'5px'"
          class="mb-2"
        ></ngb-progressbar>

        <p class="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class LeftSideComponent {
  @Output() composeModal = new EventEmitter()

  openModel() {
    this.composeModal.emit()
  }
}
