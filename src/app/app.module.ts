import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';​
import { NgxScrollTopModule } from 'ngx-scrolltop';

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
import { NavComponent } from './components/nav/nav.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/','.json');
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
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxScrollTopModule,
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
          deps: [HttpClient]
      }
  })
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
