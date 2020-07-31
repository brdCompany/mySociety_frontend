import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');
    const authRequest = req.clone({
      headers: req.headers.set('authorization', 'Bearer ' + authToken),
    });
    console.log('Inside auth-Interceptor' + authToken);
    return next.handle(authRequest);
  }
}
