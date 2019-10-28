import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketContainerComponent } from './market-container.component';

describe('MarketContainerComponent', () => {
  let component: MarketContainerComponent;
  let fixture: ComponentFixture<MarketContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
