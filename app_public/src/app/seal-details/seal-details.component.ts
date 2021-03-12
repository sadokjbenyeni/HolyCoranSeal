import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPrayerComponent } from '../dialog-prayer/dialog-prayer.component';
export interface SealTable {
  id: number;
  chapters: string;
  part: string;
  reader: string;
  progress: string;
}

interface ChapterState {
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
  constructor(public dialog: MatDialog) { }

  chapterStates: ChapterState[] = [
    { value: 'notRead', viewValue: 'لم تقرأ' },
    { value: 'reading', viewValue: 'في طور القراءة' },
    { value: 'read', viewValue: 'قرأت' }
  ];

  displayedColumns: string[] = ['progress', 'reader', 'part', 'chapter', 'id'];

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPrayerComponent);

    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
