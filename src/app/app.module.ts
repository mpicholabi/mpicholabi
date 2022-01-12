import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ComentaryComponent } from './components/comentary/comentary.component';
import { ErrorInterceptorService } from '@/app/utils/error-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { errorReducer } from './store/error.reducer';
import { AppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ComentaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ errors: errorReducer }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
