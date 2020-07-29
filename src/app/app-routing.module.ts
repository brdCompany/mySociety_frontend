import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ResidentDashboardComponent } from './components/resident-dashboard/resident-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminMainContentComponent } from './components/admin-main-content/admin-main-content.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { AdminMyDashboardComponent } from './components/admin-my-dashboard/admin-my-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      {
        path: 'admin-main-content',
        component: AdminMainContentComponent,
      },
      {
        path: 'notice-board',
        component: NoticeBoardComponent,
      },
      {
        path: '',
        component: AdminMyDashboardComponent,
      },
    ],
  },
  { path: 'resident-dashboard', component: ResidentDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
