import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RequirementFeatureComponent } from '../requirement-feature/requirement-feature.component';
import { HomeRequiremetComponent } from './home-requiremet.component';

describe('HomeRequiremetComponent', () => {
  let component: HomeRequiremetComponent;
  let fixture: ComponentFixture<HomeRequiremetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRequiremetComponent, RequirementFeatureComponent ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRequiremetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
