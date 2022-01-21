import { TestBed, async } from '@angular/core/testing';
import { ComentaryComponent } from './comentary.component';

describe('Test component', () => {
    it(`'app-comentary' is created`, (() => {
      const fixture = TestBed.createComponent(ComentaryComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }))
})
