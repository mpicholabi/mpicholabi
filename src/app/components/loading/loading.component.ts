import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  private _class: string = '';
  @Input()
  get class(): string {
    return this._class;
  }

  public set class(value: string) {
    this._class = value;
  }

  constructor() {}
}
