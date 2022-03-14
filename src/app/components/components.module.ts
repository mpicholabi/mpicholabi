import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from '@/app/components/nav/nav.component';
import { SharedModule } from '../shared/shared.module';

const components = [NavComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
