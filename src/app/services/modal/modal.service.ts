import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  body: HTMLElement = document.body;
  showModal: boolean = true;
  constructor() {}

  openModal(): void {
    this.body.classList.add('modal-open');
    this.showModal = !this.showModal;
  }
  closeModal(): void {
    this.body.classList.remove('modal-open');
    this.showModal = !this.showModal;
  }
  get statusModal(): boolean {
    return this.showModal;
  }
}
