import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages'

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicProfilesComponent } from './components/public-profiles/public-profiles.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditInterestsComponent } from './components/edit-interests/edit-interests.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectService } from './services/project.service';
import { InterestService } from './services/interest.service';

// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';

// Guards
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PublicProfilesComponent,
    NavbarComponent,
    EditProjectComponent,
    EditInterestsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
  ],
  providers: [
    AuthService,
    UserService,
    ProjectService,
    InterestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
