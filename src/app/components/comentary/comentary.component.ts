import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentary',
  templateUrl: './comentary.component.html',
  styleUrls: ['./comentary.component.scss']
})
export class ComentaryComponent implements OnInit {
  title: string = 'Test';

  constructor() { }

  ngOnInit(): void {
  }

}
