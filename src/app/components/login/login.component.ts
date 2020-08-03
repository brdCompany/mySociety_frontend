import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  role: string;
  authErrorMsg: string = '';
  token: string;
  loading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.loginService
      .validateUserLogin(this.email, this.password, this.role)
      .subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          if (this.role == 'admin') {
            this.router.navigate(['/admin-dashboard']);
            this.dataSharingService.emailEmitter.emit(this.email);
          } else {
            this.router.navigate(['/resident-dashboard']);
          }
          this.loading = false;
        },
        (error: any) => {
          this.authErrorMsg = error.statusText;
          this.loading = false;
        }
      );
  }
}
