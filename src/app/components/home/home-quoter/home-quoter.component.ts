import { Component } from '@angular/core';
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
})
export class HomeQuoterComponent {
  formQuoter!: FormGroup;
  subject = new Subject();
  term: number = 12;
  isLoading: boolean = false;
  isInvalid: boolean = false;
  fee: number | string = 1500;

  goToProduct(): void {
    scrollToTop('#homeProduct', 95);
  }

  changeTerm(event: number): void {
    this.formQuoter.get('term')?.setValue(event);
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.createForm();
    this.changeFormValue();
    this.store.subscribe((state) => {
      const { quoter } = { ...state };
      if (quoter.amount !== this.formQuoter.get('amount')?.value) {
        this.formQuoter.get('amount')?.setValue(quoter.amount);
      }
      if (quoter.term !== this.formQuoter.get('term')?.value) {
        this.term = quoter.term;
        this.formQuoter.get('term')?.setValue(quoter.term);
      }
      this.fee = quoter.fee;
    });
  }

  saveQuoter(payload: QuoterCalculateInterface): void {
    this.store.dispatch(QuoterAction.SET_QUOTER({ payload }));
    this.getQuoterServices();
  }

  changeFormValue(): void {
    this.formQuoter
      .get('amount')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.isInvalid = (value < 3000 || value > 50000) && value !== '';
        console.log(value < 3000, value > 50000);
        if (!!value && value > 200) {
          this.saveQuoter({
            amount: value,
            term: this.formQuoter.get('term')?.value,
            fee: this.fee,
          });
        }
      });

    this.formQuoter
      .get('term')
      ?.valueChanges.pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.saveQuoter({
          amount: !!this.formQuoter.get('amount')?.value
            ? this.formQuoter.get('amount')?.value
            : 0,
          term: value,
          fee: this.fee,
        });
      });
  }

  createForm(): void {
    this.formQuoter = this.formBuilder.group({
      amount: [''],
      term: [12],
    });
  }

  getQuoterServices(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
