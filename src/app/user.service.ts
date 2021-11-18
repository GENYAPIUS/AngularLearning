import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  requestUrl: string = `http://localhost:55650/api/users`;
  getUsers(): Observable<User[]> {
    var result = this.http.get<User[]>(this.requestUrl);
    return result;
  }
}
