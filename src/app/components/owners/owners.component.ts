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
  users: User[];
  editedOwner: User;
  authErrorMsg: string = '';
  editMode: boolean = false;
  constructor(private ownerService: OwnersService) {}

  ngOnInit(): void {
    this.refreshOwnerList();

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
  refreshOwnerList() {
    this.ownerService.getOwnerList().subscribe((res) => {
      this.ownerService.users = res as User[];
    });
  }
  editForm(editedOwner: User) {
    this.editedOwner = editedOwner;
    this.editMode = true;
  }
  onEdit(ownerEditForm: NgForm) {
    this.editedOwner.name = ownerEditForm.value.name;
    this.editedOwner.email = ownerEditForm.value.email;
    this.editedOwner.flatNo = ownerEditForm.value.flatNo;
    this.editedOwner.block = ownerEditForm.value.block;
    this.editedOwner.phoneNumber = ownerEditForm.value.phoneNumber;
    this.ownerService.updateOwner(this.editedOwner).subscribe((result) => {
      console.log(result);
      this.editMode = !this.editMode;
      this.ownerService.updateOwnerEmitter.emit(this.editedOwner);
    });
  }

  deleteOwner(_id: string) {
    if (confirm('are you sure want to remove this record?') == true) {
      this.ownerService.deleteOwner(_id).subscribe((res) => {
        this.ownerService.updateOwnerEmitter.emit(res);
        console.log(res);
      });
    }
  }
}
