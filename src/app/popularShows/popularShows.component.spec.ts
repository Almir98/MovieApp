/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopularShowsComponent } from './popularShows.component';

describe('PopularShowsComponent', () => {
  let component: PopularShowsComponent;
  let fixture: ComponentFixture<PopularShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
