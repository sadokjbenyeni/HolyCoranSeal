import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
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

export interface SealTable {
  id: number;
  chapter: string;
  part: string;
  reader: string;
}

const SEAL_DATA: SealTable[] = [
  { id: 1, chapter: 'ٱلْفَاتِحَة', part: '1', reader: '' },
  { id: 2, chapter: 'ٱلْبَقَرَة', part: '3 - 1', reader: '' },
  { id: 3, chapter: 'آلِ عِمْرَان', part: '4 - 3', reader: '' },
  { id: 4, chapter: 'ٱلنِّسَاء', part: '6 - 4', reader: '' },
  { id: 5, chapter: 'ٱلْمَائِدَة', part: '7 - 6', reader: '' },
  { id: 6, chapter: 'ٱلْأَنْعَام', part: '8 - 7', reader: '' },
  { id: 7, chapter: 'ٱلْأَعْرَاف', part: '9 - 8', reader: '' },
  { id: 8, chapter: 'ٱلْأَنْفَال', part: '10 - 9', reader: '' },
  { id: 9, chapter: 'ٱلتَّوْبَة', part: '11 - 10', reader: '' },
  { id: 10, chapter: 'يُونُس', part: '11', reader: '' },
  { id: 11, chapter: 'هُود', part: '12 - 11', reader: '' },
  { id: 12, chapter: 'يُوسُف', part: '13 - 12', reader: '' },
  { id: 13, chapter: 'ٱلرَّعْد', part: '13', reader: '' },
  { id: 14, chapter: 'إِبْرَاهِيم', part: '13', reader: '' },
  { id: 15, chapter: 'ٱلْحِجْر', part: '14', reader: '' },
  { id: 16, chapter: 'ٱلنَّحْل', part: '14', reader: '' },
  { id: 17, chapter: 'ٱلْإِسْرَاء', part: '15', reader: '' },
  { id: 18, chapter: 'ٱلْكَهْف', part: '16 - 15', reader: '' },
  { id: 19, chapter: 'مَرْيَم', part: '16', reader: '' },
  { id: 20, chapter: 'طه', part: '16', reader: '' },
  { id: 21, chapter: 'ٱلْأَنْبِيَاء', part: '17', reader: '' },
  { id: 22, chapter: 'ٱلْحَجّ', part: '17', reader: '' },
  { id: 23, chapter: 'ٱلْمُؤْمِنُون', part: '18', reader: '' },
  { id: 24, chapter: 'ٱلنُّور', part: '18', reader: '' },
  { id: 25, chapter: 'ٱلْفُرْقَان', part: '19 - 18', reader: '' },
  { id: 26, chapter: 'ٱلشُّعَرَاء', part: '19', reader: '' },
  { id: 27, chapter: 'ٱلنَّمْل', part: '20 - 19', reader: '' },
  { id: 28, chapter: 'ٱلْقَصَص', part: '20', reader: '' },
  { id: 29, chapter: 'ٱلْعَنْكَبُوت', part: '21 - 20', reader: '' },
  { id: 30, chapter: 'ٱلرُّوم', part: '21', reader: '' },
  { id: 31, chapter: 'لُقْمَان', part: '21', reader: '' },
  { id: 32, chapter: 'ٱلسَّجْدَة', part: '21', reader: '' },
  { id: 33, chapter: 'ٱلْأَحْزَاب', part: '22 - 21', reader: '' },
  { id: 34, chapter: 'سَبَأ', part: '22', reader: '' },
  { id: 35, chapter: 'فَاطِر', part: '22', reader: '' },
  { id: 36, chapter: 'يس', part: '23 - 22', reader: '' },
  { id: 37, chapter: 'ٱلصَّافَّات', part: '23', reader: '' },
  { id: 38, chapter: 'ص', part: '23', reader: '' },
  { id: 39, chapter: 'ٱلزُّمَر', part: '24 - 23', reader: '' },
  { id: 40, chapter: 'غَافِر', part: '24', reader: '' },
  { id: 41, chapter: 'فُصِّلَت', part: '25 - 24', reader: '' },
  { id: 42, chapter: 'ٱلشُّورىٰ', part: '25', reader: '' },
  { id: 43, chapter: 'ٱلْزُّخْرُف', part: '25', reader: '' },
  { id: 44, chapter: 'ٱلدُّخَان', part: '25', reader: '' },
  { id: 45, chapter: 'ٱلْجَاثِيَة', part: '25', reader: '' },
  { id: 46, chapter: 'ٱلْأَحْقَاف', part: '26', reader: '' },
  { id: 47, chapter: 'مُحَمَّد', part: '26', reader: '' },
  { id: 48, chapter: 'ٱلْفَتْح', part: '26', reader: '' },
  { id: 49, chapter: 'ٱلْحُجُرَات', part: '26', reader: '' },
  { id: 50, chapter: 'ق', part: '26', reader: '' },
  { id: 51, chapter: 'ٱلذَّارِيَات', part: '27 - 26', reader: '' },
  { id: 52, chapter: 'ٱلطُّور', part: '27', reader: '' },
  { id: 53, chapter: 'ٱلنَّجْم', part: '27', reader: '' },
  { id: 54, chapter: 'ٱلْقَمَر', part: '27', reader: '' },
  { id: 55, chapter: 'ٱلرَّحْمَٰن', part: '27', reader: '' },
  { id: 56, chapter: 'ٱلْوَاقِعَة', part: '27', reader: '' },
  { id: 57, chapter: 'ٱلْحَدِيد', part: '27', reader: '' },
  { id: 58, chapter: 'ٱلْمُجَادِلَة', part: '28', reader: '' },
  { id: 59, chapter: 'ٱلْحَشْر', part: '28', reader: '' },
  { id: 60, chapter: 'ٱلْمُمْتَحَنَة', part: '28', reader: '' },
  { id: 61, chapter: 'ٱلصَّفّ', part: '28', reader: '' },
  { id: 62, chapter: 'ٱلْجُمُعَة', part: '28', reader: '' },
  { id: 63, chapter: 'ٱلْمُنَافِقُون', part: '28', reader: '' },
  { id: 64, chapter: 'ٱلتَّغَابُن', part: '28', reader: '' },
  { id: 65, chapter: 'ٱلطَّلَاق', part: '28', reader: '' },
  { id: 66, chapter: 'ٱلتَّحْرِيم', part: '28', reader: '' },
  { id: 67, chapter: 'ٱلْمُلْك', part: '29', reader: '' },
  { id: 68, chapter: 'ٱلْقَلَم', part: '29', reader: '' },
  { id: 69, chapter: 'ٱلْمَعَارِج', part: '29', reader: '' },
  { id: 70, chapter: 'ٱلْحَاقَّة', part: '29', reader: '' },
  { id: 71, chapter: 'نُوح', part: '29', reader: '' },
  { id: 72, chapter: 'ٱلْجِنّ', part: '29', reader: '' },
  { id: 73, chapter: 'ٱلْمُزَّمِّل', part: '29', reader: '' },
  { id: 74, chapter: 'ٱلْمُدَّثِّر', part: '29', reader: '' },
  { id: 75, chapter: 'ٱلْقِيَامَة', part: '29', reader: '' },
  { id: 76, chapter: 'ٱلْإِنْسَان', part: '29', reader: '' },
  { id: 77, chapter: 'ٱلْمُرْسَلَات', part: '29', reader: '' },
  { id: 78, chapter: 'ٱلنَّبَأ', part: '29', reader: '' },
  { id: 79, chapter: 'ٱلنَّازِعَات', part: '29', reader: '' },
  { id: 80, chapter: 'عَبَسَ', part: '30', reader: '' },
  { id: 81, chapter: 'ٱلتَّكْوِير', part: '30', reader: '' },
  { id: 82, chapter: 'ٱلْإِنْفِطَار', part: '30', reader: '' },
  { id: 83, chapter: 'ٱلْمُطَفِّفِين', part: '30', reader: '' },
  { id: 84, chapter: 'ٱلْإِنْشِقَاق', part: '30', reader: '' },
  { id: 85, chapter: 'ٱلْبُرُوج', part: '30', reader: '' },
  { id: 86, chapter: 'ٱلطَّارِق', part: '30', reader: '' },
  { id: 87, chapter: 'ٱلْأَعْلَىٰ', part: '30', reader: '' },
  { id: 88, chapter: 'ٱلْغَاشِيَة', part: '30', reader: '' },
  { id: 89, chapter: 'ٱلْفَجْر', part: '30', reader: '' },
  { id: 90, chapter: 'ٱلْبَلَد', part: '30', reader: '' },
  { id: 91, chapter: 'ٱلشَّمْس', part: '30', reader: '' },
  { id: 92, chapter: 'ٱللَّيْل', part: '30', reader: '' },
  { id: 93, chapter: 'ٱلضُّحَىٰ', part: '30', reader: '' },
  { id: 94, chapter: 'ٱلشَّرْح', part: '30', reader: '' },
  { id: 95, chapter: 'ٱلتِّين', part: '30', reader: '' },
  { id: 96, chapter: 'ٱلْعَلَق', part: '30', reader: '' },
  { id: 97, chapter: 'ٱلْقَدْر', part: '30', reader: '' },
  { id: 98, chapter: 'ٱلْبَيِّنَة', part: '30', reader: '' },
  { id: 99, chapter: 'ٱلزَّلْزَلَة', part: '30', reader: '' },
  { id: 100, chapter: 'ٱلْعَادِيَات', part: '30', reader: '' },
  { id: 101, chapter: 'ٱلْقَارِعَة', part: '30', reader: '' },
  { id: 102, chapter: 'ٱلتَّكَاثُر', part: '30', reader: '' },
  { id: 103, chapter: 'ٱلْعَصْر', part: '30', reader: '' },
  { id: 104, chapter: 'ٱلْهُمَزَة', part: '30', reader: '' },
  { id: 105, chapter: 'ٱلْفِيل', part: '30', reader: '' },
  { id: 106, chapter: 'قُرَيْش', part: '30', reader: '' },
  { id: 107, chapter: 'ٱلْمَاعُون', part: '30', reader: '' },
  { id: 108, chapter: 'ٱلْكَوْثَر', part: '30', reader: '' },
  { id: 109, chapter: 'ٱلْكَافِرُون', part: '30', reader: '' },
  { id: 110, chapter: 'ٱلنَّصْر', part: '30', reader: '' },
  { id: 111, chapter: 'ٱلْمَسَد', part: '30', reader: '' },
  { id: 112, chapter: 'ٱلْإِخْلَاص', part: '30', reader: '' },
  { id: 113, chapter: 'ٱلْفَلَق', part: '30', reader: '' },
  { id: 114, chapter: 'ٱلنَّاس', part: '30', reader: '' },
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'chapter', 'part', 'reader'];
  dataSource = new MatTableDataSource<SealTable>(SEAL_DATA);
  selection = new SelectionModel<SealTable>(true, []);

  constructor(private sealDataService: SealDataService) { }

  public seals: Seal[];

  ngOnInit(): void {
    this.getSeals();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SealTable): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  private getSeals(): void {
    this.sealDataService
      .getSeals()
      .then(foundSeals => this.seals = foundSeals);
  }
}
