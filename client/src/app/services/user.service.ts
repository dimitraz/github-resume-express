import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { InterestService } from './interest.service';
import { ProjectService } from './project.service';
import 'rxjs/add/operator/map'
import _ from 'lodash';

const api = 'http://localhost:3000/api';
const github_api = 'https://api.github.com/user';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private https: Http,
    private interestService: InterestService,
    private projectService: ProjectService
  ) { }

  public getUsers() {
    return this.http.get<User[]>(`${api}/users`);
  }

  public getUser(id) {
    return this.http.get<User>(`${api}/users/${id}`);
  }

  public populateUser(id, login) {
    // Add five random interests
    let randomInterests = ['Pizza', 'Mario-Kart 64', 'Airports', 'Hyperloop', 'Electro Synth', 'The Roman Forum as Cicero saw it',
      'The Old Kanye', 'Crop circles', 'Eames Chairs', 'Competitive trampolining', 'Russian Constructivism', 'WW1 Memorabilia',
      'Planetariums', 'UFO Conspiracy theories', 'Dadism'];

    let interests = _.sampleSize(randomInterests, 5);
    for (let interest of interests) {
      this.interestService.addInterest(id, interest).subscribe();
    }

    // Get user's projects from github
    this.getRepos(login).subscribe(projects => {
      for (let project of projects) {
        this.projectService.addProject(id, project).subscribe();
      }
    });
  }

  public getRepos(login): Observable<any> {
    return this.https.get(`${github_api}s/${login}/repos`)
    .map(projects => {
      return projects.json();
    })
  }

}
