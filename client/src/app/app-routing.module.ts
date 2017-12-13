import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicProfilesComponent } from './components/public-profiles/public-profiles.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditInterestsComponent } from './components/edit-interests/edit-interests.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: '', component: LoginComponent },
 //{ path: ':token', component: LoginComponent },
 { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
 { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
 { path: 'public-profiles', canActivate: [AuthGuard], component: PublicProfilesComponent },
 { path: 'profile/:id/projects/:project_id', canActivate: [AuthGuard], component: EditProjectComponent },
 { path: 'profile/:id/interests', canActivate: [AuthGuard], component: EditInterestsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}