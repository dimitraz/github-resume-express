import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-public-profiles',
  templateUrl: './public-profiles.component.html',
  styleUrls: ['./public-profiles.component.css']
})
export class PublicProfilesComponent implements OnInit {

  token: String;
  users: User[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { 
    this.token = this.authService.getToken();
  }

  ngOnInit() {
    // Get all users
    this.userService.getUsers()
    .subscribe(user => this.getUsers(user));
  }
  
  getUsers(users) {
    this.users = users;
  }

}
