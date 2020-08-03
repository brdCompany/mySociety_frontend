import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/Email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  EMAIL_URL: string = 'http://localhost:5500/api/v1/email';

  constructor(private http: HttpClient) {}

  sendEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(this.EMAIL_URL, email);
  }
}
