import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[goToRoute]',
})
export class GoToRouteDirective {
  @Input()
  path: string = '';
  constructor(private route: Router) {}

  @HostListener('click', ['$event.target'])
  goTo(): void {
    console.log('test', this.path);
    this.route.navigate([`/${this.path}`]);
  }
}
