import { Component } from '@angular/core';

import { scrollToTop } from '@/app/utils/scrollTo'

@Component({
  selector: 'app-home-cotizador',
  templateUrl: './home-cotizador.component.html',
  styleUrls: ['./home-cotizador.component.scss']
})
export class HomeCotizadorComponent {

  constructor() { }

  goToProduct():void {
    scrollToTop('#homeProduct', 95);
  }
}
