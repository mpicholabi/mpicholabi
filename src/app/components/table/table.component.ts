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
  @Input()
  id: string = '';

  hoverSeparator: boolean = false;

  changeHover(value: boolean): void {
    console.log(value);
    this.hoverSeparator = value;
  }

  getValueRow(key: string, row: object): string | number {
    return !!row && !!(row as any)[key] ? (row as any)[key] : '';
  }

  constructor() {}
}
