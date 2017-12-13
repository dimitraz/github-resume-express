import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import 'rxjs/add/operator/map'

const api = 'http://localhost:3000/api';

@Injectable()
export class InterestService {

  constructor(private http: HttpClient) { }

  public getInterests(userId) {
    return this.http.get<any[]>(`${api}/users/${userId}/interests`);
  }

  public getInterest(userId, interestId) {
    return this.http.get<any[]>(`${api}/users/${userId}/interests`);
  }

  public addInterest(userId, interest) {
    return this.http.post<any>(`${api}/users/${userId}/interests`, { interest: interest });
  }

  public deleteInterest(userId, interestId) {
    return this.http.delete<any>(`${api}/users/${userId}/interests/${interestId}`);
  }

  public updateInterest(userId, interestId, interest) {
    return this.http.put<any>(`${api}/users/${userId}/interests/${interestId}`, { interest: interest });
  }

}
