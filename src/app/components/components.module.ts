import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from '@/app/components/nav/nav.component';
import { SharedModule } from '@/app/shared/shared.module';
import { CardRequirementComponent } from '@/app/components/tracking/card-requirement/card-requirement.component';
import { CheckboxFormComponent } from '@/app/components/form/checkbox/checkbox.form.component';
import { InputQuoterComponent } from '@/app/components/form/input-quoter/input-quoter.component';
import { FormSendEmailComponent } from '@/app/components/home/form-send-email/form-send-email.component';
import { InputComponent } from '@/app/components/form/input/input.component';

const components = [
  NavComponent,
  InputComponent,
  CardRequirementComponent,
  CheckboxFormComponent,
  InputQuoterComponent,
  FormSendEmailComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
