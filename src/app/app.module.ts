import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { I18NextModule, ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@/app/app-routing.module';
import { ErrorInterceptorService } from '@/app/utils/error-interceptor.service';
import { errorReducer } from '@/app/store/error.reducer';

// import in next section the component of the app
import { HomeComponent } from '@/app/pages/home/home.component';
import { AppComponent } from '@/app/app.component';
import { environment } from '@/environments/environment';

export function appInit(i18next: ITranslationService) {
  return () => i18next.init({
      fallbackLng: 'es',
      debug: true,
      returnEmptyString: false,
      ns: [
        'translation',
        'validation',
        'error'
      ],
    });
}

export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    I18NextModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: [HTTP_INTERCEPTORS, I18N_PROVIDERS],
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
