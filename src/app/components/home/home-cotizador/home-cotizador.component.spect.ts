import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HomeCotizadorComponent } from './home-cotizador.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

describe('HomeCotizadorComponent', () => {
  let component: HomeCotizadorComponent;
  let fixture: ComponentFixture<HomeCotizadorComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCotizadorComponent],
      imports: [TranslateModule.forRoot(), ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCotizadorComponent);
    component = fixture.componentInstance;
    component.quoter = formBuilder.group({
      amount: ['', [Validators.required]],
      term: ['', [Validators.required]],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
