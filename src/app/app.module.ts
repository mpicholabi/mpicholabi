import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@/app/app-routing.module';
import { ErrorInterceptorService } from '@/app/utils/error-interceptor.service';
import { errorReducer } from '@/app/store/error.reducer';

// import in next section the component of the app
import { HomeComponent } from '@/app/pages/home/home.component';
import { AppComponent } from '@/app/app.component';
import { environment } from '@/environments/environment';
import { CardComponent } from './components/card/card.component';
import { HomeBenefitComponent } from './components/home/home-benefit/home-benefit.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { ProductFeatureComponent } from './components/home/product-feature/product-feature.component';
import { HomeRequiremetComponent } from './components/home/home-requiremet/home-requiremet.component';
import { RequirementFeatureComponent } from './components/home/requirement-feature/requirement-feature.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NavComponent } from './components/nav/nav.component';
import { HomeCotizadorComponent } from './components/home/home-cotizador/home-cotizador.component';
import { SliderRangeComponent } from './components/form/slider-range/slider-range.component';
import { InputTextFormComponent } from './components/form/input/input.form.component';
import { ApproximateFeeComponent } from './components/home/approximate-fee/approximate-fee.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    HomeBenefitComponent,
    HomeProductComponent,
    ProductFeatureComponent,
    HomeRequiremetComponent,
    RequirementFeatureComponent,
    HomeHeaderComponent,
    NavComponent,
    HomeCotizadorComponent,
    SliderRangeComponent,
    InputTextFormComponent,
    ApproximateFeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ errors: errorReducer }),
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: [HTTP_INTERCEPTORS],
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
