import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from '@/app/components/table/table.component';

import { QuoterFeatureComponent } from './quoter-feature.component';

describe('QuoterFeatureComponent', () => {
  let component: QuoterFeatureComponent;
  let fixture: ComponentFixture<QuoterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoterFeatureComponent, TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
