import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isTokenValid(): boolean {
    if (localStorage.getItem('token')) return true;
    return false;
  }

  getAuthHeader(): {} {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers: headers,
    };
    return headers;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
