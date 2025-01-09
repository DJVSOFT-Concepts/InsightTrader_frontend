import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'

@Component({
  selector: 'app-chatlist',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Chat"
        [menuItems]="[{ label: 'Settings' }, { label: 'Action' }]"
      ></card-title>

      <div class="chat-conversation">
        <div class="card-body py-0 mb-3" data-simplebar style="height: 322px">
          <ul class="conversation-list">
            <li class="clearfix">
              <div class="chat-avatar">
                <img src="assets/images/users/avatar-5.jpg" alt="male" />
                <i>10:00</i>
              </div>
              <div class="conversation-text">
                <div class="ctext-wrap">
                  <i>Geneva</i>
                  <p>Hello!</p>
                </div>
              </div>
            </li>
            <li class="clearfix odd">
              <div class="chat-avatar">
                <img src="assets/images/users/avatar-1.jpg" alt="Female" />
                <i>10:01</i>
              </div>
              <div class="conversation-text">
                <div class="ctext-wrap">
                  <i>Dominic</i>
                  <p>Hi, How are you? What about our next meeting?</p>
                </div>
              </div>
            </li>
            <li class="clearfix">
              <div class="chat-avatar">
                <img src="assets/images/users/avatar-5.jpg" alt="male" />
                <i>10:01</i>
              </div>
              <div class="conversation-text">
                <div class="ctext-wrap">
                  <i>Geneva</i>
                  <p>Yeah everything is fine</p>
                </div>
              </div>
            </li>
            <li class="clearfix odd">
              <div class="chat-avatar">
                <img src="assets/images/users/avatar-1.jpg" alt="male" />
                <i>10:02</i>
              </div>
              <div class="conversation-text">
                <div class="ctext-wrap">
                  <i>Dominic</i>
                  <p>Wow that's great</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-body pt-0">
          <form
            class="needs-validation"
            novalidate
            name="chat-form"
            id="chat-form"
          >
            <div class="row align-items-start">
              <div class="col">
                <input
                  type="text"
                  class="form-control chat-input"
                  placeholder="Enter your text"
                  required
                />
                <div class="invalid-feedback">Please enter your messsage</div>
              </div>
              <div class="col-auto d-grid">
                <button type="submit" class="btn btn-danger chat-send">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- end .chat-conversation-->
    </div>
  `,
  styles: ``,
})
export class ChatlistComponent {}
