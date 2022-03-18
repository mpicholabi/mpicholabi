import { ElementRef } from '@angular/core';
import { FormatNumberDirective } from './format-number.directive';

describe('FormatNumberDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef<any> = Object();
    const directive = new FormatNumberDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
