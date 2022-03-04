import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { scrollToTop } from '@/app/utils/scrollTo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SET_QUOTER } from '@/app/store/quoter.actions';
import { AppState } from '@/app/app.state';
import { Store } from '@ngrx/store';
import * as QuoterAction from '@/app/store/quoter.actions';

@Component({
  selector: 'app-home-cotizador',
  templateUrl: './home-cotizador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCotizadorComponent {
  formQuoter!: FormGroup;
  term: number = 12;
  amount: number = 0;

  goToProduct(): void {
    scrollToTop('#homeProduct', 95);
  }

  constructor(
    private formBuilder: FormBuilder,
    private changeForm: ChangeDetectorRef,
    private store: Store<AppState>
  ) {
    this.createForm();
    this.changeFormValue();
  }

  createForm(): void {
    this.formQuoter = this.formBuilder.group({
      amount: [''],
    });
  }

  changeFormValue(): void {
    this.formQuoter.valueChanges.subscribe((formValue) => {
      this.amount = formValue.amount;
      this.saveQuoter(this.amount, this.term);
      return formValue;
    });
  }

  changeTerm(event: number): void {
    this.term = event;
    this.saveQuoter(this.amount, this.term);
  }

  saveQuoter(amount: number, term: number): void {
    const value: number = amount!! ? (amount as number) : 0;
    const payload = { term, amount: value };
    this.store.dispatch(QuoterAction.SET_QUOTER({ payload }));
  }
}
