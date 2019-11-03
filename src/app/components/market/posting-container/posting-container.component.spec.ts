import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostingContainerComponent } from './posting-container.component';
import { MatInputModule, MatCardModule, MatOptionModule } from '@angular/material';
import { PhonePipe } from 'src/app/pipes/phone.pipe';

describe('PostingContainerComponent', () => {
  let component: PostingContainerComponent;
  let fixture: ComponentFixture<PostingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingContainerComponent, PhonePipe ],
      imports: [ MatInputModule, MatCardModule, MatOptionModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
