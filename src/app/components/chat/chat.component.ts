import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { User } from 'stream-chat';
import { ChatClientService, ChannelService, StreamI18nService, StreamAutocompleteTextareaModule,StreamChatModule } from 'stream-chat-angular';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [TranslateModule, StreamAutocompleteTextareaModule, StreamChatModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  constructor(
    private chartService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'ancient-bonus-9';
    const userToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmxhdC13aW5kLTQiLCJleHAiOjE3MzYxMzE1OTF9.Vf3CVB-Dj5wKI0taUUbLV4u-JVFekE6QBwVTmOc3y94';
    const userName = 'ancient';

    const user: User = {
      id: userId,
      name: userName,
      image:`https://getstream.io/random_png/?name=${userName}`,
    };

    this.chartService.init(apiKey, user, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chartService.chatClient.channel('messaging', 'Financial-Market',{
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name:'Financial Market',
    });

    await channel.create();
    this.channelService.init({
      type:'messaging',
      id:{$eq: 'Financial-Market'},
    })
  }
}
