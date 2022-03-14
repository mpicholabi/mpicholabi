import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatNumber]',
})
export class FormatNumberDirective {
  @HostListener('blur', ['$event'])
  validationValue() {
    const value: HTMLInputElement = this.inputElement.nativeElement;
    value.value = this.convertNumberInput(value.value);
  }
  @HostListener('keypress', ['$event'])
  addZero(event: KeyboardEvent) {
    const regex = /^[0-9]/g;

    if (!regex.test(event.key)) {
      return false;
    } else {
      return event;
    }
  }
  @HostListener('focus', ['$event'])
  removeComma() {
    const input: HTMLInputElement = this.inputElement.nativeElement;
    let value = input.value.replace(/,/g, '');
    value = value.split('.')[0];
    input.value = value;
  }

  convertNumberInput(number: string): string {
    if (number !== '') {
      number = number.split('.')[0];
      const value = number.replace(/,/g, '');
      let numberParse = parseFloat(value);
      if (Number.isNaN(numberParse)) {
        numberParse = 0;
      }
      return numberParse.toLocaleString('es-GT', {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      });
    }
    return '';
  }

  constructor(private inputElement: ElementRef) {}
}
