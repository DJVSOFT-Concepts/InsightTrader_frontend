// socket.service.ts
import { Injectable } from '@angular/core'
import { io, Socket } from 'socket.io-client'
import { Observable } from 'rxjs'
import { environment } from './environment'

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket
  private socketUrl = environment.socketUrl

  constructor() {
    this.socket = io(this.socketUrl, {
      transports: ['websocket'],
    })
  }

  joinGroup(groupId: string): void {
    this.socket.emit('joinGroup', { groupId })
  }

  // Leave a specific group
  leaveGroup(groupId: string): void {
    this.socket.emit('leaveGroup', { groupId })
  }

  // Send a message to a specific group
  sendMessage(groupId: string, userId: string, message: string): void {
    this.socket.emit('sendMessage', { groupId, userId, message })
  }

  // Listen for new messages
  onNewMessage(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('newMessage', (message) => {
        observer.next(message)
      })
    })
  }

  // Handle errors
  onError(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('error', (error) => {
        observer.next(error)
      })
    })
  }

  // Disconnect socket
  disconnect(): void {
    this.socket.disconnect()
  }
}
