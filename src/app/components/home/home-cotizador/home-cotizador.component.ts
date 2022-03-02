import { Component, OnInit } from '@angular/core';

import { scrollToTop } from '@/app/utils/scrollTo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-cotizador',
  templateUrl: './home-cotizador.component.html',
  styleUrls: ['./home-cotizador.component.scss'],
})
export class HomeCotizadorComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  goToProduct(): void {
    scrollToTop('#homeProduct', 95);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
}
