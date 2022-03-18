import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  isScrolled: boolean = false;
  @Input()
  isTransparent: boolean = true;

  handlerScroll(): void {
    window.addEventListener('scroll', () => {
      this.isScrolled = window ? window.scrollY > 3 : false;
    });
  }

  constructor(private router: Router) {
    this.handlerScroll();
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
