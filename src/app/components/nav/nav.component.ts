import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  private _isScrolled: boolean = false;
  constructor() {}

  public get isScrolled(): boolean {
    return this._isScrolled;
  }

  @Input()
  public set isScrolled(value: boolean) {
    this._isScrolled = value;
  }
}
