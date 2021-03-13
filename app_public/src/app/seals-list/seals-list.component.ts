import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Seal } from '../home-page/home-page.component';
import { NewSealDialogComponent } from '../new-seal-dialog/new-seal-dialog.component';
import { SealDataService } from '../seal-data.service';

@Component({
  selector: 'app-seals-list',
  templateUrl: './seals-list.component.html',
  styleUrls: ['./seals-list.component.scss']
})
export class SealsListComponent implements OnInit {

  @Input() content: any;
  @Output() selectedSeal = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  shareSelectedSeal(seal: Seal): void {
    this.selectedSeal.emit(seal);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewSealDialogComponent, {
      width: '280px',
      height: '180px'
    });
  }
}
