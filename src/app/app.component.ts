import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@/app/app.state';
import { TranslateService } from '@ngx-translate/core';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AppTest';

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService,
  ) {
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    Aos.init();
  }
}
