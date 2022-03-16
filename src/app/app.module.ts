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
import { CardComponent } from './components/card/card.component';
import { HomeBenefitComponent } from './components/home/home-benefit/home-benefit.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { ProductFeatureComponent } from './components/home/product-feature/product-feature.component';
import { HomeRequirementComponent } from './components/home/home-requirement/home-requirement.component';
import { RequirementFeatureComponent } from './components/home/requirement-feature/requirement-feature.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomeQuoterComponent } from './components/home/home-quoter/home-quoter.component';
import { SliderRangeComponent } from './components/form/slider-range/slider-range.component';
import { ApproximateFeeComponent } from './components/home/approximate-fee/approximate-fee.component';
import { quoterReducer } from './store/quoter.reducer';
import { LoadingComponent } from './components/loading/loading.component';
import { QuoterFeatureComponent } from './components/home/quoter-feature/quoter-feature.component';
import { TableComponent } from './components/table/table.component';
import { HomeBalanceComponent } from './components/home/home-balance/home-balance.component';
import { SwitchComponent } from './components/switch/switch.component';
import { FormatNumberDirective } from './utils/directives/format-number.directive';
import { ModalComponent } from './components/modal/modal.component';
import {
  HttpLoaderFactory,
  TrackingModules,
} from '@/app/pages/tracking/tracking.modules';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

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
