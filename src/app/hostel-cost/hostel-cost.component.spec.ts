import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelCostComponent } from './hostel-cost.component';

describe('HostelCostComponent', () => {
  let component: HostelCostComponent;
  let fixture: ComponentFixture<HostelCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
