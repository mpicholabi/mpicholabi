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

  it('should show test input value true', () => {
    component.value = true;
    component.switchLeft();
    fixture.detectChanges();
    expect(component.value).toBe(true);
  });

  it('should show test input value false', () => {
    component.value = false;
    component.switchRight();
    fixture.detectChanges();
    expect(component.value).toBe(false);
  });
});
