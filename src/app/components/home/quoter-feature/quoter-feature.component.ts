import { AppState } from '@/app/app.state';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import * as QuoterAction from '@/app/store/quoter.actions';

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

  changeTerm(event: number): void {
    this.formQuoter.get('term')?.setValue(event);
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.createForm();
    this.changeFormValue();
  }

  saveQuoter(payload: QuoterCalculateInterface): void {
    this.store.dispatch(QuoterAction.SET_QUOTER({ payload }));
    if (!!this.formQuoter.get('amount')?.value) {
      console.log(payload);
      this.getQuoterService();
    }
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

  createForm(): void {
    this.formQuoter = this.formBuilder.group({
      amount: [''],
      term: [12],
    });
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
