import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  role: string;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.validateUserLogin(this.email, this.password, this.role);
  }
}
