import { Component, OnInit } from '@angular/core';
import { ModalService } from '@/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}
}
