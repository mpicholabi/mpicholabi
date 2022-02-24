import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFeatureComponent } from '../product-feature/product-feature.component';

import { HomeProductComponent } from './home-product.component';

describe('HomeProductComponent', () => {
  let component: HomeProductComponent;
  let fixture: ComponentFixture<HomeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductComponent, ProductFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
