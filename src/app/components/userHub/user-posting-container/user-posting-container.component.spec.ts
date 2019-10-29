import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostingContainerComponent } from './user-posting-container.component';

describe('UserPostingContainerComponent', () => {
  let component: UserPostingContainerComponent;
  let fixture: ComponentFixture<UserPostingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPostingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
