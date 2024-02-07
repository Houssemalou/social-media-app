import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostsComponent } from '../posts/posts.component';
import { ChatComponent } from '../chat/chat.component';
import { ProfileComponent } from '../profile/profile.component';
import { DiscussionComponent } from '../discussion/discussion.component';
import { ListeAmisComponent } from '../liste-amis/liste-amis.component';
import { InvitationsComponent } from '../invitations/invitations.component';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [NavbarComponent,PostsComponent, ChatComponent, ProfileComponent,DiscussionComponent,ListeAmisComponent, InvitationsComponent],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {

}
