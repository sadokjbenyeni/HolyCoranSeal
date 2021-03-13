import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogPrayerComponent } from './dialog-prayer/dialog-prayer.component';
import { FooterComponent } from './footer/footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SealsListComponent } from './seals-list/seals-list.component';
import { SealDetailsComponent } from './seal-details/seal-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { NewSealDialogComponent } from './new-seal-dialog/new-seal-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    DialogPrayerComponent,
    FooterComponent,
    PageHeaderComponent,
    SealsListComponent,
    SealDetailsComponent,
    NewSealDialogComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatMenuModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
