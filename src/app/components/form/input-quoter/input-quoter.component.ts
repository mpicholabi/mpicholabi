import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-quoter',
  templateUrl: './input-quoter.component.html',
})
export class InputQuoterComponent implements OnInit {
  @Input() label: string = '';
  @Input() labelClass: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() isEmail: boolean = false;
  @Input() type: string = 'text';
  @Input() icon: string = '';
  @Input() rules: 'all' | 'string' | 'number' | 'decimal' | 'email' = 'all';
  @Input() parentForm!: FormGroup;
  @Input() length: string = '50';
  @Input() isFormControl: boolean = true;
  @Input() classCustom: string = '';
  @Input() testId: string = '';
  @Input() isValid: 'invalid' | 'normal' | 'valid' = 'normal';
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputElement') inputElement!: ElementRef;

  formGroup: FormGroup = new FormGroup({});

  constructor() {}

  validationValue(event: KeyboardEvent): string | boolean | KeyboardEvent {
    const { value } = this.inputElement.nativeElement;
    const valueWord = `${value}${event.key}`;
    if (this.rules === 'string') {
      const regex = /^(([A-záéíóúñÁÉÍÓÚÑ])|([a-z])+( ))+$/g;
      if (!regex.test(valueWord)) {
        return false;
      } else {
        return event;
      }
    } else if (this.rules === 'number') {
      const regex = /^[0-9]+$/g;
      if (!regex.test(valueWord)) {
        return false;
      } else {
        return event;
      }
    } else if (this.rules === 'decimal') {
      const regex = /^([0-9]+\.?[0-9]*|\.[0-9]+)$/g;
      if (!regex.test(valueWord)) {
        return false;
      } else {
        return event;
      }
    }
    return event;
  }

  ngOnInit(): void {
    if (this.isFormControl) {
      this.parentForm.addControl(this.name, this.formGroup);
    }
  }
}
