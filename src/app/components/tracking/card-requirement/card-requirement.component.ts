import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-requirement',
  templateUrl: './card-requirement.component.html',
})
export class CardRequirementComponent {
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() title: string = '';

  constructor() {}
}
