import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ResidentDashboardComponent } from './components/resident-dashboard/resident-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { AdminMyDashboardComponent } from './components/admin-my-dashboard/admin-my-dashboard.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { NoticePipe } from './pipes/notice.pipe';
import { BillComponent } from './components/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    AdminDashboardComponent,
    ResidentDashboardComponent,
    SidebarComponent,
    NoticeBoardComponent,
    AdminMyDashboardComponent,
    BillComponent,
    NoticesComponent,
    NoticePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
