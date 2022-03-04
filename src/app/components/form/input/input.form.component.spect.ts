import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextFormComponent } from './input.form.component';
import { FormGroup } from '@angular/forms';

describe('InputTextFormComponent', () => {
  let component: InputTextFormComponent;
  let fixture: ComponentFixture<InputTextFormComponent>;
  const formGroup: FormGroup = new FormGroup({});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextFormComponent],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
