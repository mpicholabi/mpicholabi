import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '@/app/components/loading/loading.component';
import { ApproximateFeeComponent } from './approximate-fee.component';

describe('ApproximateFeeComponent', () => {
  let component: ApproximateFeeComponent;
  let fixture: ComponentFixture<ApproximateFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproximateFeeComponent, LoadingComponent],
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
