import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { emails } from '@core/data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-mail-list',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  template: `
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
          <a class="dropdown-item" href="javascript: void(0);">Social</a>
          <a class="dropdown-item" href="javascript: void(0);">Promotions</a>
          <a class="dropdown-item" href="javascript: void(0);">Updates</a>
          <a class="dropdown-item" href="javascript: void(0);">Forums</a>
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
          <a class="dropdown-item" href="javascript: void(0);">Updates</a>
          <a class="dropdown-item" href="javascript: void(0);">Social</a>
          <a class="dropdown-item" href="javascript: void(0);">Promotions</a>
          <a class="dropdown-item" href="javascript: void(0);">Forums</a>
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
          <a class="dropdown-item" href="javascript: void(0);">Add to Tasks</a>
          <a class="dropdown-item" href="javascript: void(0);">Add Star</a>
          <a class="dropdown-item" href="javascript: void(0);">Mute</a>
        </div>
      </div>

      <div class="mt-3">
        <ul class="email-list">
          @for (data of mailList; track $index) {
            <li [ngClass]="{ unread: !data.is_read }">
              <div class="email-sender-info">
                <div class="checkbox-wrapper-mail">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="mail1"
                    />
                    <label class="form-check-label" for="mail1"></label>
                  </div>
                </div>
                <span
                  class="star-toggle mdi mdi-star-outline"
                  [class.text-warning]="data.is_important"
                ></span>
                <a href="javascript: void(0);" class="email-title">{{
                  data.from_name
                }}</a>
              </div>
              <div class="email-content">
                <a href="javascript: void(0);" class="email-subject"
                  >{{ data.subject }}
                </a>
                <div class="email-date">{{ data.time }}</div>
              </div>
              <div class="email-action-icons">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="javascript: void(0);"
                      ><i class="mdi mdi-archive email-action-icons-item"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript: void(0);"
                      ><i class="mdi mdi-delete email-action-icons-item"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript: void(0);"
                      ><i class="mdi mdi-email-open email-action-icons-item"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript: void(0);"
                      ><i class="mdi mdi-clock email-action-icons-item"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </li>
          }
        </ul>
      </div>
      <!-- end .mt-4 -->

      <div class="row">
        <div class="col-7 mt-1">Showing 1 - 20 of 289</div>
        <!-- end col-->
        <div class="col-5">
          <div class="btn-group float-end">
            <button type="button" class="btn btn-light btn-sm">
              <i class="mdi mdi-chevron-left"></i>
            </button>
            <button type="button" class="btn btn-info btn-sm">
              <i class="mdi mdi-chevron-right"></i>
            </button>
          </div>
        </div>
        <!-- end col-->
      </div>
      <!-- end row-->
    </div>
  `,
  styles: ``,
})
export class MailListComponent {
  mailList = emails

  ngOnInit(): void {}
}
