import { Component } from '@angular/core'
import { ChatUser } from '@core/model/chat.model'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { ChatAreaComponent } from './components/chat-area.component'
import { ChatUserComponent } from './components/chat-user.component'
import { UserDetailComponent } from './components/user-detail.component'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    PagetitleComponent,
    ChatUserComponent,
    ChatAreaComponent,
    UserDetailComponent,
  ],
  template: ` <app-pagetitle
      title="Chat"
      subtitle="Apps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <!-- start chat users-->
      <div class="col-xxl-3 col-xl-6 order-xl-1">
        <app-chat-user
          (profileDetail)="receiveDataFromChild($event)"
        ></app-chat-user>
      </div>
      <!-- end chat users-->

      <!-- chat area -->
      <div class="col-xxl-6 col-xl-12 order-xl-2">
        <app-chat-area [selectedUser]="profileDetail"></app-chat-area>
      </div>
      <!-- end chat area-->

      <!-- start user detail -->
      <div class="col-xxl-3 col-xl-6 order-xl-1 order-xxl-2">
        <app-user-detail [profileDetail]="profileDetail"></app-user-detail>
      </div>
      <!-- end col -->
      <!-- end user detail -->
    </div>
    <!-- end row-->`,
  styles: ``,
})
export class ChatComponent {
  profileDetail!: ChatUser

  receiveDataFromChild(data: ChatUser) {
    this.profileDetail = data
  }
}
