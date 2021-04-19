import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SealDataService } from '../seal-data.service';

@Component({
  selector: 'app-delete-seal-dialog',
  templateUrl: './delete-seal-dialog.component.html',
  styleUrls: ['./delete-seal-dialog.component.scss']
})
export class DeleteSealDialogComponent implements OnInit {

  constructor(private sealDataService: SealDataService,
              public dialogRef: MatDialogRef<DeleteSealDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {sealId: string}) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteSeal(id: string): void {
    this.sealDataService.deleteSeal(id);
    window.location.reload();
  }
}
