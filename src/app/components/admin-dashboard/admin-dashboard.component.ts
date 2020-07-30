import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Notice } from 'src/app/models/Notice';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  newNoticeParent: Notice;

  constructor() {}

  ngOnInit(): void {}
}
