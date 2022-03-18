import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Router, Routes } from '@angular/router';

import { NavComponent } from './nav.component';
import { HomeComponent } from '@/app/pages/home/home.component';
import { FaqPageComponent } from '@/app/pages/faq/faq.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let router: Router;
  let location: Location;

  const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FaqPageComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent, HomeComponent, FaqPageComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "" redirects you to /faq', fakeAsync(() => {
    component.goTo('/faq');
    tick();
    expect(location.path()).toBe('/faq');
  }));

  it('should isScrolled false', () => {
    component.handlerScroll();
    expect(component.isScrolled).toBe(false);
  });
});
