import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmasterComponent } from './smaster.component';

describe('SmasterComponent', () => {
  let component: SmasterComponent;
  let fixture: ComponentFixture<SmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
