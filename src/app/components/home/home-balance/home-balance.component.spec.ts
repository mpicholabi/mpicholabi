import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBalanceComponent } from './home-balance.component';

describe('HomeBalanceComponent', () => {
  let component: HomeBalanceComponent;
  let fixture: ComponentFixture<HomeBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
