import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PagesRoutingModules } from '@/app/pages/app-routing.module';
import { ComponentsModule } from '@/app/components/components.module';
import { SharedModule } from '@/app/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FaqPageComponent } from './faq.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}
@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModules,
    ComponentsModule,
    SharedModule,
  ],
})
export class FaqModules {}
