import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OwnersService {
  users: User[] = [];
  OWNER_API_URL: string = 'http://localhost:5500/api/v1/users';
  httpHeaders: HttpHeaders;
  updateOwnerEmitter = new EventEmitter<User>();

  constructor(private http: HttpClient) {}

  authHeader(): {} {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers: headers,
    };
    return options;
  }
  getOwnerList(): Observable<User[]> {
    return this.http
      .get<{ data: User[] }>(this.OWNER_API_URL, this.authHeader())
      .pipe(map((response) => response.data));
  }

  getOwnerDetails(id): Observable<User> {
    console.log('Inside get details');

    return this.http
      .get<GetResponse>(`${this.OWNER_API_URL}/${id}`, this.authHeader())
      .pipe(map((response) => response.data));
  }

  updateOwner(updatedUser: User): Observable<any> {
    console.log(updatedUser);
    return this.http.put<any>(
      this.OWNER_API_URL,
      updatedUser,
      this.authHeader()
    );
  }
  deleteOwner(id): Observable<any> {
    console.log(this.users);
    return this.http.delete<any>(`${this.OWNER_API_URL}/${id}`);
  }
}

interface GetResponse {
  data: User;
}
