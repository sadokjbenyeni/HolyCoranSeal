import { Component, OnInit, Input } from '@angular/core';
import { SealDataService } from '../seal-data.service';

export class Seal {
  id: number;
  creationDate: Date;
  closingDate: Date;
  chapters: Chapter[];
}

export class Chapter {
  id: number;
  reader: string;
}

@Component({
  selector: 'app-seals-list',
  templateUrl: './seals-list.component.html',
  styleUrls: ['./seals-list.component.scss']
})
export class SealsListComponent implements OnInit {

  constructor(private sealDataService: SealDataService) { }

  public seals: Seal[];
  title = 'سلسلة الختمات';
  subtitle = 'ابحث عن ختمة أو إفتتح واحدة جديدة';

  ngOnInit(): void {
    this.getSeals();
  }

  private getSeals(): void {
    this.sealDataService
      .getSeals()
      .subscribe((foundSeals: Seal[]) => this.seals = foundSeals);
  }

}
