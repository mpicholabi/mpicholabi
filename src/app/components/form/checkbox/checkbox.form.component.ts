import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.form.component.html',
})
export class CheckboxFormComponent {
  @Input()
  value: boolean = false;

  @Input()
  id: string = '';

  @Output() valueChange: EventEmitter<boolean> = new EventEmitter();

  toggleValue(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }

  constructor() {}
}
