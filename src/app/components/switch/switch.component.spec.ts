import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show test input value', () => {
    component.value = true;
    component.switchFee();
    fixture.detectChanges();
    expect(component.value).toBe(false);
  });
});
