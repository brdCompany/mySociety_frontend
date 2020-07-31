import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { Bill } from 'src/app/models/Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  bills: Bill[];
  constructor(private billService: BillService) {}
  dummies = [
    { id: '11', name: 'First name' },
    { id: '12', name: 'Second name' },
  ];
  ngOnInit(): void {
    this.billService.getAllBills().subscribe((data) => {
      this.bills = data;
      console.log(this.bills);
    });
  }
}
