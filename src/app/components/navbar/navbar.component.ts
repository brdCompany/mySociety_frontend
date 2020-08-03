import { Component, OnInit, DoCheck, EventEmitter } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedInUser: User;
  loggedInUserEmail: string;
  isUserLoggedIn: boolean = false;
  constructor(
    private dataSharingService: DataSharingService,
    private userService: UserService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    console.log(`on init called`);
    this.dataSharingService.emailEmitter.subscribe((userEmail) => {
      console.log(`entering email emitter`);
      this.loggedInUserEmail = userEmail;
      this.isUserLoggedIn = true;
      this.userService.getUser(this.loggedInUserEmail);
      this.loggedInUser = this.userService.getLoggedInUser();
      console.log(this.loggedInUser);
      console.log(`exiting email emitter`);
    });
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
  }
}
