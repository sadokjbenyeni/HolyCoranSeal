import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seal } from '../home-page/home-page.component';
@Component({
  selector: 'app-seals-list',
  templateUrl: './seals-list.component.html',
  styleUrls: ['./seals-list.component.scss']
})
export class SealsListComponent implements OnInit {

  @Input() content: any;
  @Output() selectedSeal = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  shareSelectedSeal(seal: Seal): void {
    this.selectedSeal.emit(seal);
  }
}
