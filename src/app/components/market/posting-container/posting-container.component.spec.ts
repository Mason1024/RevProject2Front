import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingContainerComponent } from './posting-container.component';

describe('PostingContainerComponent', () => {
  let component: PostingContainerComponent;
  let fixture: ComponentFixture<PostingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingContainerComponent ]
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
