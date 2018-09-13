import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Planet2Component } from './planet2.component';

describe('Planet2Component', () => {
  let component: Planet2Component;
  let fixture: ComponentFixture<Planet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Planet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Planet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
