import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import 'rxjs/add/operator/map'

const api = 'http://localhost:3000/api';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects(id) {
    return this.http.get<any[]>(`${api}/users/${id}/projects`);
  }

  public getProject(userId, projectId) {
    return this.http.get<any>(`${api}/users/${userId}/projects/${projectId}`);
  }

  public addProject(userId, project) {
    let name = project.name;
    let description = project.description || '';
    let language = project.language || '';
    let html_url = project.html_url || '';
    let ext_url = project.ext_url || '';

    return this.http.post<any>(`${api}/users/${userId}/projects`, {
      name: name,
      userId: userId,
      description: description,
      language: language,
      html_url: html_url,
      ext_url: ext_url
    });
  }

  public deleteProject(userId, projectId) {
    return this.http.delete<any>(`${api}/users/${userId}/projects/${projectId}`);
  }

  public updateProject(userId, projectId, project) {
    let name = project.name;
    let description = project.description;
    let language = project.language;
    let html_url = project.html_url;
    let ext_url = project.ext_url;

    return this.http.put<any>(`${api}/users/${userId}/projects/${projectId}`, {
      name: name,
      userId: userId,
      description: description,
      language: language,
      html_url: html_url,
      ext_url: ext_url
    }, {observe: 'response'});
  }

}
