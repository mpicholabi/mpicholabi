import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RequirementPageComponent } from '@/app/pages/tracking/requirement/requirement.component';
import { PagesRoutingModules } from '@/app/pages/app-routing.module';
import { HomeTrackingPageComponent } from '@/app/pages/tracking/home-tracking.component';
import { ComponentsModule } from '@/app/components/components.module';
import { SharedModule } from '@/app/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}
@NgModule({
  declarations: [RequirementPageComponent, HomeTrackingPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModules,
    ComponentsModule,
    SharedModule,
  ],
})
export class TrackingModules {}
