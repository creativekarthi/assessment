import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app-routes/app-routes';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthenticateService } from './service/authenticate.service';
import { TodoService } from './service/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, AuthenticateService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
