import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnersService } from 'src/app/services/owners.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css'],
})
export class OwnerDetailsComponent implements OnInit {
  user: any;
  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleOwnerDetails();
    });
  }

  handleOwnerDetails() {
    const ownerId = this.route.snapshot.paramMap.get('_id');
    this.ownerService.getOwnerDetails(ownerId).subscribe((data) => {
      this.user = data;
      console.log('Owner deatils' + data);
    });
  }
}
