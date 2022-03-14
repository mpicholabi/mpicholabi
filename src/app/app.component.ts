import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AppTest';

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    Aos.init();
  }
}
