import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-cotizador',
  templateUrl: './home-cotizador.component.html',
})
export class HomeCotizadorComponent implements OnInit {
  quoter!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm;
  }

  createForm(): void {
    this.quoter = this.formBuilder.group({
      amount: ['', [Validators.required]],
      term: ['', [Validators.required]],
    });
  }
}
