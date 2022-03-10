import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '@/app/app.state';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';
import * as QuoterAction from '@/app/store/quoter.actions';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quoter-feature',
  templateUrl: './quoter-feature.component.html',
  styleUrls: ['./quoter-feature.component.scss'],
})
export class QuoterFeatureComponent {
  formQuoter!: FormGroup;
  subject = new Subject();
  term: number = 12;
  isLoading: boolean = false;
  hoverMail: boolean = false;
  hoverDownload: boolean = false;

  changeTerm(event: number): void {
    this.formQuoter.get('term')?.setValue(event);
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.createForm();
    this.changeFormValue();
    this.store.pipe(distinctUntilChanged()).subscribe((state) => {
      const { quoter } = state;
      if (quoter.amount !== this.formQuoter.get('amount')?.value) {
        this.formQuoter.get('amount')?.setValue(quoter.amount);
      }
      if (quoter.term !== this.formQuoter.get('term')?.value) {
        this.term = quoter.term;
        this.formQuoter.get('term')?.setValue(quoter.term);
      }
    });
  }

  saveQuoter(payload: QuoterCalculateInterface): void {
    this.store.dispatch(QuoterAction.SET_QUOTER({ payload }));
  }

  changeFormValue(): void {
    this.formQuoter
      .get('amount')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        if (!!value && value > 200) {
          this.saveQuoter({
            amount: value,
            term: this.formQuoter.get('term')?.value,
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
        });
      });
  }

  createForm(): void {
    this.formQuoter = this.formBuilder.group({
      amount: [''],
      term: [12],
    });
  }
}
