import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { PostingFormComponent } from './posting-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';

describe('PostingFormComponent', () => {
  let component: PostingFormComponent;
  let fixture: ComponentFixture<PostingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingFormComponent ],
      imports: [ FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, HttpClientTestingModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
