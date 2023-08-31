import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWithdrawComponent } from './admin-withdraw.component';

describe('AdminWithdrawComponent', () => {
  let component: AdminWithdrawComponent;
  let fixture: ComponentFixture<AdminWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWithdrawComponent]
    });
    fixture = TestBed.createComponent(AdminWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
