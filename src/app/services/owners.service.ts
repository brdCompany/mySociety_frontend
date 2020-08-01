import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OwnersService {
  OWNER_API_URL: string = 'http://localhost:5500/api/v1/users';
  httpHeaders: HttpHeaders;
  updateOwnerEmitter = new EventEmitter<User>();

  constructor(private http: HttpClient) {}

  authHeader(): {} {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let headerOptions = {
      headers: headers,
    };
    return headerOptions;
  }
  getOwnerList(): Observable<User[]> {
    return this.http
      .get<{ data: User[] }>(this.OWNER_API_URL, this.authHeader())
      .pipe(map((response) => response.data));
  }
}
