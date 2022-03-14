import { Component, Input } from '@angular/core';
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
      this.isScrolled = window.scrollY > 3;
    });
  }

  constructor() {
    this.handlerScroll();
  }
}
