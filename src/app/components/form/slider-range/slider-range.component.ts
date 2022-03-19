import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
})
export class SliderRangeComponent implements AfterViewInit {
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
  @Input() id: string = '';
  @ViewChild('sliderInput') sliderInput!: ElementRef;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  formGroup: FormGroup = new FormGroup({});

  constructor() {}

  rangeStep(donut: boolean = false): Array<number> {
    let max = donut ? (this.max - this.step) / this.min : this.max / this.min;
    return Array.from(
      { length: max },
      (item, increment) => (increment + 1) * this.step
    );
  }

  selectValue(value: number): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  updateValue(value: number): void {
    this.valueChange.emit(value);
  }

  findSlider(): void {
    const elements: NodeList = document.querySelectorAll(
      '.p-slider.p-component'
    );
    const span = document.createElement('span');
    span.classList.add(
      'w-110%',
      'h-5px',
      '-left-2px',
      'bg-gray-375',
      'absolute'
    );
    elements.forEach((element) => {
      element.appendChild(span);
    });
  }

  ngAfterViewInit(): void {
    this.findSlider();
  }
}
