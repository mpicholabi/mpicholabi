import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html'
})
export class ProductFeatureComponent{

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() { }

}
