import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostViewComponent } from './cost-view.component';

describe('CostViewComponent', () => {
  let component: CostViewComponent;
  let fixture: ComponentFixture<CostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
