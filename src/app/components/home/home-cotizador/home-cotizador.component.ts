import { Component, OnInit } from '@angular/core';
import { scrollToTop } from '@/app/utils/scrollTo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-cotizador',
  templateUrl: './home-cotizador.component.html',
})
export class HomeCotizadorComponent {
  formQuoter: FormGroup;

  goToProduct(): void {
    scrollToTop('#homeProduct', 95);
  }

  constructor(private formBuilder: FormBuilder) {
    this.formQuoter = this.formBuilder.group({
      amount: [''],
    });
  }
}
