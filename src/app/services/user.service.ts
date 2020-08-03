import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInUser: User;
  GET_USER_URL: string = 'http://localhost:5500/api/v1/users';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUser(emailInput: string): void {
    console.log(`Get user called. Input email ID is ${emailInput}`);
    this.GET_USER_URL += `/${emailInput}`;
    this.http.get<GetResponse>(this.GET_USER_URL).subscribe((data) => {
      console.log(data);
      this.loggedInUser = data.user;
    });
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }
}

interface GetResponse {
  user: User;
}
