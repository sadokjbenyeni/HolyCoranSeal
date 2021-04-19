import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSealDialogComponent } from './delete-seal-dialog.component';

describe('DeleteSealDialogComponent', () => {
  let component: DeleteSealDialogComponent;
  let fixture: ComponentFixture<DeleteSealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSealDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
