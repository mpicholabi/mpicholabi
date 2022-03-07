import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-approximate-fee',
  templateUrl: './approximate-fee.component.html',
})
export class ApproximateFeeComponent {
  @Input()
  isLoading: boolean = false;
  fee: number = 1259.51;

  constructor() {}
}
