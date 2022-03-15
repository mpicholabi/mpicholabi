import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardRequirementComponent } from './card-requirement.component';

describe('CardRequirementComponent', () => {
  let component: CardRequirementComponent;
  let fixture: ComponentFixture<CardRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRequirementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
