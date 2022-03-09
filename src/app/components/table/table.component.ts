import { Component, Input } from '@angular/core';

interface HeaderTableInterface {
  label: string;
  key: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  headers: Array<HeaderTableInterface> = [];
  @Input()
  items: Array<Object> = [];

  getValueRow(key: string, row: object): string | number {
    return (row as any)[key];
  }

  constructor() {}
}
