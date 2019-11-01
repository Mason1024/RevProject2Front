import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { MarketContainerComponent } from './market-container.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PostingContainerComponent } from '../posting-container/posting-container.component';
import { PhonePipe } from 'src/app/pipes/phone.pipe';

describe('MarketContainerComponent', () => {
  let component: MarketContainerComponent;
  let fixture: ComponentFixture<MarketContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketContainerComponent, PostingContainerComponent, PhonePipe ],
      imports: [ HttpClientTestingModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatCardModule, MatInputModule, BrowserAnimationsModule ]
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
