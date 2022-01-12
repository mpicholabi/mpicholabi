import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentaryComponent } from './comentary.component';

describe('ComentaryComponent', () => {
  let component: ComentaryComponent;
  let fixture: ComponentFixture<ComentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
