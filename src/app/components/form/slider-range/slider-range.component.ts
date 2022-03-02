import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.scss'],
})
export class SliderRangeComponent {
  @Input() value: number = 12;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() icon: string = '';
  @Input() min: number = 12;
  @Input() max: number = 60;
  @Input() range: boolean = false;
  @Input() step: number = 12;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  formGroup: FormGroup = new FormGroup({});

  constructor() {}

  rangeStep(donut: boolean = false): Array<number> {
    let max = donut ? (this.max - this.step) / this.min : this.max / this.min;
    return Array.from(
      { length: max },
      (item, increment) => (increment + 1) * this.step
    );
  }

  updateValue(value: string): void {
    this.valueChange.emit(value);
  }
}
