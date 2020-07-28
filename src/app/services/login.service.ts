import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  LOGIN_URL: string = 'http://localhost:5500/api/v1/auth/login';

  constructor(private http: HttpClient) {}

  // validateUserLogin(email: string, password: string, role: string): void {
  //   this.http
  //     .post(this.LOGIN_URL, { email, password, role })
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  // Creating HttpHeaders
  // httpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  // });

  validateUserLogin(
    email: string,
    password: string,
    role: string
  ): Observable<any> {
    console.log('Inside validateUserLogin');
    return this.http.post(this.LOGIN_URL, { email, password, role });
  }
}
