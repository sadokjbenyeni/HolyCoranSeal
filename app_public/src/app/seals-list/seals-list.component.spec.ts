import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SealsListComponent } from './seals-list.component';

describe('SealsListComponent', () => {
  let component: SealsListComponent;
  let fixture: ComponentFixture<SealsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SealsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
