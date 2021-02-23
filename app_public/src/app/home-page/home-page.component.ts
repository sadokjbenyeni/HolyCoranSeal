import { Component, OnInit } from '@angular/core';
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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private sealDataService: SealDataService) { }

  public seals: Seal[];

  ngOnInit(): void {
    this.getSeals();
  }
  private getSeals(): void {
    this.sealDataService
      .getSeals()
      .then(foundSeals => this.seals = foundSeals);
  }
}
