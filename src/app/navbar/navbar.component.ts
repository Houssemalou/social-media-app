import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faEnvelope, faSearch, faCog, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,],
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
