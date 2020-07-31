import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/Bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}

  createBill() {
    //this.http.
  }
  getAllBills(): Observable<Bill[]> {
    return this.http
      .get<GetBills>('http://localhost:5500/api/v1/bills')
      .pipe(map((response) => response.data));
  }
}
interface GetBills {
  data: Bill[];
}
