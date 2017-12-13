import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { ProjectService } from '../../services/project.service';
import { InterestService } from '../../services/interest.service';
import _ from 'lodash';
import { colours } from './colours';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token: String;
  id: String;
  user: User;
  projects: any[];
  skills: any[];
  interests: any[];
  colours: any[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private projectService: ProjectService,
    private interestService: InterestService
  ) {
    this.token = this.authService.getToken();
    this.colours = colours;
  }

  ngOnInit() {
    // Get the user
    this.userService.getUser(this.authService.getLoggedInId()).subscribe(user => {
      this.getUser(user);
    });
  }

  getUser(user) {
    this.user = user;
    this.id = user._id;

    // Get user's projects
    this.projectService.getProjects(this.user._id)
      .subscribe(projects => this.getProjects(projects));

    // Get user's interests
    this.interestService.getInterests(this.user._id)
      .subscribe(interests => this.getInterests(interests));
  }

  getProjects(projects) {
    this.projects = projects;
    this.getSkills();
  }

  getSkills() {
    let skills = [];

    for (let project of this.projects) {
      if (project.language) {
        let langs = (project.language).split(',')
        for (let lang of langs) {
          this.add(skills, lang.trim());   
        }
      }
    }

    this.skills = skills;
  }

  findColour(name) {
    let colour = _.find(this.colours, { 'id': name });
    if (colour !== undefined) {
        return colour;
    }
    return { id: 'undefined', colour: '#ddd' };
  }

  getInterests(interests) {
    this.interests = interests;
  }

  add(array, value) {
    if (array.indexOf(value) === -1) {
      array.push(value);
    }
  }

  deleteProject(id) {
    _.remove(this.projects, (p) => {
      return p._id === id;
    });

    this.projectService.deleteProject(this.id, id).subscribe();
  }

}
