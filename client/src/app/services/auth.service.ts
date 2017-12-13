import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { ProjectService } from './project.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';

const api = 'http://localhost:3000';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router,
  ) { }

  public login(token) {
    localStorage.setItem('token', token);

    this.getUserId(token).subscribe(id => {
      localStorage.setItem('userId', id);
    });
    
    this.getUser(token).subscribe(user => {
      this.projectService.getProjects(user._id).subscribe(projects => {
        if (projects.length === 0 && user.interests.length == 0) {
          this.userService.populateUser(user._id, user.login);
          return;
        }
      });
    });
  }

  public logout() {
    localStorage.setItem('token', null);
    localStorage.setItem('userId', null);
    this.router.navigate(['/']);
  }

  public getUser(token): Observable<User> {
    return this.http.get<User>(`${api}/auth/return`, {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + token)
    })
      .map(user => user['user']);
  }

  public getUserId(token) {
    return this.http.get<any>(`${api}/auth/return`)
      .map(user => user['user']._id);
  }

  public getToken(): String {
    return localStorage.getItem('token');
  }

  public getLoggedInId() {
    return localStorage.getItem('userId');
  }

  public isAuthenticated(): boolean {
    if(this.getToken() == null && this.getLoggedInId() == null) {
      return false;
    } else {
      return true;
    }
  }

}
