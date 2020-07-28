import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    block: '',
    flatNo: '',
    phoneNumber: '',
  };

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.loading = true;
    this.registerService.registerUser(this.user).subscribe((data) => {
      this.router.navigate(['/login']);
      this.loading = false;
    });
  }
}
