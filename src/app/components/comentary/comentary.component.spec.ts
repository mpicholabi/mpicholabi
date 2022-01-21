import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ComentaryComponent } from './comentary.component';

describe('Test component', () => {
    
    let component: ComentaryComponent;
    let fixture: ComponentFixture<ComentaryComponent>;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations: [ComentaryComponent]
        }).compileComponents();
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(ComentaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it(`'app-comentary' is created`, (() => {
        expect(component).toBeDefined();
    }))
})
