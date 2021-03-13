import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSealDialogComponent } from './new-seal-dialog.component';

describe('NewSealDialogComponent', () => {
  let component: NewSealDialogComponent;
  let fixture: ComponentFixture<NewSealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSealDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
