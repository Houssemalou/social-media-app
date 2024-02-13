import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faEnvelope, faSearch, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import { ChatComponent } from '../chat/chat.component';
import { DiscussionComponent } from '../discussion/discussion.component';
import { InvitationsComponent } from '../invitations/invitations.component';
import { SuggesationsComponent } from '../suggesations/suggesations.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,ChatComponent,DiscussionComponent, InvitationsComponent, SuggesationsComponent, NotificationsComponent, SettingsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   faUser = faUser;
   faHome = faHome;
   faEnvelope = faEnvelope;
   faSearch = faSearch;
   faCog = faCog;
   faBell = faBell;
}
