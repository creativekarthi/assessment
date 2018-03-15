import { Routes, CanActivate } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserListComponent } from '../component/user-list/user-list.component';
import { LoginComponent } from '../component/login/login.component';
import { AuthGuard } from '../auth/auth.guard';

export const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    { 
        path : 'login', component : LoginComponent 
    },
    { 
        path : 'user', component : UserListComponent, canActivate: [AuthGuard]
    },
    { 
        path: '**', redirectTo: 'login', pathMatch: 'full' 
    },
];