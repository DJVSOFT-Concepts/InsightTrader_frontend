import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from './environment'

@Injectable({
  providedIn: 'root',
})
export class GroupChatService {
  private apiUrl = environment.baseUrl

  constructor(private http: HttpClient) {}

  getAllGroupChats(): Observable<any> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.apiUrl}/group-chats`, { headers })
  }

  getGroupChatById(id: string): Observable<any> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.apiUrl}/group-chats/${id}`, { headers })
  }
}
