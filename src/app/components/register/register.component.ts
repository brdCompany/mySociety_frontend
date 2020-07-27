import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    block: '',
    flatNo: '',
    phoneNumber: '',
  };

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.registerService.registerUser(this.user);
  }
}
