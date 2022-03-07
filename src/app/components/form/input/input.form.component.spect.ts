import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextFormComponent } from './input.form.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('InputTextFormComponent', () => {
  let component: InputTextFormComponent;
  let fixture: ComponentFixture<InputTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextFormComponent);
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
