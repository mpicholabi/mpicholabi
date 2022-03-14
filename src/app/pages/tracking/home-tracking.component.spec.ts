import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeTrackingPageComponent } from '@/app/pages/tracking/home-tracking.component';

describe('HomeTrackingPageComponent', () => {
  let component: HomeTrackingPageComponent;
  let fixture: ComponentFixture<HomeTrackingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTrackingPageComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrackingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
