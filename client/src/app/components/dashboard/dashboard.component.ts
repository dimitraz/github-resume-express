import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  token: String;
  id: String;
  user: User;

  constructor(
    private authService: AuthService,
  ) {
    this.token = this.authService.getToken();
  }

  ngOnInit() {
    this.authService.getUser(this.token)
      .subscribe(user => this.getUser(user));
  }

  getUser(user) {
    this.user = user;
    this.id = user._id;
  }

}
