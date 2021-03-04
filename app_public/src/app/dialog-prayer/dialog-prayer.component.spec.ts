import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPrayerComponent } from './dialog-prayer.component';

describe('DialogPrayerComponent', () => {
  let component: DialogPrayerComponent;
  let fixture: ComponentFixture<DialogPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPrayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
