import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputQuoterComponent } from './input-quoter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('InputQuoterComponent', () => {
  let component: InputQuoterComponent;
  let fixture: ComponentFixture<InputQuoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputQuoterComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQuoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });
});
