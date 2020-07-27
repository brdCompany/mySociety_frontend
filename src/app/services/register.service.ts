import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  users: User[] = [];
  REGISTER_USER_URL: string = 'http://localhost:5500/api/v1/auth/register';

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    console.log('Inside registerUser service method');
    this.http.post<User>(this.REGISTER_USER_URL, user).subscribe((data) => {
      console.log('User created: ' + data);
    });
  }
}
