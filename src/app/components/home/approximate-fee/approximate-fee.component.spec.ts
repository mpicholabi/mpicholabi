import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ApproximateFeeComponent } from './approximate-fee.component';

describe('ApproximateFeeComponent', () => {
  let component: ApproximateFeeComponent;
  let fixture: ComponentFixture<ApproximateFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproximateFeeComponent],
      imports: [TranslateModule.forRoot()],
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
});
