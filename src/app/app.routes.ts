import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'login', // child route path
                component: LoginComponent, // child route component that the router renders
            },
            {
                path: 'register',
                component: RegisterComponent, // another child route component that the router renders
            },
        ],
    }
];
