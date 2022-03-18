import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RequirementPageComponent } from '@/app/pages/tracking/requirement/requirement.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardRequirementComponent } from '@/app/components/tracking/card-requirement/card-requirement.component';

describe('RequestPageComponent', () => {
  let component: RequirementPageComponent;
  let fixture: ComponentFixture<RequirementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequirementPageComponent, CardRequirementComponent],
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
