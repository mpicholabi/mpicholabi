import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-requirement-feature',
  templateUrl: './requirement-feature.component.html',
  styleUrls: ['./requirement-feature.component.scss']
})
export class RequirementFeatureComponent {
  @Input()
  icon: string = '';
  @Input()
  description: string = '';

  constructor() { }
}
