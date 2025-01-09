import { Component, EventEmitter, Input, Output } from '@angular/core'
import { users } from '@core/data'
import { SimplebarAngularModule } from 'simplebar-angular'
import { CommonModule } from '@angular/common'
import { ChatUser } from '@core/model/chat.model'

@Component({
  selector: 'app-chat-user',
  standalone: true,
  imports: [CommonModule, SimplebarAngularModule],
  template: `
    <div class="card">
      <div class="card-body p-0">
        <ul class="nav nav-tabs nav-bordered nav-justified">
          <li class="nav-item" (click)="filterGroup('All')">
            <a
              href="javascript:void(0);"
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link py-2"
              [ngClass]="{ active: selectTab == 'All' }"
            >
              All
            </a>
          </li>
          <li class="nav-item" (click)="filterGroup('Favourties')">
            <a
              href="javascript:void(0);"
              data-bs-toggle="tab"
              aria-expanded="true"
              class="nav-link py-2"
              [ngClass]="{ active: selectTab == 'Favourties' }"
            >
              Favorites 
            </a>
          </li>
          <li class="nav-item" (click)="filterGroup('Friends')">
            <a
              href="javascript:void(0);"
              data-bs-toggle="tab"
              aria-expanded="true"
              class="nav-link py-2"
              [ngClass]="{ active: selectTab == 'Friends' }"
            >
              Friends
            </a>
          </li>
        </ul>
        <!-- end nav-->
        <div class="tab-content">
          <div class="tab-pane show active card-body pb-0" id="newpost">
            <!-- start search box -->
            <div class="app-search">
              <form>
                <div class="mb-2 w-100 position-relative">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="People, groups & messages..."
                  />
                  <span class="mdi mdi-magnify search-icon"></span>
                </div>
              </form>
            </div>
            <!-- end search box -->
          </div>

          <!-- users -->
          <div class="row">
            <div class="col">
              <ngx-simplebar
                class="card-body py-0 mb-3"
                data-simplebar
                style="max-height: 546px"
              >
                @for (data of userList; track $index) {
                  <a
                    href="javascript:void(0);"
                    class="text-body"
                    (click)="getDetail($index)"
                  >
                    <div class="d-flex align-items-start mt-1 p-2">
                      <img
                        src="{{ data.avatar }}"
                        class="me-2 rounded-circle"
                        height="48"
                        alt="Brandon Smith"
                      />
                      <div class="w-100 overflow-hidden">
                        <h5 class="mt-0 mb-0 font-14">
                          <span class="float-end text-muted font-12">{{
                            data.lastMessageOn
                          }}</span>
                          {{ data.name }}
                        </h5>
                        <p class="mt-1 mb-0 text-muted font-14">
                          <span class="w-25 float-end text-end"
                            ><span class="badge badge-danger-lighten">{{
                              data.totalUnread
                            }}</span></span
                          >
                          <span class="w-75">{{ data.lastMessage }}</span>
                        </p>
                      </div>
                    </div>
                  </a>
                }
              </ngx-simplebar>
              <!-- end slimscroll-->
            </div>
            <!-- End col -->
          </div>
          <!-- end users -->
        </div>
        <!-- end tab content-->
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class ChatUserComponent {
  @Output() profileDetail = new EventEmitter<ChatUser>()

  userList!: ChatUser[]
  selectTab: string = 'All'

  ngOnInit(): void {
    // Fetch Data
    this.userList = users
    const data = this.userList[1]
    this.profileDetail.emit(data)
  }

  filterGroup(group: string) {
    this.selectTab = group
    if (group != 'All') {
      this.userList = users.filter(
        (user) => user.groups.toLowerCase().indexOf(group.toLowerCase()) >= 0
      )
    } else {
      this.userList = users
    }
  }

  getDetail(id: number) {
    const data = this.userList[id]
    this.profileDetail.emit(data)
  }
}
