import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '@/app/components/loading/loading.component';
import { ApproximateFeeComponent } from './approximate-fee.component';
import { CurrencyPipe } from '@angular/common';
import { ComponentRef } from '@angular/core';

describe('ApproximateFeeComponent', () => {
  let component: ApproximateFeeComponent;
  let fixture: ComponentFixture<ApproximateFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproximateFeeComponent, LoadingComponent],
      imports: [TranslateModule.forRoot()],
      providers: [CurrencyPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproximateFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test function', () => {
    const value = '';
    component.formatCurrency(value);
  });
});
