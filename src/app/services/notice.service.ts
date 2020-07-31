import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notice } from '../models/Notice';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  NOTICE_URL = 'http://localhost:5500/api/v1/notices';
  httpHeaders: HttpHeaders;
  newNoticeEmitter = new EventEmitter<Notice>();
  updateNoticeEmitter = new EventEmitter<Notice>();

  constructor(private http: HttpClient) {}

  getNotices(): Observable<Notice[]> {
    return this.http
      .get<GetResponse>(this.NOTICE_URL, this.getAuthHeader())
      .pipe(map((response) => response.data));
  }

  createNotice(notice: Notice): Observable<any> {
    return this.http.post<any>(this.NOTICE_URL, notice, this.getAuthHeader());
  }

  updateNotice(updatedNotice: Notice): Observable<any> {
    console.log(updatedNotice);
    return this.http.put<any>(
      this.NOTICE_URL,
      updatedNotice,
      this.getAuthHeader()
    );
  }

  getAuthHeader(): {} {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers: headers,
    };
    return options;
  }
}

interface GetResponse {
  data: Notice[];
}
