import { GroupChatService } from '@/app/services/group-chat.service'
import { SocketService } from '@/app/services/socket.service'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { Subscription } from 'rxjs'
import { User } from 'stream-chat'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  groupId!: string
  user!: { _id: string; firstname: string; lastname: string }
  messages: any[] = []
  newMessage = ''
  routeSubscription!: Subscription
  socketSubscriptions: Subscription[] = []
  loadingMessages = true

  constructor(
    private socketService: SocketService,
    private route: ActivatedRoute,
    private groupChatService: GroupChatService
  ) {}

  ngOnInit(): void {
    // Parse the user object from local storage
    const userString = localStorage.getItem('user')
    if (userString) {
      try {
        this.user = JSON.parse(userString)
      } catch (error) {
        console.error('Failed to parse user data:', error)
        return
      }
    }

    this.routeSubscription = this.route.paramMap.subscribe((paramMap) => {
      this.groupId = paramMap.get('id') || ''

      if (this.groupId && this.user?._id) {
        this.loadingMessages = true
        this.initializeChat(this.groupId)
      } else {
        console.error('Invalid group ID or user data')
      }
    })
  }

  private initializeChat(groupId: string): void {
    this.loadOldMessages(groupId)
    this.socketService.joinGroup(groupId)

    this.socketSubscriptions.forEach((sub) => sub.unsubscribe())
    this.socketSubscriptions = []

    // Listen for new messages
    const newMessageSub = this.socketService
      .onNewMessage()
      .subscribe((message) => {
        this.messages.push(message)
      })
    this.socketSubscriptions.push(newMessageSub)

    const errorSub = this.socketService.onError().subscribe((error) => {
      console.error('Error:', error)
    })
    this.socketSubscriptions.push(errorSub)
  }

  private loadOldMessages(groupId: string): void {
    this.groupChatService.getGroupChatById(groupId).subscribe(
      (groupChat) => {
        this.messages = groupChat.messages || []
        this.loadingMessages = false
      },
      (error) => {
        console.error('Error loading old messages:', error)
        this.loadingMessages = false
      }
    )
  }

  sendMessage(): void {
    if (this.newMessage.trim() && this.groupId && this.user?._id) {
      this.socketService.sendMessage(
        this.groupId,
        this.user._id, // Use the user's `_id` from the parsed object
        this.newMessage
      )
      this.newMessage = ''
    }
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe()
    }
    this.socketSubscriptions.forEach((sub) => sub.unsubscribe())
    this.socketService.disconnect()
  }
}
