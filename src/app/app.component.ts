import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@/app/app.state';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _isScrolled: boolean = false;
  title = 'AppTest';

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.translate.addLangs(['es']);
    this.translate.setDefaultLang('es');
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    this._isScrolled = this.document.documentElement?.scrollTop > 0 ? true : false;
  }

  public get isScrolled(): boolean {
    return this._isScrolled;
  }

  ngOnInit(): void {
    Aos.init();
  }
}
