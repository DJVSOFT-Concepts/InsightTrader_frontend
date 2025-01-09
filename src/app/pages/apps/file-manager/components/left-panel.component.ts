import { Component } from '@angular/core'
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [NgbDropdownModule, NgbProgressbarModule],
  template: `
    <div ngbDropdown class="btn-group d-block mb-2">
      <button
        type="button"
        class="btn btn-success dropdown-toggle w-100"
        ngbDropdownToggle
      >
        <i class="mdi mdi-plus"></i> Create New
      </button>
      <div ngbDropdownMenu class="dropdown-menu">
        <a class="dropdown-item" href="javascript:void(0)"
          ><i class="mdi mdi-folder-plus-outline me-1"></i> Folder</a
        >
        <a class="dropdown-item" href="javascript:void(0)"
          ><i class="mdi mdi-file-plus-outline me-1"></i> File</a
        >
        <a class="dropdown-item" href="javascript:void(0)"
          ><i class="mdi mdi-file-document me-1"></i> Document</a
        >
        <a class="dropdown-item" href="javascript:void(0)"
          ><i class="mdi mdi-upload me-1"></i> Choose File</a
        >
      </div>
    </div>
    <div class="email-menu-list mt-3">
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-folder-outline font-18 align-middle me-2"></i>My
        Files</a
      >
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-google-drive font-18 align-middle me-2"></i>Google
        Drive</a
      >
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-dropbox font-18 align-middle me-2"></i>Dropbox</a
      >
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-share-variant font-18 align-middle me-2"></i>Share
        with me</a
      >
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-clock-outline font-18 align-middle me-2"></i
        >Recent</a
      >
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-star-outline font-18 align-middle me-2"></i
        >Starred</a
      >
      <a href="javascript:void(0)" class="list-group-item border-0"
        ><i class="mdi mdi-delete font-18 align-middle me-2"></i>Deleted
        Files</a
      >
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
      ></ngb-progressbar>

      <p class="text-muted font-12 mb-0 mt-2">7.02 GB (46%) of 15 GB used</p>
    </div>
  `,
  styles: ``,
})
export class LeftPanelComponent {}
