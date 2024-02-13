import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-authentications',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, RouterOutlet, RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class AuthenticationsComponent {
    authHidden:boolean = true;

    setAuthHidden(){
      this.authHidden=false;
    }
}
