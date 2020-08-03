import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  emailEmitter: EventEmitter<any> = new EventEmitter<any>();
  roleEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
