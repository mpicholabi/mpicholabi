import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-cotizador',
  templateUrl: './home-cotizador.component.html',
})
export class HomeCotizadorComponent {
  formQuoter: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formQuoter = this.formBuilder.group({
      amount: ['', [Validators.required]],
      term: ['', [Validators.required]],
    });
  }
}
