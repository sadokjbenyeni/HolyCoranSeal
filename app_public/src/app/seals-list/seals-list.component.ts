import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Seal } from '../seal';
import { NewSealDialogComponent } from '../new-seal-dialog/new-seal-dialog.component';
import { SealDataService } from '../seal-data.service';
import { DeleteSealDialogComponent } from '../delete-seal-dialog/delete-seal-dialog.component';
@Component({
  selector: 'app-seals-list',
  templateUrl: './seals-list.component.html',
  styleUrls: ['./seals-list.component.scss']
})
export class SealsListComponent implements OnInit {

  @Input() content: any;
  @Output() selectedSeal = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private sealDataService: SealDataService) { }

  ngOnInit(): void {
  }

  shareSelectedSeal(seal: Seal): void {
    this.selectedSeal.emit(seal);
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(NewSealDialogComponent, {
      width: '280px',
      height: '180px'
    });
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteSealDialogComponent, {
      width: '330px',
      height: '150px',
      data: {sealId: id}
    });
  }
}
