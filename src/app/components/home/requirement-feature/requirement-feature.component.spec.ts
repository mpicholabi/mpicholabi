import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementFeatureComponent } from './requirement-feature.component';

describe('RequirementFeatureComponent', () => {
  let component: RequirementFeatureComponent;
  let fixture: ComponentFixture<RequirementFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
