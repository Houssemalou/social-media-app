import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostsComponent } from '../posts/posts.component';
import { ChatComponent } from '../chat/chat.component';
import { ProfileComponent } from '../profile/profile.component';
import { DiscussionComponent } from '../discussion/discussion.component';
import { InvitationsComponent } from '../invitations/invitations.component';
import { ListFriendsComponent } from '../list-friends/list-friends.component';
import { GeneratePostComponent } from '../generate-post/generate-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,PostsComponent, ChatComponent, ProfileComponent,DiscussionComponent,ListFriendsComponent, InvitationsComponent, GeneratePostComponent],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class HomeComponent {

}
