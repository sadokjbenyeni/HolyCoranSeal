import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPrayerComponent } from '../dialog-prayer/dialog-prayer.component';
import { SealDataService } from '../seal-data.service';
import { Dictionary } from 'lodash';
export interface ISealTable {
  id: number;
  chapters: string;
  part: string;
  reader: string;
  progress: string;
}

interface IChapterState {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-seal-details',
  templateUrl: './seal-details.component.html',
  styleUrls: ['./seal-details.component.scss']
})
export class SealDetailsComponent implements OnInit {

  @Input() content: any;
  constructor(public dialog: MatDialog, private sealDataService: SealDataService) { }

  public readers: any = {};
  public states: any = {};

  displayedColumns: string[] = ['progress', 'reader', 'part', 'chapter', 'id'];

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogPrayerComponent);
  }

  public updateSeal(): void {
    for (const key of Object.keys(this.states)) {
      this.states[key] = (this.states[key] === 'reading') ? 'في طور القراءة' : 'قرأت';
    }
    this.sealDataService.updateSeal(this.readers, this.states, this.content.tableHeader.id);
  }


}
