import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { OwnersService } from 'src/app/services/owners.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css'],
})
export class OwnersComponent implements OnInit {
  users: User[] = [];
  editedOwner: User;
  authErrorMsg: string = '';
  constructor(private ownerService: OwnersService) {}

  ngOnInit(): void {
    this.ownerService.getOwnerList().subscribe(
      (data) => {
        this.users = data;
        console.log('component', this.users);
      },
      (error: any) => {
        this.authErrorMsg = error.statusText;
      }
    );
  }
}
