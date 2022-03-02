import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Slider } from 'primeng/slider';
import { MockComponent } from 'ng-mocks';

import { HomeCotizadorComponent } from './home-cotizador.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `<p-slider
    [min]="min"
    [max]="max"
    [step]="step"
    [range]="range"
  ></p-slider>`,
})
class TestSliderComponent {
  ngModel: any = '';
  range: boolean = true;

  min: number = 12;

  max: number = 60;

  step: number = 12;
}
describe('HomeCotizadorComponent', () => {
  let component: HomeCotizadorComponent;
  let fixture: ComponentFixture<HomeCotizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCotizadorComponent],
      imports: [
        TranslateModule.forRoot(),
        FormsModule,
        TestSliderComponent,
        CommonModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCotizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
