import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCotizadorComponent } from './home-cotizador.component';

describe('HomeCotizadorComponent', () => {
  let component: HomeCotizadorComponent;
  let fixture: ComponentFixture<HomeCotizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCotizadorComponent ]
    })
    .compileComponents();
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
