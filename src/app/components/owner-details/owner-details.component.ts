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
  public user: any;
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
    this.ownerService.getOwnerDetails(ownerId).subscribe((res) => {
      this.user = res;
      console.log('Owner deatils', this.user);
    });
  }
}
