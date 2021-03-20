import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SealDataService } from '../seal-data.service';

@Component({
  selector: 'app-new-seal-dialog',
  templateUrl: './new-seal-dialog.component.html',
  styleUrls: ['./new-seal-dialog.component.scss']
})
export class NewSealDialogComponent implements OnInit {

  constructor(private sealDataService: SealDataService,
              public dialogRef: MatDialogRef<NewSealDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createNewSeal(): void {
    this.sealDataService.createNewSeal(this.data);
    window.location.reload();
  }
}
