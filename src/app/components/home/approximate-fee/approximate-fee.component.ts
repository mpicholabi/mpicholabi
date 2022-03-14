import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-approximate-fee',
  templateUrl: './approximate-fee.component.html',
})
export class ApproximateFeeComponent {
  @Input()
  isLoading: boolean = false;
  fee: number = 1500;

  constructor(private currencyPipe: CurrencyPipe) {}

  formatCurrency(key: number | string): string {
    return this.currencyPipe.transform(key, 'GTQ', 'symbol') || '';
  }
}
