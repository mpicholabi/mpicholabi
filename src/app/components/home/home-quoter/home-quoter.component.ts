import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { scrollToTop } from '@/app/utils/scrollTo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '@/app/app.state';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as QuoterAction from '@/app/store/quoter.actions';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-quoter',
  templateUrl: './home-quoter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeQuoterComponent {
  formQuoter!: FormGroup;
  subject = new Subject();
  term: number = 12;
  isLoading: boolean = false;

  goToProduct(): void {
    scrollToTop('#homeProduct', 95);
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.createForm();
    this.changeFormValue();
  }

  createForm(): void {
    this.formQuoter = this.formBuilder.group({
      amount: [''],
      term: [12],
    });
  }

  changeFormValue(): void {
    this.formQuoter.get('amount')?.valueChanges.subscribe((value) => {
      this.saveQuoter({
        amount: value,
        term: this.formQuoter.get('term')?.value,
      });
    });

    this.formQuoter.get('term')?.valueChanges.subscribe((value) => {
      this.saveQuoter({
        term: value,
        amount: this.formQuoter.get('amount')?.value,
      });
    });
  }

  changeTerm(event: number): void {
    this.formQuoter.get('term')?.setValue(event);
  }

  saveQuoter(payload: QuoterCalculateInterface): void {
    this.store.dispatch(QuoterAction.SET_QUOTER({ payload }));
    if (!!this.formQuoter.get('amount')?.value) {
      console.log(payload);
      this.getQuoterService();
    }
  }

  getQuoterService(): void {
    this.setLoading(true);
    setTimeout(() => {
      this.setLoading(false);
    }, 4000);
  }

  setLoading(value: boolean): void {
    this.isLoading = value;
  }
}
