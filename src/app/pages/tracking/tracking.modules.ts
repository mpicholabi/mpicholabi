import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RequestPageComponent } from '@/app/pages/tracking/request/request.component';
import { PagesRoutingModules } from '@/app/pages/tracking/app-routing.module';
import { HomeTrackingPageComponent } from '@/app/pages/tracking/home-tracking.component';

@NgModule({
  declarations: [RequestPageComponent, HomeTrackingPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModules,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrackingModules {}
