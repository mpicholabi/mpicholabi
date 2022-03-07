import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RequirementFeatureComponent } from '../requirement-feature/requirement-feature.component';
import { HomeRequirementComponent } from './home-requirement.component';

describe('HomeRequirementComponent', () => {
  let component: HomeRequirementComponent;
  let fixture: ComponentFixture<HomeRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeRequirementComponent, RequirementFeatureComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
