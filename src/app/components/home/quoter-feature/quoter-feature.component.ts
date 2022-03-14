import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '@/app/app.state';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';
import * as QuoterAction from '@/app/store/quoter.actions';
import { Subject } from 'rxjs';
import { dataDummy } from './dataDummy';
import { CurrencyPipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import { ModalService } from '@/app/services/modal/modal.service';
@Component({
  selector: 'app-quoter-feature',
  templateUrl: './quoter-feature.component.html',
  styleUrls: ['./quoter-feature.component.scss'],
})
export class QuoterFeatureComponent implements OnInit {
  formQuoter!: FormGroup;
  subject = new Subject();
  term: number = 12;
  isLoading: boolean = false;
  hoverMail: boolean = false;
  hoverDownload: boolean = false;
  data: Array<Array<Object>> = [];
  items: Array<Object> = [];
  page: number = 0;
  totalPage: number = 0;
  perPage: number = 4;
  isQuoterLevel: boolean = true;
  fee: number | string = '';

  changeTerm(event: number): void {
    this.formQuoter.get('term')?.setValue(event);
  }

  showMore(): void {
    if (this.page === this.totalPage - 1) return;
    this.page++;
    this.items = [...this.items, ...this.data[this.page]];
  }

  loadData(): void {
    if (dataDummy.length > 0) {
      this.totalPage = Math.ceil(dataDummy.length / this.perPage);
      const data = [];
      for (let i = 0; i < this.totalPage; i++) {
        const start = i === 0 ? i : i * this.perPage;
        const limit = (i + 1) * this.perPage;
        data.push(dataDummy.slice(start, limit));
      }
      this.data = data;
      this.items = [...data[this.page]];
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private currencyPipe: CurrencyPipe,
    private modalService: ModalService
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
      this.fee = quoter.fee;
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

  formatCurrency(key: number | string): string {
    return this.currencyPipe.transform(key, 'GTQ', 'symbol') || '';
  }

  downloadQuoter(): void {
    const doc = new jsPDF();
    if (this.isQuoterLevel) {
      doc.text('¡Cotizacion cuota nivelada!', 10, 10);
      doc.save('Cuota-nivelada.pdf');
    } else {
      doc.text('¡Cotizacion cuota sobre saldos!', 10, 10);
      doc.save('Cuota-sobre-saldos.pdf');
    }
  }

  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  ngOnInit(): void {
    this.loadData();
  }
}
