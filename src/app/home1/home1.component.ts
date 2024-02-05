import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostsComponent } from '../posts/posts.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [NavbarComponent,PostsComponent, ChatComponent],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {

}
