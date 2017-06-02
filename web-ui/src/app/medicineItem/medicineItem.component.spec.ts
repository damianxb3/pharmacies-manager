import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineItemComponent } from './medicineItem.component';

describe('MedicinesComponent', () => {
  let component: MedicineItemComponent;
  let fixture: ComponentFixture<MedicineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineItemComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
