import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';
import { Seal } from '../seal';
import { SealDataService } from '../seal-data.service';


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
  public pageContent = {
    sealslist: new Array<Seal>(),
    sealdetails: new Array<Chapter>(),
    sealProgress: 0,
    tableHeader: {
      id: '',
      title: ''
    }
  };

  ngOnInit(): void {
    this.sealDataService.getSeals().subscribe((foundSeals: Seal[]) => {
      this.pageContent.sealslist = foundSeals;
    }
    );
    if (!this.selectedSealData) {
      this.sealDataService.getOneSeal().subscribe((foundSeal: Seal) => {
        this.pageContent.tableHeader.title = foundSeal.title;
        this.pageContent.tableHeader.id = foundSeal._id;
        this.pageContent.sealdetails = foundSeal.chapters;
        this.pageContent.sealProgress = foundSeal.progress;
      });
    }
  }

  public onSelectSeal(seal: Seal): void {
    this.selectedSealData = seal;
    this.pageContent.tableHeader.id = seal._id;
    this.pageContent.tableHeader.title = seal.title;
    this.pageContent.sealdetails = seal.chapters;
    this.pageContent.sealProgress = seal.progress;
  }
}
