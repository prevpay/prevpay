import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailPage } from './mission-detail.page';

describe('MissionDetailPage', () => {
  let component: MissionDetailPage;
  let fixture: ComponentFixture<MissionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
