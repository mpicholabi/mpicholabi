import { Component } from '@angular/core';

@Component({
  selector: 'app-approximate-fee',
  templateUrl: './approximate-fee.component.html',
})
export class ApproximateFeeComponent {
  fee: number = 1259.51;

  constructor() {}
}
