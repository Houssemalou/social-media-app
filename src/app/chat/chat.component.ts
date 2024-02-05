import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: { sender: string, content: string, isMe: boolean }[] = [
    { sender: 'Friend', content: 'Hello!', isMe: false },
    { sender: 'Me', content: 'Hi there!', isMe: true },
    // Add more messages as needed
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'Me', content: this.newMessage, isMe: true });
      // Simulate friend's reply
      this.messages.push({ sender: 'Friend', content: 'Got it!', isMe: false });
      this.newMessage = '';
    }
  }
}
