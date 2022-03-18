import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '@/app/services/modal/modal.service';

enum SendEmail {
  SUCCESS = 'SUCCESS',
  INIT = 'INIT',
  ERROR = 'ERROR',
}

@Component({
  selector: 'app-form-send-email',
  templateUrl: './form-send-email.component.html',
})
export class FormSendEmailComponent {
  status: SendEmail = SendEmail.INIT;
  sendQuoter!: FormGroup;
  _level: boolean = false;
  _both: boolean = false;
  _balance: boolean = false;

  set level(value: boolean) {
    if (value && this._balance) {
      this._both = true;
    } else if (!value || !this.balance) {
      this._both = false;
    }
    this._level = value;
  }

  set both(value: boolean) {
    if (value) {
      this._level = true;
      this._balance = true;
    } else {
      this._level = false;
      this._balance = false;
    }
    this._both = value;
  }

  set balance(value: boolean) {
    if (value && this._level) {
      this._both = true;
    } else if (!value || !this.level) {
      this._both = false;
    }
    this._balance = value;
  }

  get level() {
    return this._level;
  }

  get both() {
    return this._both;
  }

  get balance() {
    return this._balance;
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {
    this.createForm();
  }

  createForm(): void {
    this.sendQuoter = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendEmailQuoter(): void {
    this.status = SendEmail.SUCCESS;
  }

  backToTop(): void {
    this.sendQuoter.reset();
    this.status = SendEmail.INIT;
    this.modalService.closeModal();
  }

  tryAgain(): void {
    this.sendQuoter.reset();
    this.status = SendEmail.INIT;
  }
}
