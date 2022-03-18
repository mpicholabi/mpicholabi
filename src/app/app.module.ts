import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SliderModule } from 'primeng/slider';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@/app/app-routing.module';
import { ErrorInterceptorService } from '@/app/utils/error-interceptor.service';
import { errorReducer } from '@/app/store/error.reducer';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import guatemala from '@angular/common/locales/es-GT';
registerLocaleData(guatemala, 'es-guatemala');
// import in next section the component of the app
import { HomeComponent } from '@/app/pages/home/home.component';
import { AppComponent } from '@/app/app.component';
import { environment } from '@/environments/environment';
import { CardComponent } from '@/app/components/card/card.component';
import { HomeBenefitComponent } from '@/app/components/home/home-benefit/home-benefit.component';
import { HomeProductComponent } from '@/app/components/home/home-product/home-product.component';
import { ProductFeatureComponent } from '@/app/components/home/product-feature/product-feature.component';
import { HomeRequirementComponent } from '@/app/components/home/home-requirement/home-requirement.component';
import { RequirementFeatureComponent } from '@/app/components/home/requirement-feature/requirement-feature.component';
import { HomeHeaderComponent } from '@/app/components/home/home-header/home-header.component';
import { HomeQuoterComponent } from '@/app/components/home/home-quoter/home-quoter.component';
import { SliderRangeComponent } from '@/app/components/form/slider-range/slider-range.component';
import { ApproximateFeeComponent } from '@/app/components/home/approximate-fee/approximate-fee.component';
import { quoterReducer } from '@/app/store/quoter.reducer';
import { LoadingComponent } from '@/app/components/loading/loading.component';
import { QuoterFeatureComponent } from '@/app/components/home/quoter-feature/quoter-feature.component';
import { TableComponent } from '@/app/components/table/table.component';
import { HomeBalanceComponent } from '@/app/components/home/home-balance/home-balance.component';
import { SwitchComponent } from '@/app/components/switch/switch.component';
import { FormatNumberDirective } from '@/app/utils/directives/format-number.directive';
import { GoToRouteDirective } from '@/app/utils/directives/navigation.directive';
import { ModalComponent } from '@/app/components/modal/modal.component';
import {
  HttpLoaderFactory,
  TrackingModules,
} from '@/app/pages/tracking/tracking.modules';
import { FaqModules } from '@/app/pages/faq/faq.modules';
import { ComponentsModule } from '@/app/components/components.module';
import { SharedModule } from '@/app/shared/shared.module';

registerLocaleData(guatemala, 'es-guatemala');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    HomeBenefitComponent,
    HomeProductComponent,
    ProductFeatureComponent,
    HomeRequirementComponent,
    RequirementFeatureComponent,
    HomeHeaderComponent,
    HomeQuoterComponent,
    SliderRangeComponent,
    ApproximateFeeComponent,
    LoadingComponent,
    QuoterFeatureComponent,
    TableComponent,
    HomeBalanceComponent,
    SwitchComponent,
    FormatNumberDirective,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ errors: errorReducer, quoter: quoterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.env.storeLog as boolean,
      autoPause: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxScrollTopModule,
    SliderModule,
    TrackingModules,
    ComponentsModule,
    SharedModule,
    FaqModules,
  ],
  exports: [TranslateModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-guatemala' },
    CurrencyPipe,
    {
      provide: [HTTP_INTERCEPTORS],
      useClass: ErrorInterceptorService,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'es-guatemala' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
