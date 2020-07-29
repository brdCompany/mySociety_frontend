import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMyDashboardComponent } from './admin-my-dashboard.component';

describe('AdminMyDashboardComponent', () => {
  let component: AdminMyDashboardComponent;
  let fixture: ComponentFixture<AdminMyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
