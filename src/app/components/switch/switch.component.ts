import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent {
  @Input() value: boolean = false;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  switchLeft() {
    this.value = true;
    this.valueChange.emit(this.value);
  }

  switchRight() {
    this.value = false;
    this.valueChange.emit(this.value);
  }
}
