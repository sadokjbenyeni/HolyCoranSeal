import { Component, OnInit } from '@angular/core';
import { SealDataService } from '../seal-data.service';

export class Seal {
  id: number;
  title: string;
  creationDate: Date;
  closingDate: Date;
  chapters: Chapter[];
}

export class Chapter {
  id: number;
  chapters: string;
  part: string;
  reader: string;
  status: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private sealDataService: SealDataService) { }
  public selectedSealData: Seal;

  public seal: Seal;
  public seals: Seal[];
  public lastSealId: number;
  public pageContent = {
    sealslist: new Array<Seal>(),
    sealdetails: new Array<Chapter>(),
    tableHeader: {
      id: 0,
      title: ''
    }
  };

  ngOnInit(): void {
    this.sealDataService.getSeals().subscribe((foundSeals: Seal[]) => {
      this.lastSealId = foundSeals[foundSeals.length - 1].id;
      this.pageContent.sealslist = foundSeals;
    }
    );
    if (!this.selectedSealData) {
      this.sealDataService.getSealById(1).subscribe((foundSeal: Seal) => {
        this.pageContent.tableHeader.title = foundSeal.title;
        this.pageContent.tableHeader.id = foundSeal.id;
        this.pageContent.sealdetails = foundSeal.chapters;
      });
    }
  }

  public onSelectSeal(seal: Seal): void {
    this.selectedSealData = seal;
    this.pageContent.tableHeader.id = seal.id;
    this.pageContent.tableHeader.title = seal.title;
    this.pageContent.sealdetails = seal.chapters;
  }
}
